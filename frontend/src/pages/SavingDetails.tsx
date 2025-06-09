import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Link, useParams } from "react-router-dom";
import useSavingsServices, {
  type SavingsType,
  ListTransactions,
  TransactionType,
} from "../services/SavingsServices";
import { progress } from "framer-motion";

const ICON_SP = "/logo-xs.png";

function SavingDetails() {
  const { id } = useParams();
  const [selected, setSelected] = useState<SavingsType | null>(null);

  const { addTransaction } = useSavingsServices();

  const [isOpen, setIsOpen] = useState(false);
  const handleDrop = () => {
    setIsOpen(!isOpen);
  };

  const [message, setMessage] = useState<String>();

  useEffect(() => {
    const dataLocal = localStorage.getItem("mySavings");

    if (dataLocal) {
      try {
        const parsedData: SavingsType[] = JSON.parse(dataLocal);

        // 🔍 Trouve la donnée avec l'ID correspondant
        const foundItem = parsedData.find((item) => item.id === id);
        setSelected(foundItem ?? null);
      } catch (error) {
        console.error("Erreur JSON :", error);
      }
    }
  }, [id]);

  const totalDeposit =
    selected?.deposit?.reduce((acc, tx) => acc + (tx.amount ?? 0), 0) ?? 0;

  const totalWithdrawal =
    selected?.withdrawal?.reduce((acc, tx) => acc + (tx.amount ?? 0), 0) ?? 0;

  const netAmount = totalDeposit - totalWithdrawal;

  const [progress, setProgress] = useState<number>()

  useEffect(() => {
    let progressValue =
    selected && selected.amount && selected.amount > 0
      ? Math.min((netAmount / selected.amount) * 100, 100)
      : 0;

      setProgress(progressValue)
  },[netAmount])

console.log(progress);

  
  


      

  function monthsDiff(dateFrom: Date, dateTo: Date): number {
    return (
      dateTo.getMonth() -
      dateFrom.getMonth() +
      12 * (dateTo.getFullYear() - dateFrom.getFullYear())
    );
  }

  const today = new Date();
  const deadlineDate = selected ? new Date(selected.deadline) : null;

  const monthsRemaining = deadlineDate ? monthsDiff(today, deadlineDate) : 0;

  const monthlySavingNeeded =
    selected && selected.amount
      ? monthsRemaining >= 1
        ? Math.ceil(selected.amount / monthsRemaining)
        : selected.amount - netAmount // moins d'un mois, épargner tout
      : 0; // pas de données

  const [transaction, setTransaction] = useState<ListTransactions>({
    date: new Date(),
    amount: 0,
    type: "deposit",
  });

  const handleAddTransaction = async () => {
    if (!id) return;
    if(transaction.amount > netAmount && transaction.type == "withdrawal"){
      setMessage(`Solde insuffisant (max disponible : ${netAmount})`)
      return
    }

    addTransaction(transaction, id);

    const dataLocal = localStorage.getItem("mySavings");
    if (dataLocal) {
      try {
        const parsedData: SavingsType[] = JSON.parse(dataLocal);
        const foundItem = parsedData.find((item) => item.id === id);
        setSelected(foundItem ?? null);
        setTimeout(() => {
          setIsOpen(false);
        }, 200);
        setTransaction({
          date: new Date(),
          amount: 0,
          type: "deposit",
        });
      } catch (error) {
        console.error("Erreur JSON après ajout :", error);
      }
    }
  };

  return (
    <div>
      {selected && (
        <>
          <div className="flex mt-10 flex-col">
            <Link
              to="/epargnes"
              className="text-xs bg-gray-700 p-1 rounded-lg ml-2 w-15 text-center"
            >
              Retour
            </Link>
            <div className="flex justify-between items-center">
              <h2 className="bold text-sm md:text-xl ml-5"> {selected.name}</h2>
              <img
                src={ICON_SP}
                alt="logo_xs"
                className="h-8 mr-5"
              />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-center mt-2">
              <p className="text-xs">Montant épargné</p>
              <p className="text-2xl font-semibold">
                {netAmount !== undefined && netAmount > 0
                  ? netAmount.toLocaleString() + " €"
                  : "0"}
              </p>
            </div>

            {/* Nouveau cercle de progression */}
            <div className="relative flex items-center justify-center mt-5">
              <div
                style={{
                  position: "relative",
                  display: "inline-flex",
                }}
              >

                <CircularProgress
                  variant="determinate"
                  value={100}
                  size={170}
                  thickness={3}
                  sx={{ color: "#1d1d21" }}
                />
                {/* Cercle progression bleu */}
                <CircularProgress
                  variant="determinate"
                  value={progress}
                  size={170}
                  thickness={3}
                  sx={{
                    color: "#009CEA",
                    position: "absolute",
                    left: 0,
                    top: 0,
                  }}
                />
              </div>

              <div className="absolute flex flex-col items-center justify-center ">
                <p className="text-xs">Objectif</p>
                <p className="text-2xl font-bold text-[#009CEA]">
                  {selected.amount}
                </p>
                <p className="text-xs mt-2 flex flex-col items-center ">
                  Avant {""}
                  <span className="uppercase text-sky-500">
                    {new Date(selected.deadline).toLocaleDateString("fr-FR", {
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </p>
              </div>
            </div>
            <p className=" text-xs p-3 mt-2 text-center ">
              Tu dois épargner{" "}
              <span className="text-base font-bold text-[#009CEA] ">
                {monthlySavingNeeded}
              </span>{" "}
              euros / mois si tu veux atteindre ton objectif :{" "}
              <span className="text-base font-bold text-[#009CEA] ">
                Vacances
              </span>{" "}
            </p>
            <div className="w-full px-4">
              <div className="flex items-center justify-between mt-2 text-xs">
                <p>Transactions</p>
                <div className="flex justify-between gap-15">
                  <span className="text-xs text-[#00FF62]/50">
                    Dépots = {totalDeposit.toLocaleString()} €
                  </span>
                  <span className="text-xs text-[#FF0000]/50">
                    Retrait = {totalWithdrawal.toLocaleString()} €
                  </span>
                </div>
              </div>
            </div>
            <ul className="w-full px-5 mt-3 flex flex-col gap-3 overflow-hidden h-[20vh]">
              {selected &&
                (() => {
                  const allTransactions = [
                    ...selected.deposit.map((tx) => ({
                      ...tx,
                      type: "deposit",
                    })),
                    ...selected.withdrawal.map((tx) => ({
                      ...tx,
                      type: "withdrawal",
                    })),
                  ].sort(
                    (a, b) =>
                      new Date(b.date).getTime() - new Date(a.date).getTime()
                  ); // ordre décroissant

                  return allTransactions.map((tx, index) => (
                    <li
                      key={index}
                      className={`flex w-[92%] relative justify-between p-3 ${
                        tx.type === "deposit"
                          ? "border-l-[#00FF62]"
                          : "border-l-[#FF0000]"
                      } rounded-br-[5px] rounded-tr-[5px] drop-figma gradient-border items-center text-xs`}
                    >
                      <p>{tx.type === "deposit" ? "Dépôt" : "Retrait"}</p>
                      <p
                        className={
                          tx.type === "deposit"
                            ? "text-green-500"
                            : "text-red-500"
                        }
                      >
                        {tx.amount} €
                      </p>
                    </li>
                  ));
                })()}
            </ul>
          </div>
        </>
      )}

      <div
        onClick={handleDrop}
        className={` ${
          isOpen ? "rotate-45" : "rotate-0"
        } z-110 absolute right-5 bottom-20`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-plus-icon lucide-plus"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      </div>

      {isOpen && (
        <>
          <div className="overlay-add-saving absolute top-0 left-0 w-full h-full bg-black/60 z-100 flex flex-col justify-center items-center gap-3 backdrop-blur-[2px]">
            <p>Ajouter une transaction</p>
            <select
              onChange={(e) => {
                setTransaction((prev) => ({
                  ...prev,
                  type: e.target.value as TransactionType,
                }));
              }}
              name="transaction"
              id=""
              className="mt-2 cursor-pointer w-[40%] min-w-[300px] text-center bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-sm"
            >
              <option
                value=""
                selected
                disabled
              >
                Merci de choisir le type
              </option>
              <option value="deposit">Dépôt</option>
              <option value="withdrawal">Retrait</option>
            </select>
            <input
              onChange={(e) => {
                  setTransaction((prev) => ({
                    ...prev,
                    amount: parseFloat(e.target.value)
                  }));
                  
                }}
              value={transaction.amount}
              type="number"
              placeholder="entrer le montant"
              className="mt-2 cursor-pointer w-[40%] min-w-[300px] text-center bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-sm"
            />
            <button
              onClick={handleAddTransaction}
              className="mt-8
                shadow-lg
                bg-[#009CEA] min-w-[250px] text-white rounded-lg p-1 cursor-pointer transition-all  text-sm "
            >
              Ajouter la transaction
            </button>

            <p className="text-red-500 text-xs">{message}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default SavingDetails;

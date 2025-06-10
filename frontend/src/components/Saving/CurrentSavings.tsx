import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSavingsServices from "../../services/SavingsServices";
import {
  type SavingsType,
  ListTransactions,
} from "../../services/SavingsServices";

//{editMode}:{editMode: boolean}
// editMode:Boolean

function CurrentSavings({
  editMode,
  isOpenModify,
  handleEdit,
  setNewSaving,
}: {
  editMode: boolean;
  isOpenModify: boolean;
  handleEdit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  setNewSaving: React.Dispatch<React.SetStateAction<SavingsType>>;
}) {
  const { savings, setSavings, deleteSavingById } = useSavingsServices();

  const [isOpen, setIsOpen] = useState(false);

  const handleDrop = () => {
    setIsOpen(!isOpen);
  };

  const calculateProgress = (saving: SavingsType): number => {
    const totalDeposit =
      saving.deposit?.reduce(
        (sum: number, dep: ListTransactions) => sum + (dep.amount ?? 0),
        0
      ) ?? 0;

    const totalWithdrawal =
      saving.withdrawal?.reduce(
        (sum: number, wit: ListTransactions) => sum + (wit.amount ?? 0),
        0
      ) ?? 0;

    const netSaved = totalDeposit - totalWithdrawal;
    const goal = saving.amount ?? 0;

    if (!goal || goal === 0) return 0;

    const progress = (netSaved / goal) * 100;

    return Math.max(0, Math.min(Math.round(progress), 100)); // borné entre 0 et 100
  };

  return (
    <>
      <div
        className="flex items-center mt-3"
        onClick={handleDrop}
      >
        <h3 className="text-xs text-left ml-3 md:text-lg  hover:cursor-pointer">
          Epargnes en cours
        </h3>
        <svg
          className={isOpen ? "rotate-180" : "rotate-0"}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="#F8F8F8"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>

      {isOpen && (
        <>
          <ul className="flex flex-col items-center justify-center mt-3 gap-3">
            {savings.map((saving) => (
              <Link
                key={saving.id}
                to={`/epargnes/${saving.id}`}
                className="bg-[var(--lfpc)]/50 w-[90%] max-w-[700px] p-3 rounded-lg drop-figma"
              >
                <div className="flex  justify-between">
                  <h3 className="font-medium">{saving.name}</h3>
                  {editMode ? (
                    <>
                      <div className="flex gap-3">
                        <button
                          onClick={(e) => {
                            deleteSavingById(saving.id, e);
                          }}
                          className="bg-red-500/30 py-0 px-4 rounded-lg text-xs"
                        >
                          X
                        </button>

                        <button
                          onClick={(e) => {
                            handleEdit(e);
                            setNewSaving(saving);
                          }}
                          className="bg-yellow-500/30 py-0 px-4 rounded-lg text-xs"
                        >
                          modifier
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 18L15 12L9 6"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </>
                  )}
                </div>
                <div className="mt-3 w-full">
                  <div
                    className="bg-[#41414e]  w-[100%] rounded-lg flex justify-start relative
                        drop-figma
                        "
                  >
                    <div
                      style={{
                        width: `${calculateProgress(saving)}%`,
                      }}
                      className="w-full rounded-lg text-center
                                            bg-linear-to-r from-[#1d1d21] to-blue-500
                                            "
                    >
                      <p className="p-1.5 text-sm min-w-20">
                        {calculateProgress(saving)} %
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default CurrentSavings;

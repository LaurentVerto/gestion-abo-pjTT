import React, { useState } from "react";
import useSavingsServices from "../../services/SavingsServices";
import {
  type SavingsType,
  ListTransactions,
} from "../../services/SavingsServices";
import { Link } from "react-router-dom";

function SavingsCompleted({
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
  const { savingsCompleted, deleteSavingById } = useSavingsServices();

  const [isOpen, setIsOpen] = useState(false);

  const handleDrop = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <>
      <div
        className="flex items-center mt-3"
        onClick={handleDrop}
      >
        <h3 className="text-xs text-left ml-3 md:text-lg  hover:cursor-pointer">
          Epargnes finalisé
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
          <ul className="flex flex-col items-center justify-center mt-3">
            {savingsCompleted.map((saving) => (

            
            <Link
              to={`/epargnes/${saving.id}`}
             key={saving.id} className="bg-[var(--lfpc)]/50 w-[90%] p-3 rounded-lg drop-figma">
              <div className="flex  justify-between">
                <h3 className="font-medium">{saving.name}</h3>

                {editMode ? (
                    <>
                      <div className="flex gap-3">
                        <button
                          onClick={(e) => {
                            deleteSavingById(saving.id, e);
                          }}
                          className="bg-red-500 py-0 px-4 rounded-lg"
                        >
                          X
                        </button>

                        <button
                          onClick={(e) => {
                            handleEdit(e);
                            setNewSaving(saving);
                          }}
                          className="bg-yellow-500 py-0 px-4 rounded-lg"
                        >
                          edit
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
                  className="bg-[#41414e]  w-80 rounded-full flex justify-start relative
                        drop-figma
                        "
                >
                  <div
                    className=" w-[100%] rounded-full text-center
                            bg-blue-500
                            "
                  >
                    <p className="p-1.5 text-sm">100 %</p>
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

export default SavingsCompleted;

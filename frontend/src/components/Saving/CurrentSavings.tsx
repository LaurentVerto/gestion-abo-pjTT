import React, { useState } from "react";
import { Link } from "react-router-dom";

function CurrentSavings() {

    const [isOpen, setIsOpen] = useState(false);

    const handleDrop = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };

    return(
        
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
                    <ul className="flex flex-col items-center justify-center mt-3">
                <Link to="/epargnes/detail" className="bg-[var(--lfpc)]/50 w-[90%] max-w-[700px] p-3 rounded-lg drop-figma">
                    <div className="flex  justify-between">
                        <h3 className="font-medium">💻 Test epargnes</h3>
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
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </div>
                    <div className="mt-3 w-full">
                        <div
                            className="bg-[#41414e]  w-[100%] rounded-full flex justify-start relative
                        drop-figma
                        "
                        >
                            <div
                                className=" w-[80%] rounded-full text-center
                            bg-linear-to-r from-[#1d1d21] to-blue-500
                            "
                            >
                                <p className="p-1.5 text-sm">80 %</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </ul>
                </>
            )}
        </>
    )
}

export default CurrentSavings;
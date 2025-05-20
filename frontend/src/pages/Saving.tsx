import React from "react";
import CurrentSavings from "../components/Saving/CurrentSavings";
import SavingsCompleted from "../components/Saving/SavingsCompleted";
const ICON_SP = "/logo-xs.png";

function Saving() {
    return (
        <div className="realtive">
            <div className="flex justify-between items-center mt-10">
                <h2 className="bold text-sm md:text-xl ml-5">Epargnes</h2>
                <img
                    src={ICON_SP}
                    alt="logo_xs"
                    className="h-8 mr-5"
                />
            </div>

            <CurrentSavings />
            <SavingsCompleted />
            
            <div className="absolute bottom-20 left-5 flex justify-between w-[90%] items-center">
                <div>
                    <ul className="text-xs text-[#009CEA] ">
                        <li>3 Epargnes en cours</li>
                        <li>1 Epargne finalisé</li>
                    </ul>
                </div>
                <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="cursor-pointer"
                >
                    <path
                        d="M25.0001 45.8334C36.506 45.8334 45.8334 36.506 45.8334 25.0001C45.8334 13.4941 36.506 4.16675 25.0001 4.16675C13.4941 4.16675 4.16675 13.4941 4.16675 25.0001C4.16675 36.506 13.4941 45.8334 25.0001 45.8334Z"
                        stroke="#F8F8F8"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M16.6667 25H33.3334"
                        stroke="#F8F8F8"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M25 16.6667V33.3334"
                        stroke="#F8F8F8"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </div>
        </div>
    );
}

export default Saving;

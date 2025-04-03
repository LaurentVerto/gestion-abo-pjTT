import react from "react";
import netflixIcon from "./netflix.png"

function Prelevement() {
    return (
        <>
            <h2 className='font-bold uppercase text-2xl text-center mt-5'>Liste prelevements</h2>
            <ul className="mt-15">
                <li className="flex gap-5 items-center justify-center">
                    <p className="font-bold">01</p>
                    <div className="flex shadow-inner w-[80%] min-w-[400px] justify-between p-3 pr-10 pl-10 rounded-lg">
                        <div className="flex gap-10">
                            <img src={netflixIcon} alt="" />
                            <p>Netflix</p>
                        </div>
                        <p className="font-bold">5.99€</p>
                    </div>
                </li>
            </ul>
            <div class="total w-[30%] min-w-[400px] bg-black h-8 mt-5 text-white flex items-center justify-center rounded-lg rounded-bl-none rounded-tl-none">
                <p>Total prélèvement le 05 du mois : <span className="font-bold text-xl">5.99 €</span></p>
            </div>
        </>
    )
}

export default Prelevement;
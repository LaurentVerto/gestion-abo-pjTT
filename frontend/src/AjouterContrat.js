import react, { useEffect, useState } from "react";
import netflixIcon from "./netflix.png"

function AjouterContrat() {

    const [listeModeDePaiement, setListeModeDePaiement] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/modeDePaiement/liste-modeDePaiement');

                const data = await response.json();
                setListeModeDePaiement(data);
                console.log(listeModeDePaiement);


            } catch (error) {
                console.error("Erreur survenu lors de la récuperation de la liste : ", error)
            }

        }
        fetchData();
    }, []);

    const [listeContrats, setListeContrats] = useState([]);

    useEffect(() => {

        const fetchData = async () => {


            try {
                const response = await fetch('/contrats/liste-contrats');

                const data = await response.json();
                setListeContrats(data);
                console.log(listeContrats);


            } catch (error) {
                console.error("Erreur survenu lors de la récuperation de la liste : ", error)
            }

        }
        fetchData();
    }, [])

    //essai changer photo grace au nom

    const [nomContrat, setNomContrat] = useState("")
    const[imageContrat, setImageContrat] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target;

        

        setNomContrat((prev) => ({
            ...prev,
            [name]: name === "prix" ? Number(value) : value,
        }));

        const contratSelectionne = listeContrats.find(contrat => contrat.nom === value)

        
        setSelectedSubscription(value)

        if(contratSelectionne){
            setImageContrat(contratSelectionne.image)
            return;
        }


        
    };

    const [selectedSubscription, setSelectedSubscription ] = useState();

    // fin 




    return (
        <>
            <h2 className='font-bold uppercase text-2xl text-center mt-5'>Ajouter un contrat</h2>

            <div className="flex flex-col justify-center items-center mt-25 group">
                <img src={imageContrat} alt="" className="w-30" />

                <select name="nomContrat" id="" className="mt-25 cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 border" onChange={handleChange} value={selectedSubscription} >

                    {listeContrats.map((contrat) => (

                        <option value={contrat.nom} key={contrat._id} >{contrat.nom}</option>
                    ))}
                    
                </select>

                <input className=" cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 mt-15 flex justify-center text-black border" type="date" name="" id="" />

                <div className="flex items-center gap-10">
                    <input type="number" className="cursor-pointer text-3xl font-bold mt-25 border text-center p-2 rounded-lg" placeholder="Entrer le montant" />
                    <p className="mt-25 text-2xl">€</p>
                </div>


                <select name="" id="" className="mt-25 cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 border">
                <option value="" disabled selected hidden >Merci de choisir le type</option>
                    {listeModeDePaiement.map((modeDePaiement) => (

                        <option value="" key={modeDePaiement._id}>{modeDePaiement.nom}</option>
                    ))}
                    
                </select>






                <button className="mt-25 bg-black w-[20%] min-w-[200px] text-white rounded-lg p-1 cursor-pointer transition-all group-hover:scale-105 ">Ajouter le contrat</button>
            </div>
        </>
    )
}

export default AjouterContrat;
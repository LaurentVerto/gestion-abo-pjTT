import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid'; //genere un id aleatoire
import { useNavigate } from "react-router-dom";
import useModeDePaiementServices from "../services/useModeDePaiementServices";
import useContratServices from "../services/ContratsServices";

function AjouterContrat() {

    const navigate = useNavigate() // pouvoir etre redirigé vers une autre page 

    const [message, setMessage] = useState('')

    //ici c'est pour afficher le champ supplémentaire pour le nom

    const [selectedContract, setSelectedContract] = useState("")

    const inputAdditionel = selectedContract.nom === "Autres"; // pour afficher le champ additionel

    const [nomPerso, setNomPerso] = useState('');

    const handleNomPerso = (e) => {
        setNomPerso(e.target.value)
    }

    // fin du champ supp

    // initialisation de newContract
    const [newContract, setNewContract] = useState({
        id: uuidv4(),
        nom: '',
        image: 'https://i.ibb.co/ymC3g9rc/Capture-d-cran-2024-04-12-212330-removebg-preview.png',
        datePrlvt: Date.now(),
        prix: Number,
        type: "",
        echeance: Number,
        statusAbo: true,
        ...(inputAdditionel && { nom: nomPerso })
    })

    const inputAdditionelPay = newContract.type !== "Abonnement" && newContract.type !== "";

    // ici on ajoute les modeDePaiement
    const { listeModeDePaiement } = useModeDePaiementServices();

    //on recupere la liste des contrat donc el nom des abo pre enregistrer
    const { preSavedContractsList, setPreSavedContractsList } = useContratServices();

    const [imageContrat, setImageContrat] = useState("https://i.ibb.co/ymC3g9rc/Capture-d-cran-2024-04-12-212330-removebg-preview.png")

    const [selectedSubscription, setSelectedSubscription] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target; //recupere la valeur du champ grace au name

        let contrat

        if (name === "nom") {

            if (name === "prix")
                value = parseFloat(value)

            if (value === "Autres") {
                contrat = { nom: nomPerso };
                const nouveauNom = contrat.nom
            }

            contrat = preSavedContractsList.find(contrat => contrat.nom === value)

            setSelectedContract(contrat) // créer une const booleen qui cherche si le nom du contrat (BDD) correspond a la value du champ (name=nom)
        } else {
            contrat = selectedContract
        }

        setSelectedSubscription(value) //mettre à jour l'état SelectedSub avec la value du champ

        setNewContract((prev) => ({
            ...prev,
            [name]: value, //si le name = prix alors change le type de la value en number (a la base c'est du string) sinon laisse le en string
            image: contrat && contrat.nom !== "Autres" ? contrat.image : prev.image,
            // spread conditionnel (... permette de destructurer un objet) on veut decomposer l'objet contratSelectionne (condition) si booleen n'est pas strictement egal A "autres" ET UNIQUEMENT SI (&&) alors modifie une partie de l'objet (image) avec va valeur voulue (contratSelectionne.image)
        }));

        if (contrat.image) { //si contratSelectionne est true alors met a jour l'état ImageContrat avec l'image du contratSelectionne (contratSelectionne[image])
            setImageContrat(contrat.image)
            return;
        }
    };

    const validateForm = () => {
        if (!newContract.nom || !newContract.datePrlvt || !newContract.prix || !newContract.type) {
            setMessage('Tous les champs doivent être remplis.');
            return false;
        }
        if (isNaN(newContract.prix) || Number(newContract.prix) <= 0) {
            setMessage('Le prix doit être un nombre positif.');
            return false;
        }
        if (isNaN(newContract.echeance) || Number(newContract.echeance) <= 0) {
            setMessage("L'échéance' doit être un supérieur a 0.");
            return false;
        }
        return true;
    };

    const { myContracts, setMesContrats } = useContratServices()


    // utilise plusieurs éléments du front
    const enregistrementContrat = (newContract) => {
        // Vérification que tous les champs sont remplis
        // Vérifie si les champs obligatoires sont remplis
        if (!newContract.nom || !newContract.datePrlvt || !newContract.prix || !newContract.type) {
            setMessage('Tous les champs doivent être remplis.');
            return; // Arrête l'exécution si un champ est vide
        }

        // Si ce n'est pas un "Abonnement" et que l'échéance est inférieure à 1, affiche un message d'erreur
        if (newContract.type !== "Abonnement" && (!newContract.echeance || newContract.echeance < 1)) {
            setMessage("L'échéance doit être supérieure ou égale à 1 pour ce type de contrat.");
            return; // Arrête l'exécution si l’échéance est invalide
        }
        // Vérification du prix (doit être un nombre positif)
        if (isNaN(newContract.prix) || Number(newContract.prix) <= 0) {
            setMessage('Le prix doit être un nombre positif.');
            return; // Arrête l'exécution si le prix est invalide
        }
        // Si tout est valide, on continue
        const contratAvecNom = {
            ...newContract,
            nom: newContract.nom === "Autres" ? nomPerso : newContract.nom, // Si le nom est "Autres", on utilise nomPerso
        };

        setMesContrats(prev => {
            // Ajout du contrat à la liste
            const ContratMaj = [...prev, contratAvecNom];

            // Enregistrement de la liste dans le localStorage
            const jsonData = JSON.stringify(ContratMaj);
            localStorage.setItem("myContracts", jsonData);

            setMessage("Contrat enregistré avec succès");

            // Réinitialisation du formulaire
            setNewContract({
                id: uuidv4(),
                nom: '',
                image: 'https://i.ibb.co/ymC3g9rc/Capture-d-cran-2024-04-12-212330-removebg-preview.png',
                datePrlvt: Date.now(),
                prix: Number,
                type: "",
                echeance: "",
                ...(inputAdditionel && { nom: nomPerso })
            });

            setImageContrat('https://i.ibb.co/ymC3g9rc/Capture-d-cran-2024-04-12-212330-removebg-preview.png');
            navigate("/contrats")
            // return ContratMaj; // Nouvelle liste de contrats
        });
    };
    // fin

    return (
        <>
            <h2 className=' uppercase text-2xl text-center mt-5'>Ajouter un contrat</h2>

            <div className="flex flex-col justify-center items-center mt-2 group gap-0 text-center overflow-y-scroll h-[calc(100vh-220px)] sm:h-[calc(100vh-10vh)]">
                <img src={imageContrat} alt="" className="h-20 w-auto rounded-lg object-contain mb-2 mt-0" />
                <div>
                    <select name="nom" id="" className="mt-2 cursor-pointer w-[40%] min-w-[300px] text-center bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg" onChange={handleChange} value={newContract.nom} >
                        <option value="" disabled selected >Choisir un Nom</option>

                        {preSavedContractsList.map((contrat) => (

                            <option value={contrat.nom} key={contrat._id} >{contrat.nom}</option>
                        ))}

                    </select>
                </div>

                {inputAdditionel &&

                    <div className="flex flex-col justify-center items-center group gap-0 text-center">
                        <input type="text" onChange={handleNomPerso} className="cursor-pointer text-base  mt-2 text-center p-1 rounded-lg min-w-[300px] bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg" name="nomPerso" value={nomPerso}
                            placeholder="Saisir le nom" />
                    </div>
                }

                <div>

                    <p className="mt-5 text-sm" >Choisir une date de prélèvement</p>
                    <input className=" dateInput cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 mt-1 flex justify-center  bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-white appearance-none " type="date" name="datePrlvt" id="" placeholder="YYYY-MM-DD" onChange={handleChange} value={newContract.datePrlvt} />

                </div>

                <div className="relative">
                    <input type="number" name="prix" className="cursor-pointer text-3xl  mt-5 mb-5 text-center rounded-lg w-30" placeholder="0.00" onChange={handleChange} value={newContract.prix} inputMode="decimal" step="any" />
                    <p className="absolute right-[-0px] top-2 text-2xl pointer-events-none mt-5">€</p>
                </div>

                <div>
                    <select name="type" id="" className="mt-0 cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg " onChange={handleChange} value={newContract.type}>
                        <option value="" disabled selected >Choisir un type</option>
                        {listeModeDePaiement.map((modeDePaiement) => (

                            <option value={modeDePaiement.nom} key={modeDePaiement._id}>{modeDePaiement.nom}</option>
                        ))}

                    </select>
                </div>

                {inputAdditionelPay &&
                    <input type="number" onChange={handleChange} className="cursor-pointer 
                    bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg mt-2 text-center p-1 rounded-lg min-w-[300px]"
                        placeholder="Entrer le nombre d'échéances" name="echeance" value={newContract.echeance} inputMode="decimal" />
                }

                <button className="mt-5 bg-black w-[20%] min-w-[200px] text-white rounded-lg p-1 cursor-pointer transition-all hover:scale-105 text-sm " onClick={() => enregistrementContrat(newContract)}>Ajouter le contrat</button>

                <p className="text-center mt-0">{message}</p>
            </div>
        </>
    )
}

export default AjouterContrat;
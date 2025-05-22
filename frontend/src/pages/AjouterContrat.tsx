import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid"; //genere un id aleatoire
import { useNavigate } from "react-router-dom";
import useModeDePaiementServices, {
    listeModeDePaiementType,
} from "../services/useModeDePaiementServices";
import useContratServices, {
    ContratType,
    PreSavedContractType,
} from "../services/ContratsServices";
const ICON_SP = "/logo-xs.png";

function AjouterContrat() {
    const navigate = useNavigate(); // pouvoir etre redirigé vers une autre page

    const [message, setMessage] = useState("");

    //ici c'est pour afficher le champ supplémentaire pour le nom

    const [selectedContract, setSelectedContract] = useState("");

    const inputAdditionel = selectedContract === "Autres"; // pour afficher le champ additionel

    const [nomPerso, setNomPerso] = useState("");

    const handleNomPerso = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNomPerso(e.target.value);

        // React.ChangeEventHandler<HTMLInputElement> | undefined
    };

    // fin du champ supp

    // initialisation de newContract
    const [newContract, setNewContract] = useState({
        id: uuidv4(),
        nom: "",
        image: "https://i.ibb.co/ymC3g9rc/Capture-d-cran-2024-04-12-212330-removebg-preview.png",
        datePrlvt: Date.now().toString(),
        prix: 0,
        type: "",
        echeance: 0,
        statusAbo: true,
        ...(inputAdditionel && { nom: nomPerso }),
    });

    const inputAdditionelPay =
        newContract.type !== "Abonnement" && newContract.type !== "";

    // ici on ajoute les modeDePaiement
    const { listeModeDePaiement } = useModeDePaiementServices();

    //on recupere la liste des contrat donc el nom des abo pre enregistrer
    const { preSavedContractsList, setPreSavedContractsList } =
        useContratServices();

    const [imageContrat, setImageContrat] = useState(
        "https://i.ibb.co/ymC3g9rc/Capture-d-cran-2024-04-12-212330-removebg-preview.png"
    );

    const [selectedSubscription, setSelectedSubscription] = useState<
        string | undefined
    >();

    const handleChange = (
        e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
    ) => {
        const { name: fieldName, value } = e.target;

        let newValue: string | number = value;

        if (fieldName === "prix") {
            newValue = parseFloat(value);
        }

        // On initialise contrat avec undefined
        let contrat: PreSavedContractType | undefined;

        // Gestion du champ "nom"
        if (fieldName === "nom") {
            if (value === "Autres") {
                contrat = {
                    nom: nomPerso,
                    image: "https://i.ibb.co/ymC3g9rc/Capture-d-cran-2024-04-12-212330-removebg-preview.png",
                };
            } else {
                contrat = preSavedContractsList.find((c) => c.nom === value);
            }

            setSelectedContract(value); // <-- ici, juste garder la valeur
        }

        // Mise à jour de l’abonnement sélectionné (tu peux ajuster selon le type voulu)
        setSelectedSubscription(newValue.toString());

        // Mise à jour du nouveau contrat
        setNewContract((prev) => ({
            ...prev,
            [fieldName]: newValue,
            image:
                contrat && contrat.nom !== "Autres"
                    ? contrat.image
                    : prev.image,
        }));

        // Mise à jour de l’image si disponible
        if (contrat?.image) {
            setImageContrat(contrat.image);
        }
        console.log(newContract);
        
    };

    const validateForm = () => {
        if (
            !newContract.nom ||
            !newContract.datePrlvt ||
            !newContract.prix ||
            !newContract.type
        ) {
            setMessage("Tous les champs doivent être remplis.");
            return false;
        }
        if (isNaN(Number(newContract.prix)) || Number(newContract.prix) <= 0) {
            setMessage("Le prix doit être un nombre positif.");
            return false;
        }
        if (
            isNaN(Number(newContract.echeance)) ||
            Number(newContract.echeance) <= 0
        ) {
            setMessage("L'échéance' doit être un supérieur a 0.");
            return false;
        }
        return true;
    };

    const { myContracts, setMyContracts } = useContratServices();

    // utilise plusieurs éléments du front
    const enregistrementContrat = (newContract: ContratType) => {
        // Vérification que tous les champs sont remplis
        // Vérifie si les champs obligatoires sont remplis
        if (
            !newContract.nom ||
            !newContract.datePrlvt ||
            !newContract.prix ||
            !newContract.type
        ) {
            setMessage("Tous les champs doivent être remplis.");
            return; // Arrête l'exécution si un champ est vide
        }

        // Si ce n'est pas un "Abonnement" et que l'échéance est inférieure à 1, affiche un message d'erreur
        if (
            newContract.type !== "Abonnement" &&
            (!newContract.echeance || newContract.echeance < 1)
        ) {
            setMessage(
                "L'échéance doit être supérieure ou égale à 1 pour ce type de contrat."
            );
            return; // Arrête l'exécution si l’échéance est invalide
        }
        // Vérification du prix (doit être un nombre positif)
        if (isNaN(newContract.prix) || Number(newContract.prix) <= 0) {
            setMessage("Le prix doit être un nombre positif.");
            return; // Arrête l'exécution si le prix est invalide
        }
        // Si tout est valide, on continue
        const contratAvecNom = {
            ...newContract,
            nom: newContract.nom === "Autres" ? nomPerso : newContract.nom, // Si le nom est "Autres", on utilise nomPerso
        };

        setMyContracts((prev) => {
            // Ajout du contrat à la liste
            const ContratMaj = [...prev, contratAvecNom];

            // Enregistrement de la liste dans le localStorage
            const jsonData = JSON.stringify(ContratMaj);
            localStorage.setItem("myContracts", jsonData);

            setMessage("Contrat enregistré avec succès");

            // Réinitialisation du formulaire
            setNewContract({
                id: uuidv4(),
                nom: "",
                image: "https://i.ibb.co/ymC3g9rc/Capture-d-cran-2024-04-12-212330-removebg-preview.png",
                datePrlvt: Date.now().toString(),
                prix: 0,
                type: "",
                echeance: 0,
                statusAbo: true,
                ...(inputAdditionel && { nom: nomPerso }),
            });

            setImageContrat(
                "https://i.ibb.co/ymC3g9rc/Capture-d-cran-2024-04-12-212330-removebg-preview.png"
            );
            navigate("/contrats");
            return ContratMaj; // Nouvelle liste de contrats
        });
    };
    // fin

    return (
        <>
            <div className="flex justify-between items-center mt-10 ">
                <h2 className="bold text-sm ml-5 md:text-xl ">
                    Ajouter un contrat
                </h2>
                <img
                    src={ICON_SP}
                    alt="logo_xs"
                    className="h-8 mr-5"
                />
            </div>

            <div className="  flex flex-col justify-center items-center mt-2 group md:gap-10 text-center overflow-y-scroll h-[68vh]">
                <img
                    src={imageContrat}
                    alt=""
                    className="h-20 w-auto rounded-lg object-contain mb-2 mt-0"
                />
                <div>
                    <select
                        name="nom"
                        id=""
                        className="mt-2 cursor-pointer w-[40%] min-w-[300px] text-center bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-sm"
                        onChange={handleChange}
                        value={newContract.nom}
                    >
                        <option
                            value=""
                            disabled
                            selected
                        >
                            Choisir un Nom
                        </option>

                        {preSavedContractsList.map((contrat) => (
                            <option
                                value={contrat.nom}
                                key={contrat.nom}
                            >
                                {contrat.nom}
                            </option>
                        ))}
                    </select>
                </div>

                {inputAdditionel && (
                    <div className="flex flex-col justify-center items-center group gap-0 text-center">
                        <input
                            type="text"
                            onChange={handleNomPerso}
                            className="cursor-pointer text-base  mt-2 text-center p-1 rounded-lg min-w-[300px] bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-xs"
                            name="nomPerso"
                            value={nomPerso}
                            placeholder="Saisir le nom"
                        />
                    </div>
                )}

                <div>
                    <p className="mt-5 text-sm">
                        Choisir une date de prélèvement
                    </p>
                    <input
                        className=" dateInput cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 mt-1 flex justify-center  bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-white appearance-none text-sm "
                        type="date"
                        name="datePrlvt"
                        id=""
                        placeholder="YYYY-MM-DD"
                        onChange={handleChange}
                        value={newContract.datePrlvt}
                    />
                </div>

                <div className="relative">
                    <input
                        type="number"
                        name="prix"
                        className="cursor-pointer text-3xl  mt-5 mb-5 text-center rounded-lg w-30"
                        placeholder="0.00"
                        onChange={handleChange}
                        value={newContract.prix}
                        inputMode="decimal"
                        step="any"
                    />
                    <p className="absolute right-[-0px] top-2 text-2xl pointer-events-none mt-5">
                        €
                    </p>
                </div>

                <div>
                    <select
                        name="type"
                        id=""
                        className="mt-0 cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-sm"
                        onChange={handleChange}
                        value={newContract.type}
                    >
                        <option
                            value=""
                            disabled
                            selected
                        >
                            Choisir un type
                        </option>
                        {listeModeDePaiement.map((modeDePaiement) => (
                            <option
                                value={modeDePaiement.nom}
                                key={modeDePaiement.nom}
                            >
                                {modeDePaiement.nom}
                            </option>
                        ))}
                    </select>
                </div>

                {inputAdditionelPay && (
                    <input
                        type="number"
                        onChange={handleChange}
                        className="cursor-pointer 
                    bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg mt-2 text-center p-1 rounded-lg min-w-[300px] text-xs"
                        placeholder="Entrer le nombre d'échéances"
                        name="echeance"
                        value={newContract.echeance}
                        inputMode="decimal"
                    />
                )}

                <button
                    className="mt-8
                shadow-lg
                bg-[#009CEA] min-w-[300px] text-white rounded-lg p-1 cursor-pointer transition-all hover:scale-105 text-sm "
                    onClick={() => enregistrementContrat(newContract)}
                >
                    Ajouter le contrat
                </button>

                <p className="text-center mt-0">{message}</p>
            </div>
        </>
    );
}

export default AjouterContrat;

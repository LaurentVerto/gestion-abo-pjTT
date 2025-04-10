import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";

function AjouterContrat() {

    const navigate = useNavigate()

    const [message, setMessage] = useState('')

    const [contratSelect, setContratSelect] = useState("")

    const inputAdditionel = contratSelect.nom === "Autres";

    




    const [nomPerso, setNomPerso] = useState('');

    const handleNomPerso = (e) => {
        setNomPerso(e.target.value)

    }

    //ajout du contrat dans un json

    const [nouveauContrat, setNouveauContrat] = useState({
        id: uuidv4(),
        nom: '',
        image: 'https://i.ibb.co/K1BkWXJ/img-ptf-inconnu-1.jpg',
        datePrlvt: Date.now(),
        prix: Number,
        type: "",
        echeance: Number,
        ...(inputAdditionel && { nom: nomPerso })
    })

    
    const inputAdditionelPay = nouveauContrat.type !== "Abonnement" && nouveauContrat.type !== "" ;


    // const handleContrat = () => {
    //     // console.log(nouveauContrat);

    // }

    //fin ajout de contrat dans json

    const [listeModeDePaiement, setListeModeDePaiement] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/modeDePaiement/liste-modeDePaiement');

                const data = await response.json();
                setListeModeDePaiement(data);


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


            } catch (error) {
                console.error("Erreur survenu lors de la récuperation de la liste : ", error)
            }

        }
        fetchData();
    }, [])

    //essai changer photo grace au nom

    const [selectedSubscription, setSelectedSubscription] = useState();

    // const [nomContrat, setNomContrat] = useState("")

    const [imageContrat, setImageContrat] = useState("https://i.ibb.co/K1BkWXJ/img-ptf-inconnu-1.jpg")



    const handleChange = (e) => {
        const { name, value } = e.target; //recupere la valeur du champ grace au name



        let contrat

        if (name === "nom") {
           

            if(name === "prix")
                value = parseFloat(value)

            if (value === "Autres") {
                contrat = { nom: nomPerso };
                const nouveauNom = contrat.nom



            }

            contrat = listeContrats.find(contrat => contrat.nom === value)



            setContratSelect(contrat) // créer une const booleen qui cherche si le nom du contrat (BDD) correspond a la value du champ (name=nom)
        } else {
            contrat = contratSelect

        }




        setSelectedSubscription(value) //mettre à jour l'état SelectedSub avec la value du champ



        setNouveauContrat((prev) => ({
            ...prev,
            [name]: value, //si le name = prix alors change le type de la value en number (a la base c'est du string) sinon laisse le en string

            // if(contratSelectionne != 'Autres'){
            // }

            image: contrat && contrat.nom !== "Autres" ? contrat.image : prev.image,

            // ...selectedSubscription !== "Autres" && {image:  contratSelectionne.image},

            // spread conditionnel (... permette de destructurer un objet) on veut decomposer l'objet contratSelectionne (condition) si booleen n'est pas strictement egal A "autres" ET UNIQUEMENT SI (&&) alors modifie une partie de l'objet (image) avec va valeur voulue (contratSelectionne.image)



            // contratSelectionne !=== "autres" ? image:  contratSelectionne.image : break

            // image:  contratSelectionne.image, //dans mon objet nouveauContrat , image correspond au contratSelectionner[image] 
        }));



        if (contrat.image) { //si contratSelectionne est true alors met a jour l'état ImageContrat avec l'image du contratSelectionne (contratSelectionne[image])
            setImageContrat(contrat.image)
            return;
        }




    };
    // fin 



    // ajouter json dans un fichier en local storage

    const validateForm = () => {
        if (!nouveauContrat.nom || !nouveauContrat.datePrlvt || !nouveauContrat.prix || !nouveauContrat.type) {
            setMessage('Tous les champs doivent être remplis.');
            return false;
        }
        if (isNaN(nouveauContrat.prix) || Number(nouveauContrat.prix) <= 0) {
            setMessage('Le prix doit être un nombre positif.');
            return false;
        }
        if (isNaN(nouveauContrat.echeance) || Number(nouveauContrat.echeance) <= 0) {
            setMessage("L'échéance' doit être un supérieur a 0.");
            return false;
        }
        return true;
    };

    const [mesContrats, setMesContrats] = useState([])

    const enregistrementContrat = (nouveauContrat) => {
        // Vérification que tous les champs sont remplis
        if (!nouveauContrat.nom || !nouveauContrat.datePrlvt || !nouveauContrat.prix || !nouveauContrat.type || !nouveauContrat.echeance) {
            setMessage('Tous les champs doivent être remplis.');
            return; // Arrête l'exécution si un champ est vide
        }
    
        // Vérification du prix (doit être un nombre positif)
        if (isNaN(nouveauContrat.prix) || Number(nouveauContrat.prix) <= 0) {
            setMessage('Le prix doit être un nombre positif.');
            return; // Arrête l'exécution si le prix est invalide
        }
    
        // Si tout est valide, on continue
        const contratAvecNom = {
            ...nouveauContrat,
            nom: nouveauContrat.nom === "Autres" ? nomPerso : nouveauContrat.nom, // Si le nom est "Autres", on utilise nomPerso
        };
    
        setMesContrats(prev => {
            // Ajout du contrat à la liste
            const ContratMaj = [...prev, contratAvecNom];
    
            // Enregistrement de la liste dans le localStorage
            const jsonData = JSON.stringify(ContratMaj);
            localStorage.setItem("mesContrats", jsonData);
    
            setMessage("Contrat enregistré avec succès");
    
            // Réinitialisation du formulaire
            setNouveauContrat({
                id: uuidv4(),
                nom: '',
                image: 'https://i.ibb.co/K1BkWXJ/img-ptf-inconnu-1.jpg',
                datePrlvt: Date.now(),
                prix: Number,
                type: "",
                echeance: "",
                ...(inputAdditionel && { nom: nomPerso })
            });

            
            
    
            setImageContrat('https://i.ibb.co/K1BkWXJ/img-ptf-inconnu-1.jpg');

            navigate("/contrats")
    
            // return ContratMaj; // Nouvelle liste de contrats
        });
    };
    

    //fin ajout json

    useEffect(() => {
        const dataLocal = localStorage.getItem("mesContrats");
        if (dataLocal) {
            setMesContrats(JSON.parse(dataLocal));
        }
    }, []);





    return (
        <>
            <h2 className=' uppercase text-2xl text-center mt-5'>Ajouter un contrat</h2>

            <div className="flex flex-col justify-evently items-center mt-2 group gap-0 text-center overflow-y-scroll h-[calc(100vh-175px)]">
                <img src={imageContrat} alt="" className="h-20 w-20 rounded-lg object-cover" />
                <div>
                    <select name="nom" id="" className="mt-2 cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1  appearance-none text-center" onChange={handleChange} value={nouveauContrat.nom} required>
                    <option value="" disabled selected >Choisir un Nom</option>

                        {listeContrats.map((contrat) => (

                            <option value={contrat.nom} key={contrat._id} >{contrat.nom}</option>
                        ))}

                    </select>
                </div>

                {inputAdditionel &&

                <div className="flex flex-col justify-center items-center group gap-0 text-center">

                    <input type="text" onChange={handleNomPerso} className="cursor-pointer text-base  mt-0 text-center p-1 rounded-lg min-w-[300px] border-b-1" name="nomPerso" value={nomPerso}
                    placeholder="Saisir le nom" />
                </div>
                }

                <div>

                    <p className="mt-5" >Choisir une date de prélèvement</p>
                    <input className=" dateInput cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 mt-0 flex justify-center  bg-black border-b-1 text-white appearance-none " type="date" name="datePrlvt" id=""  placeholder="YYYY-MM-DD" onChange={handleChange} value={nouveauContrat.datePrlvt}  />
                    
                </div>

                <div className="relative">
                    <input type="number" name="prix" className="cursor-pointer text-3xl  mt-7 mb-7 text-center rounded-lg w-30" placeholder="0.00" onChange={handleChange} value={nouveauContrat.prix}  inputMode="decimal" step="any"/>
                    <p className="absolute right-[-0px] top-2 text-2xl pointer-events-none mt-5">€</p>
                </div>

                <div>
                    <select name="type" id="" className="mt-0 cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 border-b-1 " onChange={handleChange} value={nouveauContrat.type}>
                    <option value="" disabled selected >Choisir un type</option>
                        {listeModeDePaiement.map((modeDePaiement) => (

                            <option value={modeDePaiement.nom} key={modeDePaiement._id}>{modeDePaiement.nom}</option>
                        ))}

                    </select>
                </div>

                {inputAdditionelPay &&
                    <input type="number" onChange={handleChange} className="cursor-pointer text-sm border-b-1 mt-2 text-center p-1 rounded-lg min-w-[300px]"
                    placeholder="Entrer le nombre d'échéances" name="echeance" value={nouveauContrat.echeance} />
                }

                <button className="mt-3 bg-black w-[20%] min-w-[200px] text-white rounded-lg p-1 cursor-pointer transition-all hover:scale-105 text-sm " onClick={() => enregistrementContrat(nouveauContrat)}>Ajouter le contrat</button>

            <p className="text-center mt-0">{message}</p>
            </div>


        </>
    )
}

export default AjouterContrat;
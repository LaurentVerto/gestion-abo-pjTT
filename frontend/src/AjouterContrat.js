import react, { useEffect, useState } from "react";
import netflixIcon from "./netflix.png"

function AjouterContrat() {

    const [contratSelect, setContratSelect] = useState("")

    //ajout du contrat dans un json

    const [nouveauContrat, setNouveauContrat] = useState({
        nom:'',
        image:'',
        datePrlvt: Date.now,
        prix: 0,
        type:""
    })

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

    const [selectedSubscription, setSelectedSubscription ] = useState();
    
    const [nomContrat, setNomContrat] = useState("")
    const[imageContrat, setImageContrat] = useState("https://i.ibb.co/K1BkWXJ/img-ptf-inconnu-1.jpg")


    


    const handleChange = (e) => {
        const { name, value } = e.target; //recupere la valeur du champ grace au name

        console.log(listeContrats);

        let contrat
        
if(name === "nom"){
    console.log(listeContrats);
    
    contrat = listeContrats.find(contrat => contrat.nom === value)

    setContratSelect(contrat) // créer une const booleen qui cherche si le nom du contrat (BDD) correspond a la value du champ (name=nom)
}else{
    console.log(contratSelect);
    contrat = contratSelect
    
}

console.log(contrat);

    
        
        setSelectedSubscription(value) //mettre à jour l'état SelectedSub avec la value du champ
        
        
        console.log(selectedSubscription);
        setNouveauContrat((prev) => ({
            ...prev,
            [name]: name === "prix" ? Number(value) : value, //si le name = prix alors change le type de la value en number (a la base c'est du string) sinon laisse le en string

            // if(contratSelectionne != 'Autres'){
            // }

            image: contrat && contrat.nom !== "Autres" ?{image:  contrat.image}: prev.image,

            // ...selectedSubscription !== "Autres" && {image:  contratSelectionne.image},
            
            // spread conditionnel (... permette de destructurer un objet) on veut decomposer l'objet contratSelectionne (condition) si booleen n'est pas strictement egal A "autres" ET UNIQUEMENT SI (&&) alors modifie une partie de l'objet (image) avec va valeur voulue (contratSelectionne.image)


            
            // contratSelectionne !=== "autres" ? image:  contratSelectionne.image : break

            // image:  contratSelectionne.image, //dans mon objet nouveauContrat , image correspond au contratSelectionner[image] 
        }));
        
        if(contrat.image){ //si contratSelectionne est true alors met a jour l'état ImageContrat avec l'image du contratSelectionne (contratSelectionne[image])
            setImageContrat(contrat.image)
            return;
        }
        
        
    };

    console.log(nouveauContrat);
    
    
    
    // fin 




    return (
        <>
            <h2 className='font-bold uppercase text-xl text-center mt-5'>Ajouter un contrat</h2>

            <div className="flex flex-col justify-center items-center mt-5 group gap-6 text-center">
                <img src={imageContrat} alt="" className="h-20 w-20 rounded-lg object-cover" />

                <select name="nom" id="" className="mt-5 cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 border" onChange={handleChange} value={nouveauContrat.nom} >
                <option value="" selected unselectable hidden>Merci de choisir</option>

                    {listeContrats.map((contrat) => (

                        <option value={contrat.nom} key={contrat._id} >{contrat.nom}</option>
                    ))}
                    
                </select>

                <input className=" cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 mt-5 flex justify-center text-black border" type="date" name="datePrlvt" id="" placeholder="Choisir la date de prélèvement" onChange={handleChange} value={nouveauContrat.datePrlvt}/>

                <div className="flex items-center gap-10">
                    <input type="number" name="prix" className="cursor-pointer text-xl font-bold mt-5 border text-center p-1 rounded-lg min-w-[300px]" placeholder="Entrer le montant" onChange={handleChange} value={nouveauContrat.prix} />
                </div>


                <select name="type" id="" className="mt-5 cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 border " onChange={handleChange} value={nouveauContrat.type}>
                <option value="" unselectable="" selected hidden >Merci de choisir le type</option>
                    {listeModeDePaiement.map((modeDePaiement) => (

                        <option value={modeDePaiement.nom} key={modeDePaiement._id}>{modeDePaiement.nom}</option>
                    ))}
                    
                </select>






                <button className="mt-5 bg-black w-[20%] min-w-[200px] text-white rounded-lg p-1 cursor-pointer transition-all group-hover:scale-105 ">Ajouter le contrat</button>
            </div>
        </>
    )
}

export default AjouterContrat;
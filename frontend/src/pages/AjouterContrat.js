"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const uuid_1 = require("uuid"); //genere un id aleatoire
const react_router_dom_1 = require("react-router-dom");
const useModeDePaiementServices_1 = __importDefault(require("../services/useModeDePaiementServices"));
const ContratsServices_1 = __importDefault(require("../services/ContratsServices"));
const ICON_SP = "/logo-xs.png";
function AjouterContrat() {
    const navigate = (0, react_router_dom_1.useNavigate)(); // pouvoir etre redirigé vers une autre page
    const [message, setMessage] = (0, react_1.useState)("");
    //ici c'est pour afficher le champ supplémentaire pour le nom
    const [selectedContract, setSelectedContract] = (0, react_1.useState)("");
    const inputAdditionel = selectedContract === "Autres"; // pour afficher le champ additionel
    const [nomPerso, setNomPerso] = (0, react_1.useState)("");
    const handleNomPerso = (e) => {
        setNomPerso(e.target.value);
        // React.ChangeEventHandler<HTMLInputElement> | undefined
    };
    // fin du champ supp
    // initialisation de newContract
    const [newContract, setNewContract] = (0, react_1.useState)({
        id: (0, uuid_1.v4)(),
        nom: "",
        image: "https://i.ibb.co/ymC3g9rc/Capture-d-cran-2024-04-12-212330-removebg-preview.png",
        datePrlvt: Date.now().toString(),
        prix: 0,
        type: "",
        echeance: 0,
        statusAbo: true,
        ...(inputAdditionel && { nom: nomPerso }),
    });
    const inputAdditionelPay = newContract.type !== "Abonnement" && newContract.type !== "";
    // ici on ajoute les modeDePaiement
    const { listeModeDePaiement } = (0, useModeDePaiementServices_1.default)();
    //on recupere la liste des contrat donc el nom des abo pre enregistrer
    const { preSavedContractsList, setPreSavedContractsList } = (0, ContratsServices_1.default)();
    const [imageContrat, setImageContrat] = (0, react_1.useState)("https://i.ibb.co/ymC3g9rc/Capture-d-cran-2024-04-12-212330-removebg-preview.png");
    const [selectedSubscription, setSelectedSubscription] = (0, react_1.useState)();
    const handleChange = (e) => {
        const { name: fieldName, value } = e.target;
        let newValue = value;
        if (fieldName === "prix") {
            newValue = parseFloat(value);
        }
        // On initialise contrat avec undefined
        let contrat;
        // Gestion du champ "nom"
        if (fieldName === "nom") {
            if (value === "Autres") {
                contrat = {
                    nom: nomPerso,
                    image: "https://i.ibb.co/ymC3g9rc/Capture-d-cran-2024-04-12-212330-removebg-preview.png",
                };
            }
            else {
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
            image: contrat && contrat.nom !== "Autres"
                ? contrat.image
                : prev.image,
        }));
        // Mise à jour de l’image si disponible
        if (contrat?.image) {
            setImageContrat(contrat.image);
        }
    };
    const validateForm = () => {
        if (!newContract.nom ||
            !newContract.datePrlvt ||
            !newContract.prix ||
            !newContract.type) {
            setMessage("Tous les champs doivent être remplis.");
            return false;
        }
        if (isNaN(Number(newContract.prix)) || Number(newContract.prix) <= 0) {
            setMessage("Le prix doit être un nombre positif.");
            return false;
        }
        if (isNaN(Number(newContract.echeance)) ||
            Number(newContract.echeance) <= 0) {
            setMessage("L'échéance' doit être un supérieur a 0.");
            return false;
        }
        return true;
    };
    const { myContracts, setMyContracts } = (0, ContratsServices_1.default)();
    // utilise plusieurs éléments du front
    const enregistrementContrat = (newContract) => {
        // Vérification que tous les champs sont remplis
        // Vérifie si les champs obligatoires sont remplis
        if (!newContract.nom ||
            !newContract.datePrlvt ||
            !newContract.prix ||
            !newContract.type) {
            setMessage("Tous les champs doivent être remplis.");
            return; // Arrête l'exécution si un champ est vide
        }
        // Si ce n'est pas un "Abonnement" et que l'échéance est inférieure à 1, affiche un message d'erreur
        if (newContract.type !== "Abonnement" &&
            (!newContract.echeance || newContract.echeance < 1)) {
            setMessage("L'échéance doit être supérieure ou égale à 1 pour ce type de contrat.");
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
                id: (0, uuid_1.v4)(),
                nom: "",
                image: "https://i.ibb.co/ymC3g9rc/Capture-d-cran-2024-04-12-212330-removebg-preview.png",
                datePrlvt: Date.now().toString(),
                prix: 0,
                type: "",
                echeance: 0,
                statusAbo: true,
                ...(inputAdditionel && { nom: nomPerso }),
            });
            setImageContrat("https://i.ibb.co/ymC3g9rc/Capture-d-cran-2024-04-12-212330-removebg-preview.png");
            navigate("/contrats");
            return ContratMaj; // Nouvelle liste de contrats
        });
    };
    // fin
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "flex justify-between items-center mt-10 " },
            react_1.default.createElement("h2", { className: "bold text-sm ml-5 md:text-xl " }, "Ajouter un contrat"),
            react_1.default.createElement("img", { src: ICON_SP, alt: "logo_xs", className: "h-8 mr-5" })),
        react_1.default.createElement("div", { className: "  flex flex-col justify-center items-center mt-2 group md:gap-10 text-center overflow-y-scroll h-[68vh]" },
            react_1.default.createElement("img", { src: imageContrat, alt: "", className: "h-20 w-auto rounded-lg object-contain mb-2 mt-0" }),
            react_1.default.createElement("div", null,
                react_1.default.createElement("select", { name: "nom", id: "", className: "mt-2 cursor-pointer w-[40%] min-w-[300px] text-center bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-sm", onChange: handleChange, value: newContract.nom },
                    react_1.default.createElement("option", { value: "", disabled: true, selected: true }, "Choisir un Nom"),
                    preSavedContractsList.map((contrat) => (react_1.default.createElement("option", { value: contrat.nom, key: contrat.nom }, contrat.nom))))),
            inputAdditionel && (react_1.default.createElement("div", { className: "flex flex-col justify-center items-center group gap-0 text-center" },
                react_1.default.createElement("input", { type: "text", onChange: handleNomPerso, className: "cursor-pointer text-base  mt-2 text-center p-1 rounded-lg min-w-[300px] bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-xs", name: "nomPerso", value: nomPerso, placeholder: "Saisir le nom" }))),
            react_1.default.createElement("div", null,
                react_1.default.createElement("p", { className: "mt-5 text-sm" }, "Choisir une date de pr\u00E9l\u00E8vement"),
                react_1.default.createElement("input", { className: " dateInput cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 mt-1 flex justify-center  bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-white appearance-none text-sm ", type: "date", name: "datePrlvt", id: "", placeholder: "YYYY-MM-DD", onChange: handleChange, value: newContract.datePrlvt })),
            react_1.default.createElement("div", { className: "relative" },
                react_1.default.createElement("input", { type: "number", name: "prix", className: "cursor-pointer text-3xl  mt-5 mb-5 text-center rounded-lg w-30", placeholder: "0.00", onChange: handleChange, value: newContract.prix, inputMode: "decimal", step: "any" }),
                react_1.default.createElement("p", { className: "absolute right-[-0px] top-2 text-2xl pointer-events-none mt-5" }, "\u20AC")),
            react_1.default.createElement("div", null,
                react_1.default.createElement("select", { name: "type", id: "", className: "mt-0 cursor-pointer w-[40%] min-w-[300px] text-center rounded-lg p-1 bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg text-sm", onChange: handleChange, value: newContract.type },
                    react_1.default.createElement("option", { value: "", disabled: true, selected: true }, "Choisir un type"),
                    listeModeDePaiement.map((modeDePaiement) => (react_1.default.createElement("option", { value: modeDePaiement.nom, key: modeDePaiement.nom }, modeDePaiement.nom))))),
            inputAdditionelPay && (react_1.default.createElement("input", { type: "number", onChange: handleChange, className: "cursor-pointer \r\n                    bg-[#282830]  appearance-none text-center drop-figma p-2 rounded-lg mt-2 text-center p-1 rounded-lg min-w-[300px] text-xs", placeholder: "Entrer le nombre d'\u00E9ch\u00E9ances", name: "echeance", value: newContract.echeance, inputMode: "decimal" })),
            react_1.default.createElement("button", { className: "mt-8\r\n                shadow-lg\r\n                bg-[#009CEA] min-w-[300px] text-white rounded-lg p-1 cursor-pointer transition-all hover:scale-105 text-sm ", onClick: () => enregistrementContrat(newContract) }, "Ajouter le contrat"),
            react_1.default.createElement("p", { className: "text-center mt-0" }, message))));
}
exports.default = AjouterContrat;

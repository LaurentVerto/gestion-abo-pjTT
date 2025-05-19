"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useModeDePaiement() {
    const [listeModeDePaiement, setListeModeDePaiement] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const fetchData = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch('data.json');
                const data = yield response.json();
                setListeModeDePaiement(data.types);
            }
            catch (error) {
                console.error("Erreur survenu lors de la récuperation de la liste : ", error);
            }
        });
        fetchData();
    }, []);
    return {
        listeModeDePaiement,
        setListeModeDePaiement,
    };
}
exports.default = useModeDePaiement;

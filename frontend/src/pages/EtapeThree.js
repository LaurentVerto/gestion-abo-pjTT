"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const ICON_SP = "/logo-xs.png";
const etapeThree = "/etapeThree.png";
function EtapeThree() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "main-content  bg-[#1d1d21] w-screen h-screen fontAbe pb-0 overflow-y-scroll relative " },
            react_1.default.createElement("div", { className: "relative z-10 flex justify-center " },
                react_1.default.createElement("img", { src: ICON_SP, alt: "logo-xs", className: "h-20 left-2 top-10 fixed" }),
                react_1.default.createElement("div", { className: "mt-5 self-center" },
                    react_1.default.createElement("p", { className: "text-[#f8f8f8] " }, "Bienvenue sur"),
                    react_1.default.createElement("h1", { className: "text-black text-xl linear-title font-bold text-center" }, "SplitPay"))),
            react_1.default.createElement("div", { className: "point-design flex justify-center gap-4 mt-[4dvh] relative z-10" },
                react_1.default.createElement("div", { className: "bg-[#f8f8f8] w-2.5 h-2.5 rounded-full shadow-md" }),
                react_1.default.createElement("div", { className: "bg-[#f8f8f8] w-2.5 h-2.5 rounded-full shadow-md" }),
                react_1.default.createElement("div", { className: "bg-[#60A8FE] w-2.5 h-2.5 rounded-full shadow-md" })),
            react_1.default.createElement("div", { className: "p-10 text-xs relative flex flex-col items-center z-10 mt-[5dvh] md:mt-[15dvh]" },
                react_1.default.createElement("p", { className: "fontAbe font-bold" }, "Ensuite, vous retrouvez votre liste de pr\u00E9l\u00E8vements, avec pour chaque contrat :"),
                react_1.default.createElement("ul", { className: "list-disc ml-10 " },
                    react_1.default.createElement("li", { className: "mt-2" }, "La date de pr\u00E9l\u00E8vement"),
                    react_1.default.createElement("li", { className: "mt-2" }, "Le montant associ\u00E9"),
                    react_1.default.createElement("li", { className: "mt-2" }, "Un montant total est \u00E9galement affich\u00E9, avec une s\u00E9paration entre les deux quinzaines du mois en cours (du 1er au 15 et du 16 \u00E0 la fin du mois).")),
                react_1.default.createElement("img", { src: etapeThree, alt: "image etape", className: "mt-10 ml-10 mb-22" }),
                react_1.default.createElement("div", { className: "flex justify-center gap-10 mb-20" },
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/EtapeTwo", className: "bg-gray-700 p-2 rounded-lg " }, "Etape Pr\u00E9c\u00E9dente"),
                    react_1.default.createElement(react_router_dom_1.Link, { to: "/prelevements", className: "bg-[#60A8FE] p-2 rounded-lg text-black " }, "Entrer dans le site"))))));
}
exports.default = EtapeThree;

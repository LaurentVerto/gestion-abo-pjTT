"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ICON_SP = "/logo-xs.png";
function Accueil() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: " w-[100vw] h-[100dvh] z-0 fontAbe border-red-500  " },
            react_1.default.createElement("div", { className: "flex justify-center h-40 mt-20 " },
                react_1.default.createElement("img", { src: ICON_SP, alt: "logo-xs", className: "absolute z-1 h-35" })),
            react_1.default.createElement("div", { className: "flex flex-col justify-center items-center mt-[5dvh]" },
                react_1.default.createElement("p", { className: "" }, "Bienvenue sur"),
                react_1.default.createElement("h1", { className: "text-black text-xl linear-title font-bold " }, "SplitPay"),
                react_1.default.createElement("p", { className: " w-80 text-justify mt-10 text-sm" }, "Une application qui vous permet d\u2019avoir, en un coup d\u2019\u0153il, une vue claire de vos abonnements et de vos paiements en plusieurs fois."),
                react_1.default.createElement("a", { className: "mt-8 text-center underline text-[#009CEA]", href: "https://linktr.ee/LFPCDEV", target: "blank" }, "\uD83D\uDD17 Me suivre \uD83D\uDD17 ")))));
}
exports.default = Accueil;

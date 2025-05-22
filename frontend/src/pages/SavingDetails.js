"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CircularProgress_1 = __importDefault(require("@mui/material/CircularProgress"));
const ICON_SP = "/logo-xs.png";
function SavingDetails() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "flex justify-between items-center mt-10" },
            react_1.default.createElement("h2", { className: "bold text-sm md:text-xl ml-5" },
                " ",
                "\uD83D\uDCBB Test Epargnes"),
            react_1.default.createElement("img", { src: ICON_SP, alt: "logo_xs", className: "h-8 mr-5" })),
        react_1.default.createElement("div", { className: "flex flex-col items-center" },
            react_1.default.createElement("div", { className: "text-center mt-2" },
                react_1.default.createElement("p", { className: "text-xs" }, "Montant \u00E9pargn\u00E9"),
                react_1.default.createElement("p", { className: "text-2xl font-semibold" }, "5 800 \u20AC")),
            react_1.default.createElement("div", { className: "relative flex items-center justify-center mt-5" },
                react_1.default.createElement("div", { style: { position: "relative", display: "inline-flex" } },
                    react_1.default.createElement(CircularProgress_1.default, { variant: "determinate", value: 100, size: 200, thickness: 3, sx: { color: "#1d1d21" } }),
                    react_1.default.createElement(CircularProgress_1.default, { variant: "determinate", value: 90, size: 200, thickness: 3, sx: {
                            color: "#009CEA",
                            position: "absolute",
                            left: 0,
                            top: 0,
                        } })),
                react_1.default.createElement("div", { className: "absolute flex flex-col items-center justify-center" },
                    react_1.default.createElement("p", { className: "text-xs" }, "Objectif"),
                    react_1.default.createElement("p", { className: "text-2xl font-bold text-[#009CEA]" }, "10 000 \u20AC"),
                    react_1.default.createElement("p", { className: "text-xs mt-2" }, "Avant Juillet 2025"))),
            react_1.default.createElement("p", { className: " text-xs p-3 mt-2 text-center " },
                "Tu dois \u00E9pargner ",
                react_1.default.createElement("span", { className: "text-base font-bold text-[#009CEA] " }, "100"),
                " euros / mois si tu veux atteindre ton objectif : ",
                react_1.default.createElement("span", { className: "text-base font-bold text-[#009CEA] " }, "Vacances"),
                " "),
            react_1.default.createElement("div", { className: "w-full px-4" },
                react_1.default.createElement("div", { className: "flex items-center justify-between mt-2 text-xs" },
                    react_1.default.createElement("p", null, "Transactions"),
                    react_1.default.createElement("div", { className: "flex justify-between gap-15" },
                        react_1.default.createElement("span", { className: "text-xs text-[#00FF62]/50" }, "D\u00E9pots = 150 \u20AC"),
                        react_1.default.createElement("span", { className: "text-xs text-[#FF0000]/50" }, "Retrait = 50 \u20AC")))),
            react_1.default.createElement("ul", { className: "w-full px-5 mt-3 flex flex-col gap-3 overflow-hidden h-[20vh]" },
                react_1.default.createElement("li", { className: "flex w-[100%] relative justify-between p-3 border-l-[#5B975D] rounded-br-[5px] rounded-tr-[5px] drop-figma gradient-border items-center text-xs" },
                    react_1.default.createElement("p", null, "D\u00E9p\u00F4t"),
                    react_1.default.createElement("p", null, "150 \u20AC")),
                react_1.default.createElement("li", { className: "flex w-[100%] relative justify-between p-3 border-l-[#5B975D] rounded-br-[5px] rounded-tr-[5px] drop-figma gradient-border items-center text-xs" },
                    react_1.default.createElement("p", null, "D\u00E9p\u00F4t"),
                    react_1.default.createElement("p", null, "150 \u20AC")),
                react_1.default.createElement("li", { className: "flex w-[100%] relative justify-between p-3 border-l-[#5B975D] rounded-br-[5px] rounded-tr-[5px] drop-figma gradient-border items-center text-xs" },
                    react_1.default.createElement("p", null, "D\u00E9p\u00F4t"),
                    react_1.default.createElement("p", null, "150 \u20AC")),
                react_1.default.createElement("li", { className: "flex w-[100%] relative justify-between p-3 border-l-[#5B975D] rounded-br-[5px] rounded-tr-[5px] drop-figma gradient-border items-center text-xs" },
                    react_1.default.createElement("p", null, "D\u00E9p\u00F4t"),
                    react_1.default.createElement("p", null, "150 \u20AC"))))));
}
exports.default = SavingDetails;

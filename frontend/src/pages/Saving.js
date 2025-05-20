"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CurrentSavings_1 = __importDefault(require("../components/Saving/CurrentSavings"));
const SavingsCompleted_1 = __importDefault(require("../components/Saving/SavingsCompleted"));
const ICON_SP = "/logo-xs.png";
function Saving() {
    return (react_1.default.createElement("div", { className: "realtive" },
        react_1.default.createElement("div", { className: "flex justify-between items-center mt-10" },
            react_1.default.createElement("h2", { className: "bold text-sm md:text-xl ml-5" }, "Epargnes"),
            react_1.default.createElement("img", { src: ICON_SP, alt: "logo_xs", className: "h-8 mr-5" })),
        react_1.default.createElement(CurrentSavings_1.default, null),
        react_1.default.createElement(SavingsCompleted_1.default, null),
        react_1.default.createElement("div", { className: "absolute bottom-20 left-5 flex justify-between w-[90%] items-center" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("ul", { className: "text-xs text-[#009CEA] " },
                    react_1.default.createElement("li", null, "3 Epargnes en cours"),
                    react_1.default.createElement("li", null, "1 Epargne finalis\u00E9"))),
            react_1.default.createElement("svg", { width: "50", height: "50", viewBox: "0 0 50 50", fill: "none", xmlns: "http://www.w3.org/2000/svg", className: "cursor-pointer" },
                react_1.default.createElement("path", { d: "M25.0001 45.8334C36.506 45.8334 45.8334 36.506 45.8334 25.0001C45.8334 13.4941 36.506 4.16675 25.0001 4.16675C13.4941 4.16675 4.16675 13.4941 4.16675 25.0001C4.16675 36.506 13.4941 45.8334 25.0001 45.8334Z", stroke: "#F8F8F8", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                react_1.default.createElement("path", { d: "M16.6667 25H33.3334", stroke: "#F8F8F8", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }),
                react_1.default.createElement("path", { d: "M25 16.6667V33.3334", stroke: "#F8F8F8", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" })))));
}
exports.default = Saving;

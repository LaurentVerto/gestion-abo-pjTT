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
const Version01_1 = __importDefault(require("./VersionsText/Version01"));
const Version02_1 = __importDefault(require("./VersionsText/Version02"));
function Version() {
    const [overlay, setOverlay] = (0, react_1.useState)(false);
    const [openIndex, setOpenIndex] = (0, react_1.useState)(null); // pour gérer quelle version est ouverte
    const handleVersionOverlay = () => {
        setOverlay(!overlay);
        setOpenIndex(null); // Ferme les versions à l'ouverture/fermeture
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("p", { className: "absolute text-[7px] top-2 left-2 z-50 mix-blend-difference" },
            "By ",
            react_1.default.createElement("br", null),
            " LFPC-DEV"),
        overlay && (react_1.default.createElement("div", { onClick: handleVersionOverlay, className: "overlay w-full h-full bg-black/70 absolute z-49" },
            react_1.default.createElement("div", { className: "w-[70%] h-auto absolute centerP rounded-lg bg-[#282830] drop-figma p-3" },
                react_1.default.createElement("ul", { className: "flex flex-col gap-3" },
                    react_1.default.createElement(Version01_1.default, { isOpen: openIndex === 0, onToggle: () => setOpenIndex(openIndex === 0 ? null : 0) }),
                    react_1.default.createElement(Version02_1.default, { isOpen: openIndex === 1, onToggle: () => setOpenIndex(openIndex === 1 ? null : 1) })),
                react_1.default.createElement("p", { className: "text-xs m-4 text-center mt-10" }, "\u26A0\uFE0F Le navigateur ne doit pas \u00EAtre en priv\u00E9 pour la sauvegarde de vos contrats"),
                react_1.default.createElement("p", { className: "mt-5 text-center text-xs text-white/20 cursor-pointer" }, "Tap pour fermer")))),
        react_1.default.createElement("p", { onClick: handleVersionOverlay, className: "absolute border cursor-pointer rounded-full right-2 top-2 w-6 h-6 flex justify-center items-center text-base drop-figma z-50 mix-blend-difference" }, "?")));
}
exports.default = Version;

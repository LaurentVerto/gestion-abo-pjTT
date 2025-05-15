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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
function Header() {
    const location = (0, react_router_dom_1.useLocation)();
    const [activeTab, setActiveTab] = (0, react_1.useState)(location.pathname); // ici on recupere l'url avec le pathname pour que le menu reste actif
    (0, react_1.useEffect)(() => {
        setActiveTab(location.pathname);
    }, [location.pathname]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("header", { className: "flex justify-center fixed bottom-0 w-[100%] z-2" },
            react_1.default.createElement("nav", { className: "w-full min-w-[350px]" },
                react_1.default.createElement("ul", { className: "flex justify-center w-[100%] p-3 pl-5 pr-5 gap-3" },
                    react_1.default.createElement(NavItem, { to: "/", activeTab: activeTab, setActiveTab: setActiveTab, label: "Accueil" },
                        react_1.default.createElement("path", { d: "M13 0C10.4288 0 7.91543 0.762437 5.77759 2.1909C3.63975 3.61935 1.97351 5.64968 0.989572 8.02512C0.0056327 10.4006 -0.251811 13.0144 0.249797 15.5362C0.751405 18.0579 1.98953 20.3743 3.80762 22.1924C5.6257 24.0105 7.94208 25.2486 10.4638 25.7502C12.9856 26.2518 15.5995 25.9944 17.9749 25.0104C20.3503 24.0265 22.3807 22.3603 23.8091 20.2224C25.2376 18.0846 26 15.5712 26 13C25.9964 9.5533 24.6256 6.24882 22.1884 3.81163C19.7512 1.37445 16.4467 0.00363977 13 0ZM13 21C12.7033 21 12.4133 20.912 12.1667 20.7472C11.92 20.5824 11.7277 20.3481 11.6142 20.074C11.5007 19.7999 11.4709 19.4983 11.5288 19.2074C11.5867 18.9164 11.7296 18.6491 11.9393 18.4393C12.1491 18.2296 12.4164 18.0867 12.7074 18.0288C12.9983 17.9709 13.2999 18.0007 13.574 18.1142C13.8481 18.2277 14.0824 18.42 14.2472 18.6666C14.412 18.9133 14.5 19.2033 14.5 19.5C14.5 19.8978 14.342 20.2794 14.0607 20.5607C13.7794 20.842 13.3978 21 13 21ZM14 14.91V15C14 15.2652 13.8946 15.5196 13.7071 15.7071C13.5196 15.8946 13.2652 16 13 16C12.7348 16 12.4804 15.8946 12.2929 15.7071C12.1054 15.5196 12 15.2652 12 15V14C12 13.7348 12.1054 13.4804 12.2929 13.2929C12.4804 13.1054 12.7348 13 13 13C14.6538 13 16 11.875 16 10.5C16 9.125 14.6538 8 13 8C11.3463 8 10 9.125 10 10.5V11C10 11.2652 9.89465 11.5196 9.70711 11.7071C9.51958 11.8946 9.26522 12 9.00001 12C8.73479 12 8.48044 11.8946 8.2929 11.7071C8.10536 11.5196 8.00001 11.2652 8.00001 11V10.5C8.00001 8.01875 10.2425 6 13 6C15.7575 6 18 8.01875 18 10.5C18 12.6725 16.28 14.4912 14 14.91Z", fill: "white" })),
                    react_1.default.createElement(NavItem, { to: "/prelevements", activeTab: activeTab, setActiveTab: setActiveTab, label: "Prelevements" },
                        react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M11.6162 2.86623C11.8506 2.63189 12.1685 2.50024 12.5 2.50024C12.8314 2.50024 13.1493 2.63189 13.3837 2.86623L22.1337 11.6162C22.3085 11.791 22.4275 12.0137 22.4757 12.2562C22.5239 12.4986 22.4992 12.7499 22.4046 12.9783C22.31 13.2067 22.1498 13.4019 21.9443 13.5392C21.7388 13.6766 21.4972 13.7499 21.25 13.75H20V21.25C20 21.5815 19.8683 21.8994 19.6339 22.1339C19.3994 22.3683 19.0815 22.5 18.75 22.5H16.25C15.9185 22.5 15.6005 22.3683 15.3661 22.1339C15.1317 21.8994 15 21.5815 15 21.25V17.5C15 17.1685 14.8683 16.8505 14.6339 16.6161C14.3994 16.3817 14.0815 16.25 13.75 16.25H11.25C10.9185 16.25 10.6005 16.3817 10.3661 16.6161C10.1317 16.8505 9.99998 17.1685 9.99998 17.5V21.25C9.99998 21.5815 9.86828 21.8994 9.63386 22.1339C9.39944 22.3683 9.0815 22.5 8.74998 22.5H6.24998C5.91846 22.5 5.60051 22.3683 5.36609 22.1339C5.13167 21.8994 4.99998 21.5815 4.99998 21.25V13.75H3.74998C3.50279 13.7499 3.26117 13.6766 3.05565 13.5392C2.85014 13.4019 2.68997 13.2067 2.59538 12.9783C2.50079 12.7499 2.47604 12.4986 2.52425 12.2562C2.57246 12.0137 2.69147 11.791 2.86623 11.6162L11.6162 2.86623Z" })),
                    react_1.default.createElement(NavItem, { to: "/contrats", activeTab: activeTab, setActiveTab: setActiveTab, label: "Contrats" },
                        react_1.default.createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M17.3588 3.9775C17.8538 4.02375 18.3462 4.0775 18.8375 4.1375C20.2425 4.3125 21.25 5.5175 21.25 6.89625V20.9375C21.25 21.3068 21.1773 21.6726 21.0359 22.0138C20.8946 22.355 20.6874 22.6651 20.4262 22.9262C20.1651 23.1874 19.855 23.3946 19.5138 23.5359C19.1726 23.6773 18.8068 23.75 18.4375 23.75H6.5625C6.19316 23.75 5.82743 23.6773 5.4862 23.5359C5.14497 23.3946 4.83493 23.1874 4.57376 22.9262C4.3126 22.6651 4.10543 22.355 3.96409 22.0138C3.82275 21.6726 3.75 21.3068 3.75 20.9375V6.89625C3.75 5.5175 4.7575 4.31125 6.1625 4.1375C6.65375 4.0775 7.14625 4.025 7.64125 3.9775C7.86405 3.19211 8.33697 2.50085 8.98826 2.0086C9.63954 1.51636 10.4336 1.25002 11.25 1.25H13.75C15.4663 1.25 16.9137 2.40375 17.3588 3.9775ZM9.375 5C9.375 4.50272 9.57254 4.02581 9.92417 3.67417C10.2758 3.32254 10.7527 3.125 11.25 3.125H13.75C14.2473 3.125 14.7242 3.32254 15.0758 3.67417C15.4275 4.02581 15.625 4.50272 15.625 5V5.625H9.375V5Z" })),
                    react_1.default.createElement(NavItem, { to: "/ajouter-contrat", activeTab: activeTab, setActiveTab: setActiveTab, label: "Ajouter" },
                        react_1.default.createElement("path", { d: "M13.4375 5.9375C13.4375 5.68886 13.3387 5.4504 13.1629 5.27459C12.9871 5.09877 12.7486 5 12.5 5C12.2514 5 12.0129 5.09877 11.8371 5.27459C11.6613 5.4504 11.5625 5.68886 11.5625 5.9375V11.5625H5.9375C5.68886 11.5625 5.4504 11.6613 5.27459 11.8371C5.09877 12.0129 5 12.2514 5 12.5C5 12.7486 5.09877 12.9871 5.27459 13.1629C5.4504 13.3387 5.68886 13.4375 5.9375 13.4375H11.5625V19.0625C11.5625 19.3111 11.6613 19.5496 11.8371 19.7254C12.0129 19.9012 12.2514 20 12.5 20C12.7486 20 12.9871 19.9012 13.1629 19.7254C13.3387 19.5496 13.4375 19.3111 13.4375 19.0625V13.4375H19.0625C19.3111 13.4375 19.5496 13.3387 19.7254 13.1629C19.9012 12.9871 20 12.7486 20 12.5C20 12.2514 19.9012 12.0129 19.7254 11.8371C19.5496 11.6613 19.3111 11.5625 19.0625 11.5625H13.4375V5.9375Z" })))))));
}
// Composant réutilisable pour chaque bouton de navigation
function NavItem({ to, activeTab, setActiveTab, label, children }) {
    const isActive = activeTab === to;
    return (react_1.default.createElement("div", { className: "group" },
        react_1.default.createElement("li", { className: `relative  top-0  p-1 rounded-full w-auto transition-all duration-300 ${isActive ? "bg-[#009CEA]" : "bg-black group-hover:bg-[#009CEA] "}  `, onClick: () => setActiveTab(to) },
            react_1.default.createElement(react_router_dom_1.Link, { to: to, className: ` "flex flex items-center justify-start transition-all" ${isActive ? " duration-300 w-fit" : "group-hover:w-fit"} ` },
                react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "#f8f8f8", viewBox: "0 0 30 30", strokeWidth: "0", stroke: "none", className: ` size-10 transition-all duration-300  translate-x-[3px] translate-y-[2px]
                    ${isActive ? "stroke-[#f8f8f8] " : "group-hover:stroke-[#f8f8f8] "}` }, children),
                isActive && (react_1.default.createElement("span", { className: `text-[#f8f8f8] text-sm font-medium transition-all top-3 ml-1 mr-2 left-11 duration-300 
                    ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}` }, label)
                // : (
                //     <span className={`text-[#f8f8f8] text-sm font-medium transition-all top-3 left-11 duration-300 w-0 group-hover:w-fit
                //     ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                //     {label}
                // </span>
                )))));
}
exports.default = Header;

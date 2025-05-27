"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useSavingsServices() {
    const [saving, setSaving] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const dataLocal = localStorage.getItem("mySavings");
        if (dataLocal) {
            setSaving(JSON.parse(dataLocal));
        }
    }, []);
    return {
        saving,
        setSaving,
    };
}
exports.default = useSavingsServices;

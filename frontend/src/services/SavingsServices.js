"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function useSavingsServices() {
    const [saving, setSaving] = (0, react_1.useState)([]);
    return {
        saving,
        setSaving
    };
}
exports.default = useSavingsServices;

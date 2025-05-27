import React, { useEffect, useState } from "react";

type ListTransactions = {
    date: Date,
    amount: Number
}

export type SavingsType = {
    name: string,
    amount: number,
    deadline: string,
    deposit: ListTransactions[] ,
    withdrawal: ListTransactions[]
}

function useSavingsServices(){

    const [saving, setSaving]  = useState<SavingsType[]>([])
    

    useEffect(() => {
            const dataLocal = localStorage.getItem("mySavings");
            
            if (dataLocal) {
                setSaving(JSON.parse(dataLocal) as SavingsType[]);
            }
        }, []);
    
    return{
        saving,
        setSaving,
    }
    
}

export default useSavingsServices;

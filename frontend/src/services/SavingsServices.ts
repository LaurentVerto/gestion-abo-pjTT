import React, { useState } from "react";

type ListTransactions = {
    date: Date,
    amount: Number
}

type SavingsType = {
    name: string,
    amount: number,
    deadline: string,
    deposit: ListTransactions[] ,
    withdrawal: ListTransactions[]
}

function useSavingsServices(){

    const [saving, setSaving]  = useState<SavingsType[]>([])
    
    return{
        saving,
        setSaving
    }
    
}

export default useSavingsServices;

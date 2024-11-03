
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

export default function Inputfds() {
    const [mobilenumber, setMobilenumber] = useState<string>('');
    const [amount, setAmount] = useState<string>('');
    const [circle, setCircle] = useState<string>('');


    return (
        <div className="card flex justify-content-center w-full md:w-20rem" style={{flexDirection:"column", gap:30, paddingTop:10, alignContent:"start", alignItems:"start"
        }}>
            <FloatLabel style={{gap:10}} className="w-full md:w-20rem">
                <InputText pattern="[0-9]*"   className='w-full md:w-20rem' id="mobilenumber" inputMode="numeric" value={mobilenumber} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMobilenumber(e.target.value)} />
                <label htmlFor="mobilenumber">Mobile Number</label>
            </FloatLabel>

            <FloatLabel style={{gap:10}} className="w-full md:w-20rem">
                <InputText  className='w-full md:w-20rem' id="circle" inputMode="text" value={circle} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCircle(e.target.value)} />
                <label htmlFor="circle">Circle</label>
            </FloatLabel>
            <FloatLabel style={{gap:10}} className="w-full md:w-20rem">
                <InputText  pattern="[0-9]*"  className='w-full md:w-20rem' id="amount" inputMode="numeric" value={amount} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)} />
                <label htmlFor="amount">Amount</label>
            </FloatLabel>
        </div>
    )
}
        
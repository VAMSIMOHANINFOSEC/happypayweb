import { useState } from 'react';
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import Dropdownfilteer from "../dropdownfilter/Dropdown";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
const Loancomponent = () => {
    const [mobilenumber, setMobilenumber] = useState<string>('');

    return (
        <div style={{ backgroundColor: "whitesmoke", flex: 1, padding: 80, paddingTop: 0 }}>
            <div className="card flex justify-content-start">
                <Card
                    title="Pay Loan EMI"
                    className="md:w-25rem"
                    style={{ padding: 20, borderRadius: 20 }}
                >
                    <Dropdownfilteer />

                    <div style={{ paddingTop: 25 }}>
                    <FloatLabel style={{gap:10}} className="w-full md:w-20rem">
                <InputText pattern="[0-9]*"   className='w-full md:w-20rem' id="mobilenumber" inputMode="numeric" value={mobilenumber} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMobilenumber(e.target.value)} />
                <label htmlFor="mobilenumber">Mobile Number</label>
            </FloatLabel>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            paddingTop: 10,
                            justifyContent: "center",
                            alignContent: "center",
                        }}
                    >
                        <Button
                            label= 'Pay EMI'
                            className="w-full md:w-20rem"
                        />
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Loancomponent;

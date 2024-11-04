import { useState } from 'react';
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import Navbar from '../navbar/Navbar';
import LoanDropdownfilteer from '../dropdownfilter/Loandropdown';
const Loancomponent = () => {
    const [loannumber, setLoannumber] = useState<string>('');

    return (
        <>
        <Navbar/>
        <div style={{ backgroundColor: "#f5f7fa", flex: 1, padding: 80, paddingTop: "10%" }}>
            <div className="card flex justify-content-start">
                <Card
                    title="Pay Loan EMI"
                    className="md:w-25rem"
                    style={{ padding: 20, borderRadius: 20 }}
                >
                    <LoanDropdownfilteer />

                    <div style={{ paddingTop: 25 }}>
                    <FloatLabel style={{gap:10}} className="w-full md:w-20rem">
                <InputText pattern="[0-9]*"   className='w-full md:w-20rem' id="loannumber" inputMode="numeric" value={loannumber} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLoannumber(e.target.value)} />
                <label htmlFor="loannumber">Loan Number</label>
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
        </>
    );
};

export default Loancomponent;

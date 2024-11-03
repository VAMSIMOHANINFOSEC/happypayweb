import { useState } from 'react';
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import Radiobtn from "../radiobtn/Radiobtn";
import Inputfds from "../inputfileds/Inputfds";
import Dropdownfilteer from "../dropdownfilter/Dropdown";

const Billscomponent = () => {
    const [ingredient, setIngredient] = useState<string>('Prepaid'); 

    return (
        <div style={{ backgroundColor: "whitesmoke", flex: 1, padding: 80, paddingTop: 0 }}>
            <div className="card flex justify-content-start">
                <Card
                    title="Recharge or Pay Mobile Bill"
                    className="md:w-25rem"
                    style={{ padding: 20, borderRadius: 20 }}
                >
                    <Radiobtn ingredient={ingredient} setIngredient={setIngredient} />
                    <Dropdownfilteer />

                    <div style={{ paddingTop: 25 }}>
                        <Inputfds />
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
                            label={`Proceed to ${ingredient === 'Prepaid' ? 'Recharge' : 'Pay Bill'}`}
                            className="w-full md:w-20rem"
                        />
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Billscomponent;

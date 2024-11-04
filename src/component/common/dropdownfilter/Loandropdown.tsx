import { useState } from "react";
import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import jiologo from '../../../assets/operatorslogo/jiologo.png';
interface Operator {
    name: string;
    code: string;
}

export default function LoanDropdownfilteer() {
    const [selectedOperator, setSelectedOperator] = useState<Operator | null>(null);
    const countries: Operator[] = [
        { name: 'DMI Finance Private Limited', code: 'Jio' },
        { name: 'DMI Finance Private Limited', code: 'BSNL' },
        { name: 'DMI Finance Private Limited', code: 'Airtel' },
    ];

    const selectedOperatorTemplate = (option: Operator, props:any) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <img alt={option.name} src={jiologo} className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const operatorOptionTemplate = (option: Operator) => {
        return (
            <div className="flex align-items-center">
                <img alt={option.name} src={jiologo} className={`mr-2 flag flag-${option.code.toLowerCase()}`} style={{ width: '18px' }} />
                <div>{option.name}</div>
            </div>
        );
    };

    return (
        <div className="card flex justify-content-start" style={{paddingTop:20}}>
            <Dropdown value={selectedOperator} onChange={(e: DropdownChangeEvent) => setSelectedOperator(e.value)} options={countries} optionLabel="name" placeholder="Select a Lender" 
                filter valueTemplate={selectedOperatorTemplate} itemTemplate={operatorOptionTemplate} className="w-full md:w-20rem" />
        </div>    
    )
}
        
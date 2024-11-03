import { RadioButton, RadioButtonChangeEvent } from 'primereact/radiobutton';

interface RadiobtnProps {
    ingredient: string;
    setIngredient: (value: string) => void;
}

export default function Radiobtn({ ingredient, setIngredient }: RadiobtnProps) {
    return (
        <div className="flex flex-wrap gap-3" style={{ alignContent: "start", alignItems: "start", justifyContent: "start" }}>
            {['Prepaid', 'Postpaid'].map((item) => (
                <div className="flex align-items-center" key={item}>
                    <RadioButton
                        inputId={`ingredient-${item}`}
                        name="pizza"
                        value={item}
                        onChange={(e: RadioButtonChangeEvent) => setIngredient(e.value)}
                        checked={ingredient === item}
                    />
                    <label htmlFor={`ingredient-${item}`} className="ml-2">{item}</label>
                </div>
            ))}
        </div>
    );
}

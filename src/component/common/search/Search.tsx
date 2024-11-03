import React, { useState } from "react";
import { InputText } from "primereact/inputtext";

const CustomSearch = () => {
    const [value, setValue] = useState<string>('');

    return (
        <div className="card flex justify-content-center">
            <InputText value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)} />
        </div>
    )
}

export default CustomSearch;
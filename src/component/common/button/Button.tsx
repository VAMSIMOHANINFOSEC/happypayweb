import { Button } from 'primereact/button';
import React, { CSSProperties } from 'react';

interface CustomButtonProps {
    label?: string;
    isLink?: boolean;
    url?: string;
    target?: '_self' | '_blank' | '_parent' | '_top';
    styleClass?: string;
    onClick?: () => void;
    color?: string;
    icon?: string;
    style?: CSSProperties; // Custom styles prop
}

const CustomButton: React.FC<CustomButtonProps> = ({
    label = "Link",
    isLink = true,
    url = "https://www.happypay.live/",
    target = "_blank",
    styleClass = "p-button font-bold",
    onClick = () => window.open(url, target),
    color,
    icon,
    style = {
        backgroundColor: 'black',
        color: 'white',
        height: '50px',
        width: '150px',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        outline: 'none',
    },
}) => {
    const buttonStyle = {
        backgroundColor: color,
        ...style,
    };

    return (
        <div>
            <Button 
                label={label} 
                link={isLink} 
                onClick={onClick}
                className={styleClass}
                icon={icon}
                style={buttonStyle}
            />
        </div>
    );
};

export default CustomButton;
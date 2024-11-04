import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { MenuItem as PrimeMenuItem } from 'primereact/menuitem';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';  
import Logo from '../../../assets/brandlogos/logo.png'
interface MenuItemWithBadge extends Omit<PrimeMenuItem, 'items'> {
    badge?: number;
    shortcut?: string;
    separator?: boolean;
    label?: string;
    items?: MenuItemWithBadge[];
}

export default function Navbar() {

    const items: MenuItemWithBadge[] = [
        {
            label: 'About us',
        },
        {
            label: 'News room',
        },
        {
            label: 'Blog',
        },
        {
            label: 'Business',
            items: [
                {
                    label: 'Air',
                },
                {
                    label: 'Cab',
                },
                {
                    label: 'Bus',
                }
                
            ]
        },

    ];

    const start = <img alt="logo" src={Logo} height="40" className="mr-2" />;
    const end = (
        <div className="flex align-items-center gap-3" >
            <p>Get app</p>
            <p>Coins</p>
            <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
        </div>
    );

    return (
        <div className="card" >
            <Menubar model={items as PrimeMenuItem[]} start={start} end={end} style={{padding:40, gap:20}} />
        </div>
    );
}

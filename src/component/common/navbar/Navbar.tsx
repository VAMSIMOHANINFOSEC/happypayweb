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

    const start = <a href='/'><img alt="logo" src={Logo} height="70" className="mr-2" /></a>;
    const end = (
        <div className="flex align-items-center gap-3" >
            <p>Get app: <i className="pi pi-apple"/> <i className="pi pi-android"/>
            </p>
            <div className="flex align-items-center">
  <p style={{
    backgroundColor: "lightblue",
    padding: 5,
    paddingRight:15,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: "auto",
    marginRight: -7,  
    zIndex: 1,         
    position: "relative",
    fontSize:13,
    fontWeight:"bold"
  }}>
    You have: {"250"} <i className='pi pi-stop-circle ' style={{color:"gold"}}/>
  </p>
  <Avatar
    image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
    shape="circle"
    style={{
      border: "2px solid white", 
      zIndex: 2,  height:40 , width:40              
    }}
  />
</div>
        </div>
    );

    return (
        <div className="card" >
            <Menubar model={items as PrimeMenuItem[]} start={start} end={end} style={{padding:40, gap:20}} />
        </div>
    );
}

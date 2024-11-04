import BrandCircle from "../../common/brand-circle/BrandCircle";
import Dropdown from "../../common/dropdown/Dropdown";
import Navbar from "../../common/navbar/Navbar";
import Search from "../../common/search/Search";
import Header from "../../layout/header/Header";
import { Button } from 'primereact/button';

const Home = () => {
    return (
        <div>
            <Navbar/>
            {/* <Header/> */}

            <div>
            <h1 className="card flex justify-content-center ">Super Savings at million<i className="pi pi-plus" style={{fontWeight:"bold", color:"blue"}}/> stores around you!</h1>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center", gap:10}}>
            <Dropdown/>  
            <Search/>
            </div>
            <div className="card flex justify-content-center gap-5 p-6">
            <Button label="HappyPay Super App" style={{height:'auto', width:"auto", borderRadius:30, backgroundColor:"goldenrod", borderColor:"goldenrod"}} />
            <Button label="HappyPay Business App"  style={{height:'auto', width:'auto', borderRadius:30, backgroundColor:"whitesmoke", borderColor:"whitesmoke", color:"black"}}/>
            </div>
            </div>
            <div>
                {/* <BrandCircle/> */}
            </div>
        </div>
    )
}

export default Home;
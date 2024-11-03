import BrandCircle from "../../common/brand-circle/BrandCircle";
import Dropdown from "../../common/dropdown/Dropdown";
import Search from "../../common/search/Search";
import Header from "../../layout/header/Header";

const Home = () => {
    return (
        <div>
            <Header/>
            <div>
            <Search/>
            <Dropdown/>
            </div>
            <div>
                <BrandCircle/>
            </div>
        </div>
    )
}

export default Home;
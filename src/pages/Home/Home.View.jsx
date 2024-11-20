import CustomCarousel from "../../Components/BootstrapCarousel/BootstrapCarousel.view";
import FlightSection from "../../Components/card/Cards";
import SearchBar from "../../Components/SearchBar/SearchBar";

const Home = (props) => {
    
    
    return (
        <div className={`home-container container-xxl`}>
            <div >
                <CustomCarousel/>
            </div>
            <SearchBar/>
            <div className="text-center">
                <h2>Available Flights</h2>
                <FlightSection/>
                <button className="flight-section__button mb-5">View More</button>
            </div>
        </div>
    );
};

export default Home;
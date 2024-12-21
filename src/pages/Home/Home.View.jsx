import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { path } from "../../routes/path";

const Home = (props) => {
    const navigate = useNavigate();
    
    useEffect(()=>{
        navigate(path.login)
    },[])
    return (
        <div className={`home-container`}>
        </div>
    );
};

export default Home;
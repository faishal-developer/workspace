
import {path} from '../../../routes/path';

const useasideDropDown = () => {
    const filterCategory = (activeId, { SubCategories, setSubcats, setSubcat })=>{
        let newArray = SubCategories.filter((el) => el.cat_id.includes(activeId));
        // let data = newArray[0].value?.length>=1? newArray[0].value : null;
        setSubcats && setSubcats(newArray);
        setSubcat && setSubcat('');
        return newArray;
    }

    const Cat_click_handler=({id,setId},{query,navigate},search)=>{
        setId(id);
        let newPath = path.home;
        search? newPath=newPath+search+"&"+query : newPath = newPath+'?'+query;
        navigate(newPath);
    }
    return{
        filterCategory,
        Cat_click_handler
    }
};

export default useasideDropDown;
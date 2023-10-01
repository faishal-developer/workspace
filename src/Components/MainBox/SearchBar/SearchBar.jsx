import React, { useEffect, useState } from 'react';
import { addQueryParams, handleKeyWords, stickyPosition } from '../../../helper/CommonFunction';
import FontAwesome, { iconList } from '../../FontAwesome/FontAwesome';
import { useLocation, useNavigate } from 'react-router-dom';
import useMainBox from '../MainBox.presenter';


//todo: implement searchBar popup while writing on searchbox
const keyword=["keyring","portrait","dim light","pen holder","giftbox","crest","Name Plate","3d","Cloth","laser",'key','ring','dim','light','holder','threed','name','t-shirt','tshirt','custom','wooden','pvc','acrilic','lesar','nike','addidas','walmate','box','pencil','lether','cloths','skell','thikness skell','Stylish wooden clock','stylish wooden clock'];
const SearchBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchTxt,setSearchTxt] = useState('');
    const { handleSearch ,handleChange} = useMainBox();

    useEffect(()=>{
        stickyPosition("search_bar", "p_sticky0")
    },[])
    return (
        <div  className='search_bar'>
            <div>
                <div id="search_bar" className='search'>
                    <input 
                        type="text" 
                        value={searchTxt} 
                        onChange={(e) => handleChange(e,setSearchTxt)}
                        onKeyDown={handleSearch}
                    />
                    <span className='src_btn' onClick={()=>handleSearch(false,searchTxt)}>
                        <FontAwesome icon={iconList.search} />
                    </span>
                    {/* <span className='drop_down'></span> */}
                </div>
                {
                    handleKeyWords(keyword).length>=1? (
                        <div className='keyword'>
                            {
                                handleKeyWords(keyword)?.map((el, i) => (
                                    <p 
                                        key={i}
                                        onClick={() => addQueryParams(navigate,location,{key:'key',value:el})}
                                    >
                                        {el}
                                    </p>
                                ))
                            }
                        </div>
                    ):null
                }
            </div>
        </div>
    );
};

export default SearchBar;
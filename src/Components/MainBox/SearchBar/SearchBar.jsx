import React, { useEffect } from 'react';
import { stickyPosition } from '../../../helper/CommonFunction';
import FontAwesome, { iconList } from '../../FontAwesome/FontAwesome';

const keyword=["key ring","portrait","dimlight","penbox","giftbox","crest","Name Plate","3d","Cloth","laser cutting"];
const SearchBar = () => {

    useEffect(()=>{
        stickyPosition("search_bar", "p_sticky0")
    },[])
    return (
        <div  className='search_bar'>
            <div>
                <div id="search_bar" className='search'>
                    <input type="text" />
                    <span className='src_btn'>
                        <FontAwesome icon={iconList.search} />
                    </span>
                    <span className='drop_down'></span>
                </div>
                {
                    keyword.length>=1? (
                        <div className='keyword'>
                            {
                                keyword?.map((el, i) => (
                                    <p key={i}>{el}</p>
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
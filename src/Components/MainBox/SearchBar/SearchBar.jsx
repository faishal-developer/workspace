import React from 'react';
import FontAwesome, { iconList } from '../../FontAwesome/FontAwesome';

const keyword=["key ring","portrait","shopies","map","busket","Dummy","family","3d","Cloth","laser cutting"];
const SearchBar = () => {
    return (
        <div className='search_bar'>
            <div>
                <div className='search'>
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
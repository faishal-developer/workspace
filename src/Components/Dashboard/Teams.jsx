import React, { useState } from 'react'
import Card from './card'
import './static/dashboard.scss';
import FontAwesome, { iconList } from '../FontAwesome/FontAwesome'
import { cardData3, data3, headers3 } from './static/utils'

const Teams = () => {
    const [dateRange, setDateRange] = useState("");

    const handleDateRangeChange = (e) => {
        setDateRange(e.target.value);
    };

    
  return (
    <div className='mb-4 main-cont'>
        <div className='card-container card-container-2'>
            {cardData3.map((item)=>(
                <Card icon={item.icon} title={item.title} bg={item.bg} total={item.total}/>
            ))}
        </div>
        <div className="search-filter-bar">
            {/* Search Section */}
            <div className="search-section">
                <label htmlFor="search-input" className="label">
                Search
                </label>
                <div className="search-input-wrapper">
                <input
                    type="text"
                    id="search-input"
                    placeholder="Search by User ID/Name/Company/Type"
                />
                <button className="search-button">
                    <span className='search-icon'>
                        <FontAwesome  icon={iconList.search}/>
                    </span>
                </button>
                </div>
            </div>

           

            {/* Filter By Date Section */}
            <div className="date-section w-50">
                <label htmlFor="date-range" className="label">
                Filter By Date:
                </label>
                <div className="date-range-button-wrapper w-100">
                <input
                    type="text"
                    className="date-range-button"
                    placeholder="Date Range"
                    value={dateRange}
                    onFocus={(e) => e.target.type = "date"}
                    onBlur={(e) => e.target.type = "text"}
                    onChange={handleDateRangeChange}
                />
                </div>
            </div>
        </div>
        <div className='tab-cont'>
            <div className="table-container teams-table">
                <table className="data-table">
                    <thead>
                    <tr>
                        {headers3.map(item=>(
                            <th>{item}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {data3.map((item)=>(
                        <tr key={item.id+item.reciver}>
                            <td>{item.name}</td>
                            <td>{item.desc}</td>
                            <td>{item.count}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <div className="pagination">
                    <span>Showing 1 to 10 of 57 entries</span>
                    <div>
                    <button>Previous</button>
                    <button className="active">1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>Next</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Teams
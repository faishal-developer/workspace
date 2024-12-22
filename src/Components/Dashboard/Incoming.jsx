import React, { useState } from 'react'
import Card from './card'
import './static/dashboard.scss';
import FontAwesome, { iconList } from '../FontAwesome/FontAwesome'
import { cardData1, data1, headers1 } from './static/utils'

const Incoming = () => {
    const [onFocused, setOnFocused] = useState(false);
    
  return (
    <div className='mb-4 main-cont'>
        <div className='card-container'>
            {cardData1.map((item)=>(
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

            {/* Status Section */}
            <div className="status-section">
                <label htmlFor="status-select" className="label">
                Status:
                </label>
                <span className='relative'>
                    <select id="status-select" className="dropdown">
                        <option value="">Select</option>
                    </select>
                    <span className='icon'>
                        <FontAwesome icon={iconList.bottomTri}/>
                    </span>
                </span>
            </div>

            {/* Filter By Date Section */}
            <div className="date-section">
                <label htmlFor="date-range" className="label">
                 Filter By Date:
                </label>
                <div className="date-range-button-wrapper">
                    <input
                        type="text"
                        className="date-range-button"
                        id="date-range"
                        placeholder={  "Date Range"}
                        // value={dateRange}
                        onFocus={(e) => {
                            e.target.type = "date"
                            setOnFocused(true)
                        }}
                        onBlur={(e) => {
                            e.target.type = "text"
                            setOnFocused(false)
                        }}
                        onChange={()=>{}}
                    /> 
                    <span className={onFocused?"d-none":'icon'}>
                        <FontAwesome icon={iconList.bottomTri}/>
                    </span>
                
                </div>
            </div>

            {/* Export Button */}
            <button className="export-button">Export</button>
        </div>
        <div className='tab-cont3'>
            <div className="table-container table-container3">
                <table className="data-table">
                    <thead>
                    <tr>
                        <th>
                        <input type="checkbox" />
                        </th>
                        {headers1.map(item=>(
                            <th>{item}</th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {data1.map((item)=>(
                        <tr key={item.id+item.reciver}>
                            <td>
                            <input type="checkbox" />
                            </td>
                            <td>{item.id}</td>
                            <td>{item.type}</td>
                            <td>{item.quantity}</td>
                            <td>{item.reciver}</td>
                            <td>{item.company}</td>
                            <td>{item.status}</td>
                            <td>{item.date}</td>
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

export default Incoming
import React, { useState } from 'react'
import Card from './card'
import box from "../../assets/box.png"
import boxWithHand from "../../assets/boxWithHand.png"
import boxes from "../../assets/boxes.png"
import boy from "../../assets/boy.png"
import car from "../../assets/car.png"
import drawer from "../../assets/drawer.png"
import kham from "../../assets/kham.png"
import myProfile from "../../assets/myProfile.png"
import pending from "../../assets/pending.png"
import profile from "../../assets/profile.png"
import redWarn from "../../assets/redWarn.png"
import worker from "../../assets/worker.png"
import './static/dashboard.scss';
import FontAwesome, { iconList } from '../FontAwesome/FontAwesome'

const Outgoing = () => {
    const [dateRange, setDateRange] = useState("");

    const handleDateRangeChange = (e) => {
        setDateRange(e.target.value);
    };

    let cardData=[
        {icon:boxes,title:"Total Sample",total:24,bg:"greenish"},
        {icon:pending,title:"Pending",total:16,bg:"yellowish"},
        {icon:boxWithHand,title:"Delivered",total:8,bg:"greenish2"},
        {icon:car,title:"Total Dispatched",total:8,bg:"bluish"},
    ]

    
    const headers=['Receiver Name','Sample Type','Quantity','Company Name','Status','Date']
    
    const data=[
        {id:5485,type:"Light",quantity:2,reciver:"Johnathan Smith",company:"EcoGlow Lamp",status:"Queued",date:"11-7-2014"},
        {id:5488,type:"Water Bottle",quantity:2,reciver:"Emily Parker",company:"FreshFusion Bottle",status:"Pending",date:"11-7-2014"},
        {id:5485,type:"Bedding",quantity:1,reciver:"Johnathan Smith",company:"LuxeSilk Pillow",status:"Delivered",date:"11-7-2014"},
        {id:5485,type:"Light",quantity:8,reciver:"ohnathan Smith",company:"AquaBloom Water",status:"Pending",date:"11-7-2014"},
        {id:5488,type:"Light",quantity:8,reciver:"Michael Roberts",company:"PureHarvest Snacks",status:"Pending",date:"11-7-2014"},
        {id:5485,type:"Bedding",quantity:4,reciver:"Johnathan Smith",company:"SmartSphere Tracker",status:"Delivered",date:"11-7-2014"},
        {id:5488,type:"Lighting",quantity:6,reciver:"AquaBloom Water",company:"AquaBloom Water",status:"Queued",date:"11-7-2014"},
        {id:5485,type:"Water",quantity:5,reciver:"Michael Roberts",company:"LuxeSilk Pillow",status:"Pending",date:"11-7-2014"},
        {id:5485,type:"Bedding",quantity:2,reciver:"Emily Parker",company:"AquaBloom Water",status:"Delivered",date:"11-7-2014"},
        {id:5488,type:"Water Bottle",quantity:1,reciver:"Michael Roberts",company:"LuxeSilk Pillow",status:"Queued",date:"11-7-2014"},
    ]
  return (
    <div className='mb-4'>
        <div className='card-container card-container-2'>
            {cardData.map((item)=>(
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
                <select id="status-select" className="dropdown">
                <option value="">Select</option>
                </select>
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
                    placeholder="Date Range"
                    value={dateRange}
                    onFocus={(e) => e.target.type = "date"}
                    onBlur={(e) => e.target.type = "text"}
                    onChange={handleDateRangeChange}
                />
                </div>
            </div>
            <div className='create-sample'>
                <button>
                    Create Sample
                </button>
            </div>

            {/* Export Button */}
            <button className="export-button">Export</button>
        </div>
        <div className="table-container">
            <table className="data-table">
                <thead>
                <tr>
                    <th>
                    <input type="checkbox" />
                    </th>
                    {headers.map(item=>(
                        <th>{item}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((item)=>(
                    <tr key={item.id+item.reciver}>
                        <td>
                        <input type="checkbox" />
                        </td>
                        <td>{item.reciver}</td>
                        <td>{item.type}</td>
                        <td>{item.quantity}</td>
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
  )
}

export default Outgoing
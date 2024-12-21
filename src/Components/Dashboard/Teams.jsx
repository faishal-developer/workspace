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

const Teams = () => {
    const [dateRange, setDateRange] = useState("");

    const handleDateRangeChange = (e) => {
        setDateRange(e.target.value);
    };

    let cardData=[
        {icon:worker,title:"Total Teams",total:8,bg:"ash"},
        {icon:boy,title:"Total User",total:108,bg:"ash2"},
        {icon:kham,title:"Total Incoming",total:108,bg:"greenish"},
        {icon:redWarn,title:"Outgoing Pending",total:5,bg:"redish"},
    ]

    
    const headers=['Team Name','Team Description','Member Count']
    
    const data=[
        {desc:"EcoGlow Lamp",name:"Accounts",count:10},
        {desc:"FreshFusion Bottle",name:"HR",count:17},
        {desc:"LuxeSilk Pillow",name:"Accounts",count:10},
        {desc:"AquaBloom Water",name:"HR",count:22},
        {desc:"PureHarvest Snacks",name:"Accounts",count:17},
        {desc:"SmartSphere Tracker",name:"HR",count:10},
        {desc:"AquaBloom Water",name:"Accounts",count:2},
        {desc:"LuxeSilk Pillow",name:"HR",count:22},
        {desc:"AquaBloom Water",name:"Accounts",count:10},
        {desc:"LuxeSilk Pillow",name:"Accounts",count:22},
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
        <div className="table-container">
            <table className="data-table">
                <thead>
                <tr>
                    {headers.map(item=>(
                        <th>{item}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((item)=>(
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
  )
}

export default Teams
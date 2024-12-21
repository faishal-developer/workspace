import React from 'react'

const Card = ({icon,title,total,bg}) => {
  return (
    <div className="total-sample-card">
      <div className={`icon-container ${bg}`}>
        <img
          src={icon} // Replace with actual icon URL or import
          alt="Sample Icon"
        />
      </div>
      <div className="details">
        <span className="title">{title}</span>
        <span className="count">{total}</span>
      </div>
    </div>
  )
}

export default Card
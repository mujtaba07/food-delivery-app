import React from 'react'

const RestaurantCard = (props) => {
    const {cardData} = props
    const {info} = cardData
    const {cfo,name,sla,avgRating,costForTwo} = info

  return (
    <div className="res-card">
      <div className="card-image">
      
      <img alt="res-logo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.cloudinaryImageId}`} />
      </div>
      <div className="desc">
        <h3>{name}</h3>
        <span className="rating">{avgRating}</span>
      </div>
      <div className="res-type">
        <span>{Array.isArray(info.cuisines) ? info.cuisines.map((e) => e).join(', ') : 'N/A'}</span>
        <span className="">{cfo ? cfo.text : costForTwo}</span>
      </div>
      <div className="deliver-time">
        <span>{sla ? `${sla.deliveryTime} mins` : 'N/A'}</span>
      </div>
    </div>
  );
};

export default RestaurantCard
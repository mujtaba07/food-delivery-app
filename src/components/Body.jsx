import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import useGetRestaurants from "../utils/useGetRestaurants";
const Body = () => {
  
  let [inputText, setInputText] = useState("");
  
  const [restaurantList, filteredRestaurant, setFilteredRestaurant] = useGetRestaurants();
  
  let getTopRatedRestaurants = () => {
    let topRatedRestaurants = restaurantList?.filter((restaurant) => {
      return restaurant?.info?.avgRating > 4.4;
    });
    setFilteredRestaurant(topRatedRestaurants);
  };

  const onlineStatus = useOnlineStatus();
  
  if(onlineStatus === false){
    return <h1>You Are Currently Offline, Kindly Check your internet connection</h1>
  }
  return restaurantList.length === 0 ?<Shimmer/> :  (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-input" value={inputText} onChange={e=>setInputText(e.target.value)} placeholder="Search for restaurants" />
          <button className="search-btn" onClick={()=>{
            let searchedRestaurants = restaurantList?.filter((restaurant) => {
              return restaurant?.info?.name?.toLowerCase().includes(inputText.toLowerCase());
            });
            setFilteredRestaurant(searchedRestaurants);
          }}>Search</button>
        </div>
        <button onClick={getTopRatedRestaurants} className="filter-btn">
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link  key={restaurant?.info?.id}
                   to={"/restaurants/"+ restaurant?.info?.id}>
                  <RestaurantCard cardData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

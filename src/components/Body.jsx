import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  
  
  let [restaurantList, setRestaurantList] = useState([]);
  let [filteredRestaurant, setFilteredRestaurant] = useState([]);
  let [inputText, setInputText] = useState("");
  
  useEffect(() => {
    console.log("useEffect");
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const targetUrl = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';

      let response = await fetch(proxyUrl + targetUrl, {
        method: 'GET',
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        let data = await response.json();
        setRestaurantList(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
        setFilteredRestaurant(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []);
      } else {
        throw new Error('Response is not JSON');
      }
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };
  
  let getTopRatedRestaurants = () => {
    let topRatedRestaurants = restaurantList?.filter((restaurant) => {
      return restaurant?.info?.avgRating > 4.4;
    });
    setFilteredRestaurant(topRatedRestaurants);
  };

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
            <RestaurantCard key={restaurant?.info?.id} cardData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;

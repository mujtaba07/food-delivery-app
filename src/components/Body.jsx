import React from "react";
import RestaurantCard , {withPromotedLabel} from "./RestaurantCard";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import useGetRestaurants from "../utils/useGetRestaurants";
import UserContext from "../utils/UserContext";
const Body = () => {
  
  let [inputText, setInputText] = useState("");
  
  const [restaurantList, filteredRestaurant, setFilteredRestaurant] = useGetRestaurants();
  
  let getTopRatedRestaurants = () => {
    let topRatedRestaurants = restaurantList?.filter((restaurant) => {
      return restaurant?.info?.avgRating > 4.4;
    });
    setFilteredRestaurant(topRatedRestaurants);
  };
  
  let PromotedRestaurant = withPromotedLabel(RestaurantCard);
  const onlineStatus = useOnlineStatus();
  
  if(onlineStatus === false){
    return <h1>You Are Currently Offline, Kindly Check your internet connection</h1>
  }
  const {LoggedInUser,setUsername} = useContext(UserContext);
  return restaurantList.length === 0 ?<Shimmer/> :  (
    <div className="body">
      <div className="filter max-w-[100%] flex justify-center items-center gap-5 p-5">
        <div className="search flex gap-2 items-center ">
          <input type="text" className="w-[500px] search-input border border-solid focus:outline-none p-2 focus:outline-hidden font-normal rounded-md" 
          value={inputText}
          onChange={e=>setInputText(e.target.value)} 
          placeholder="Search for restaurants" />
          <button className="search-btn px-4 py-2 rounded-md bg-green-500 font-semibold hover:bg-green-600 transition-all duration-300 ease-in-out" onClick={()=>{
            let searchedRestaurants = restaurantList?.filter((restaurant) => {
              return restaurant?.info?.name?.toLowerCase().includes(inputText.toLowerCase());
            });
            setFilteredRestaurant(searchedRestaurants);
          }}>Search</button>
        </div>
        <button onClick={getTopRatedRestaurants} className="filter-btn bg-blue-200 py-2 px-4 rounded-md font-semibold hover:bg-blue-400 transition-all duration-300 ease-in-out">
          Top Rated Restaurants
        </button>
        
        <input type="text" className="w-[500px] search-input border border-solid focus:outline-none p-2 focus:outline-hidden font-normal rounded-md" 
          value={LoggedInUser}
          onChange={(e)=>setUsername(e.target.value)}
           />
      </div>
      <div className="m-[calc(7%+52px)] restaurant-container grid grid-cols-5 gap-8 my-10 p-0 items-start">
        {filteredRestaurant.map((restaurant) => {
          return (
            <Link className="items-start w-full"  key={restaurant?.info?.id}
                   to={"/restaurants/"+ restaurant?.info?.id}>
                  {restaurant?.data?.promoted ? <PromotedRestaurant cardData={restaurant} /> : <RestaurantCard cardData={restaurant} />}
                 {/* <RestaurantCard cardData={restaurant} /> */}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

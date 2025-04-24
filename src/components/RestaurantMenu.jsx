import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  let { resId } = useParams();
  
 const resInfo = useRestaurantMenu(resId);
  if (!resInfo) return <Shimmer />;

  const {
    name,
    areaName,
    costForTwoMessage,
    sla,
    cuisines,
    avgRating,
    totalRatingsString,
    cloudinaryImageId,
  } = resInfo?.cards[2]?.card?.card?.info;
                      
  const itemCard = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
   || resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards 
   || resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards 
   || resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card?.card?.itemCards;
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    
  const cardCategories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category)=>{
    // console.log(category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
     return category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  })
  
  // console.log(cardCategories)
  
  return (
    <div className="max-w-[800px] min-h-[800px] my-5 mx-auto">
      <div className="res-details-wrapper px-4 pb-5 rounded-[20px] border border-[rgba(2,6,12,0.15)] bg-white shadow-[rgba(0,0,0,0.04)_0px_8px_16px_0px] ">
      <h1 className="text-2xl my-[0.67em] font-bold">{name} </h1>
        <p className="res-details font-bold ">
          {avgRating} ({totalRatingsString}) . {costForTwoMessage}
        </p>
        <p className="cuisines text-[rgb(255,82,0)] underline font-semibold"> {cuisines.join(", ")}</p>
        <p className="font-semibold">
          Outlet : <span className="location">{areaName}</span>
        </p>
        <p className="font-bold"> {sla.slaString}</p>
      </div>
      <h2 className="menu my-4 items-center mx-auto text-center font-sans text-[13px] leading-[17px] tracking-[-0.33px] text-[rgba(2,6,12,0.6)]">Menu</h2>
      <div className="display-menu my-10">
          {cardCategories?.map((category,index) => (
            <RestaurantCategory key= {category.card.card.categoryId} 
            item = {category}
            showItems = {index  === showIndex ? true : false} 
            setShowIndex={()=>{setShowIndex(index)}}/>
          ))
          }
      </div>
    </div>
  );
};

export default RestaurantMenu;

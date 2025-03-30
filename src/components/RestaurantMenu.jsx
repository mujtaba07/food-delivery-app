import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  let { resId } = useParams();
  console.log(resId);
  
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
                      
  const itemCard =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards || resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards || resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card?.card?.itemCards;
  console.log(itemCard);
  return (
    <div className="max-w-[800px] min-h-[800px] my-5 mx-auto">
      <div className="res-details-wrapper px-4 pb-4 rounded-bl-[36px] rounded-br-[36px] rounded-[20px] border border-[rgba(2,6,12,0.15)] bg-white shadow-[rgba(0,0,0,0.04)_0px_8px_16px_0px] ">
      <h1 className="text-2xl my-[0.67em] font-bold">{name} </h1>
        <p className="res-details ">
          {avgRating} ({totalRatingsString}) . {costForTwoMessage}
        </p>
        <p className="cuisines"> {cuisines.join(", ")}</p>
        <p>
          Outlet : <span className="location">{areaName}</span>
        </p>
        <p>Delivery in - {sla.slaString}</p>
      </div>
      <h2 className="menu my-4 items-center mx-auto text-center font-sans text-[13px] leading-[17px] tracking-[-0.33px] text-[rgba(2,6,12,0.6)] mx-[4px] tracking-[4px] ">Menu</h2>
      <div className="display-menu my-10">
        <h3 className="font-semibold my-2">Recommended ({itemCard?.length || ""})</h3>
        <ul>
          {itemCard?.map((item) => (
            <li className="flex w-full justify-between border-t-[1px] border-grey py-10 px-0 items-center" key={item.card.info.id}>
              <div className="font-sans font-bold text-[18px] leading-[22px] tracking-[-0.45px] text-[rgba(2,6,12,0.75)]">
                {item.card.info.name} - Rs.
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
                <p className="dish-item-description mt-5 font-sans font-normal text-[16px] leading-[22px] tracking-[-0.45px] text-[rgba(2,6,12,0.75)] ">
                  {item.card.info.description}
                </p>
              </div>
              <div>
                <img
                  className="dish-image max-w-[156px] h-[144px] rounded-[12px]"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
                  alt=""
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;

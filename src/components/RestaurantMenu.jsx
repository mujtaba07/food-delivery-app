import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  let { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      // const targetUrl = `${MENU_API}${resId}`;
      const targetUrl = MENU_API + resId;
      let response = await fetch(proxyUrl + targetUrl, {
        method: "GET",
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        let json = await response.json();
        setResInfo(json.data);
      } else {
        throw new Error("Response is not JSON");
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  console.log(resInfo);

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
                      
  const itemCard =resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
  console.log(itemCard);
  return (
    <div className="container">
      <h1>{name} </h1>
      <div className="res-details-wrapper">
        <p className="res-details">
          {avgRating} ({totalRatingsString}) . {costForTwoMessage}
        </p>
        <p className="cuisines"> {cuisines.join(", ")}</p>
        <p>
          Outlet : <span className="location">{areaName}</span>
        </p>
        <p>Delivery in - {sla.slaString}</p>
      </div>
      <h2 className="menu">Menu</h2>
      <div className="display-menu">
        <h3>Recommended ({itemCard?.length || ""})</h3>
        <ul>
          {itemCard?.map((item) => (
            <li key={item.card.info.id}>
              <div>
                {item.card.info.name} - Rs.
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
                <p className="dish-item-description">
                  {item.card.info.description}
                </p>
              </div>
              <div>
                <img
                  className="dish-image"
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

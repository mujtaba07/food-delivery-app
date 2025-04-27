import { useState,useEffect } from "react";
const useGetRestaurants = () => {
    
  let [restaurantList, setRestaurantList] = useState([]);
  let [filteredRestaurant, setFilteredRestaurant] = useState([]);
    useEffect(() => {
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


      return  [restaurantList,filteredRestaurant,setFilteredRestaurant];
}

export default useGetRestaurants;
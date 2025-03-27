import { useEffect, useState } from 'react'
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {

  const [resInfo, setResInfo] = useState(null);
  console.log(resId);
    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
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
      
      return resInfo;
    }

export default useRestaurantMenu;
import { useContext } from "react"
import UserContext from "../utils/UserContext"

const RestaurantCard = (props) => {
    const {cardData} = props
    const {info} = cardData
    const {cfo,name,sla,avgRating,costForTwo} = info
    const {LoggedInUser} = useContext(UserContext)
  return (
    <div className="grid transition duration-[50ms] cursor-pointer gap-3 grid-flow-row justify-items-stretch items-center p-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.01]">
      <div className="card-image">   
      <img alt="object-cover rounded-2xl" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${info.cloudinaryImageId}`} />
      </div>
      <div className="flex flex-col w-full gap-1 text-slate-800 font-mono text-start p-2">
      <div className="desc flex justify-between size-full items-center font-size-xl font-extrabold text-slate-900">
        <h3>{name}</h3>
        <span className="rating bg-green-800 text-xs text-white px-2 py-1 rounded-lg font-semibold">{avgRating}</span>
      </div>
      <div className="res-type flex justify-between  text-xs">
        <span className="max-w-50">{Array.isArray(info.cuisines) ? info.cuisines.map((e) => e).join(', ') : 'N/A'}</span>
        <span className="">{cfo ? cfo.text : costForTwo}</span>
      </div>
      <div className="deliver-time">
        <span className="font-extrabold">{sla ? `${sla.deliveryTime} mins` : 'N/A'}</span>
      </div>
      <div>User:{LoggedInUser}</div>
    </div>
   </div>
  );
}
// example of higher order component
  export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
      return(
        <div>
          <label>Promoted</label>
          <RestaurantCard {...props} />
        </div>
      )
    }
};

export default RestaurantCard;
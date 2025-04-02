import ItemsList from './ItemsList'
import { useState } from 'react';
const RestaurantCategory = ({item}) => {
    const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
        console.log("clicked")
        setShowItems(!showItems);
    }
  return (
        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-400 ease-in-out my-4" id="">
            <div className="">
                    <div className='font-bold my-2 text-lg' onClick={handleClick}>
                        <span>
                            {item.card.card.title} ({item?.card?.card?.itemCards?.length || ""})
                        </span>
                    </div>
            </div>
            { showItems && <ItemsList item={item.card.card.itemCards} />}
        </div>
  )
}

export default RestaurantCategory
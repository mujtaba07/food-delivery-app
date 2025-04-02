const ItemsList = ({ item }) => {
    return (
      <div>
        {item?.map((eachItem) => (
          <div key={eachItem.card.info.id} className="dish-item-wrapper my-10 flex gap-4 items-center justify-between">
            <div className="max-w-[77%]">
              <h4 className="font-bold">{eachItem.card.info.name}</h4>
              <span className="dish-item-price font-bold">
                Rs. {eachItem.card.info.price / 100 || eachItem.card.info.defaultPrice / 100}
              </span>
              <div className="text-[rgba(2,6,12,0.6)] leading-[21px] tracking-[-0.4px] text-[16px] font-gilroy mt-2">{eachItem?.card?.info?.description}</div>
            </div>
            <div className="relative">
                <button className="bg-white border font-semibold text-[18px] text-[rgb(27,166,114)] text-[18px] leading-[22px] tracking-[-0.45px] text-md rounded-md py-1 px-6 absolute left-9 -bottom-3">Add+</button>
              <img className=" max-h-[174px] max-w-[156px] object-cover rounded-lg"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${eachItem.card.info.imageId}`}
                alt={eachItem.card.info.name}
              />
            </div>
          </div>
        ))}
      </div>
    );
  };
  

export default ItemsList
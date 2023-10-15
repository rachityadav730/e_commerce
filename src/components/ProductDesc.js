import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/gaytriSlice";
import { ToastContainer, toast } from 'react-toastify';

const ProductDesc = ({product}) => {


  const dispatch = useDispatch()
  const [qty,setQty] = useState(1)
  const [details, setDetails] = useState({});
  const location = useLocation();

  useEffect(() => {
    setDetails(location.state.item);
  }, []);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div className="w-2/5 relative">
          <img
            className="w-full h-[550px] object-cover"
            src={details.image}
            alt="productImg"
          />
          <div className="absolute top-4 right-0">
            {details.isNew && (
              <p className="bg-black text-white font-semibold font-titleFont px-8 py-1">
                Sale
              </p>
            )}
          </div>
        </div>
        <div className="w-3/5 justify-center gap-12">
          <div>
            <h2 className="text-4x1 font-semibold">{details.title}</h2>
            <div className="flex items-center gap-4 mt-3">
              <p className="line-through font-base text-grey-500">
                {details.oldPrice}
              </p>
              <p className="text-2x1 font-medium text-grey-900">
                {details.price}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 text-base mt-10">
            <div className="flex">
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
            </div>
            <p className="text-xs text-grey-500">(1 Customer review)</p>
          </div>
          <p className="text-xs text-grey-500 mt-10">{details.description}</p>
          <div className="flex gap-4 mt-10">
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4text-sm font-semibold">
                <button onClick={()=>setQty(qty === 1 ? 1 : qty - 1)} className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-grey-700 hover:text-white cursor-pointer duration-300 hover:bg-black">
                  -
                </button>
                <span>{qty}</span>
                <button onClick={()=>setQty(qty + 1)} className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-grey-700 hover:text-white cursor-pointer duration-300 hover:bg-black">
                  +
                </button>
              </div>
            </div>
            <button 
            
            onClick={()=>dispatch(addToCart({

              _id: details._id,
              title: details.title,
              image: details.image,
              price: details.price,
              quantity: qty,
              description: details.description,
            })) & toast.success(`${details.title} is added`) } className="bg-black text-white py-3 px-6 active:bg-gray-800">
              add to cart
            </button>
          </div>

          <p className="text-base text-gray-500 mt-5">
            Catergory:
            <span className="font-medium capitalize">{details.category}</span>
          </p>
          </div>
      </div>
      <ToastContainer
            position='top-left'
            autoClose = {2000}
            hideProgressBar ={false}
            newestOnTop ={false}
            closeOnClick
            rtl = {false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme = "dark"
            
            />
    </div>
  );
};

export default ProductDesc;

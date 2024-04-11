"use client";

import productData from "@/data/productData.json";
import { useScreenSize } from "@/hooks/useScreenSize";
import { useRouter } from "next/navigation";

const ShopByCategoryPage: React.FC = () => {
  const router = useRouter();
  const isLargeScreen = useScreenSize();

  const categoryButton = (category : string) => {
    router.push(`/category/${category}`)
  }

  return (
    <div className="sm:h-[60rem] h-[46rem] w-full dark:bg-black relative flex flex-col overflow-hidden mb-10">
      <hr className="my-4 pb-2" />

      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 px-7">
        <h3 className="mb-2 sm:mb-0 border-b-2 border-gray-300 pb-2  bg-gradient-to-b">
          Shop By Category :-
        </h3>
        <button className="shadow-sm rounded-full px-4 py-2 bg-gray-200 text-gray-800 hover:bg-green-700 transition duration-200 sm:px-4 sm:py-1">
          See All
        </button>
      </div>

      {/* Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 lg:gap-14 m-14 relative">
        <button  
        onClick={() => categoryButton('pain-relief')}
        className="shadow-[inset_0_0_0_2px_#616467] px-6 py-2 sm:px-12 sm:py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-green-700 hover:text-white dark:text-neutral-200 flex items-center gap-8 transition duration-200">
          <img src="/categoryImages/sick.png" alt="sick" className="w-8 h-7" />
          PAIN RELIEF
        </button>

        <button
        onClick={() => categoryButton('allergy')} 
        className="shadow-[inset_0_0_0_2px_#616467] px-6 py-2 sm:px-12 sm:py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-green-700 hover:text-white dark:text-neutral-200 flex items-center gap-8 transition duration-200">
          <img
            src="/categoryImages/allergy.png"
            alt="allergy"
            className="w-8 h-7"
          />
          Allergy
        </button>

        <button
        onClick={() => categoryButton('digestive')} 
        className="shadow-[inset_0_0_0_2px_#616467] px-6 py-2 sm:px-12 sm:py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-green-700 hover:text-white dark:text-neutral-200 flex items-center gap-8 transition duration-200">
          <img
            src="/categoryImages/digestive.png"
            alt="digestive health"
            className="w-8 h-7"
          />
          DIGESTIVE
        </button>

        <button 
        onClick={() => categoryButton('skincare')} 
        className="shadow-[inset_0_0_0_2px_#616467] px-6 py-2 sm:px-12 sm:py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-green-700 hover:text-white dark:text-neutral-200 flex items-center gap-8 transition duration-200">
          <img
            src="/categoryImages/skincare.png"
            alt="skincare"
            className="w-8 h-7"
          />
          SKINCARE
        </button>
      </div>

      {/* Product Cards */}
      <div >
        <h3 className="flex flex-col sm:flex-row justify-between items-center mb-4 px-7  sm:mb-0 border-b-2 border-gray-300 pb-2  bg-gradient-to-b">
          Explore Popular Products :-
        </h3>

        {isLargeScreen ? (
          // Larger Screens (Grid Layout)
          <div className="mx-14 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-8 lg:gap-12 mx-14 overflow-y-auto">
              {productData.slice(0, 8).map((product) => (
                <div
                  key={product.id}
                  className="bg-green-200 p-4 rounded-lg shadow-md h-auto"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 object-cover mb-4"
                  />
                  <h4 className="text-lg font-semibold text-green-900">{product.name}</h4>
                  <p className="text-green-700">${product.price}</p>
                </div>
              ))}
            </div>
            
          </div>
        ) : (
          // Smaller Screens (Horizontal Swipe Layout)
          <div className="w-full">
                  
          <div className="overflow-x-auto flex flex-nowrap w-full">
              {productData.map((product) => (
                <div
                  key={product.id}
                  className="flex-none h-auto bg-green-200 p-4 rounded-lg shadow-md mr-4"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-24 object-cover mb-2"
                  />
                  <h4 className="text-sm font-semibold text-green-900">{product.name}</h4>
                  <p className="text-gray-700 text-sm">${product.price}</p>
                </div>
              ))}
            </div> 
            <div className="mt-1 m text-center text-green-300 p-4 rounded-lg shadow-md">
    {/* Content of the additional div */}
    <p>More ➡️</p>
  </div>
          </div>
        )}
        
      </div>
      
    </div>
  );
};

export default ShopByCategoryPage;

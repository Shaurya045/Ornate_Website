import { useState } from "react";
import { commercialPhotos } from "../assets/asset";

function PortfolioCommercial() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };
  return (
    <>
      {/* Image Grid */}
      <div className="grid gap-[0px] grid-cols-[repeat(3,1fr)] grid-rows-[repeat(10,1fr)] h-[200vh] max-[1024px]:h-[110vh] w-full text-white px-[100px] max-[1024px]:px-[20px] pt-[60px] pb-[150px] ">
        <div
          className="bg-black col-span-1 row-span-2 duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(commercialPhotos.Commercial1)}
        >
          <img
            className="object-cover w-full h-full   "
            src={commercialPhotos.Commercial1}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-4 duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(commercialPhotos.Commercial2)}
        >
          <img
            className="object-cover w-full h-full "
            src={commercialPhotos.Commercial2}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-2 duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(commercialPhotos.Commercial3)}
        >
          <img
            className="object-cover w-full h-full "
            src={commercialPhotos.Commercial3}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-3 duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(commercialPhotos.Commercial4)}
        >
          <img
            className="object-cover w-full h-full"
            src={commercialPhotos.Commercial4}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-2 col-start-2  duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(commercialPhotos.Commercial5)}
        >
          <img
            className="object-cover w-full h-full"
            src={commercialPhotos.Commercial5}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-3 col-start-3 row-start-3 duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(commercialPhotos.Commercial6)}
        >
          <img
            className="object-cover w-full h-full"
            src={commercialPhotos.Commercial6}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-3 duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(commercialPhotos.Commercial7)}
        >
          <img
            className="object-cover w-full h-full"
            src={commercialPhotos.Commercial7}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-2 col-start-2 duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(commercialPhotos.Commercial8)}
        >
          <img
            className="object-cover w-full h-full"
            src={commercialPhotos.Commercial8}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-3 col-start-3 row-start-6 duration-[0.5s] hover:scale-[1.05]"
          onClick={() => openImage(commercialPhotos.Commercial9)}
        >
          <img
            className="object-cover w-full h-full"
            src={commercialPhotos.Commercial9}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-2 duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(commercialPhotos.Commercial10)}
        >
          <img
            className="object-cover w-full h-full"
            src={commercialPhotos.Commercial10}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-2 duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(commercialPhotos.Commercial11)}
        >
          <img
            className="object-cover w-full h-full"
            src={commercialPhotos.Commercial11}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-2 duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(commercialPhotos.Commercial12)}
        >
          <img
            className="object-cover w-full h-full"
            src={commercialPhotos.Commercial12}
            loading="lazy"
            alt=""
          />
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <img
            src={selectedImage}
            className="max-w-[90%] max-h-[90%] object-contain"
            alt="Enlarged"
          />
          <button
            className="absolute top-4 right-4 text-white text-4xl"
            onClick={closeImage}
          >
            &times;
          </button>
        </div>
      )}
    </>
  );
}

export default PortfolioCommercial;

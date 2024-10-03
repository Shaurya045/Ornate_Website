import React, { useState } from "react";
import { images, bridalPhotos } from "../assets/asset";

function PortfolioBridal() {
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
          onClick={() => openImage(bridalPhotos.Bridal2)}
        >
          <img
            className="object-cover w-full h-full   "
            src={bridalPhotos.Bridal2}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-4 duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(bridalPhotos.Bridal1)}
        >
          <img
            className="object-cover w-full h-full "
            src={bridalPhotos.Bridal1}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-2 duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(bridalPhotos.Bridal3)}
        >
          <img
            className="object-cover w-full h-full "
            src={bridalPhotos.Bridal3}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-3 duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(bridalPhotos.Bridal4)}
        >
          <img
            className="object-cover w-full h-full"
            src={bridalPhotos.Bridal4}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-2 col-start-2  duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(bridalPhotos.Bridal5)}
        >
          <img
            className="object-cover w-full h-full"
            src={bridalPhotos.Bridal5}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-3 col-start-3 row-start-3 duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(bridalPhotos.Bridal8)}
        >
          <img
            className="object-cover w-full h-full"
            src={bridalPhotos.Bridal8}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-3 duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(bridalPhotos.Bridal6)}
        >
          <img
            className="object-cover w-full h-full"
            src={bridalPhotos.Bridal6}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-2 col-start-2 duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(bridalPhotos.Bridal7)}
        >
          <img
            className="object-cover w-full h-full"
            src={bridalPhotos.Bridal7}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-4 col-start-3 row-start-6 duration-[0.5s] hover:scale-[1.05]"
          onClick={() => openImage(bridalPhotos.Bridal9)}
        >
          <img
            className="object-cover w-full h-full"
            src={bridalPhotos.Bridal9}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-2 duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(images.bridal10)}
        >
          <img
            className="object-cover w-full h-full"
            src={images.bridal10}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-2 duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(images.bridal11)}
        >
          <img
            className="object-cover w-full h-full"
            src={images.bridal11}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-1 duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(images.bridal12)}
        >
          <img
            className="object-cover w-full h-full"
            src={images.bridal12}
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

export default PortfolioBridal;

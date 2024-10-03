import React, { useState } from "react";
import { images, photoshootPhotos } from "../assets/asset";

function PortfolioPhoto() {
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
      <div className="grid gap-[0px] grid-cols-[repeat(3,1fr)] grid-rows-[repeat(10,1fr)] h-[250vh] max-[1024px]:h-[110vh] w-full text-white px-[100px] max-[1024px]:px-[20px] pt-[60px] pb-[150px] ">
        <div
          className="bg-black col-span-1 row-span-2 duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(photoshootPhotos.Photoshoot1)}
        >
          <img
            className="object-cover w-full h-full   "
            src={photoshootPhotos.Photoshoot1}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-4 duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(photoshootPhotos.Photoshoot2)}
        >
          <img
            className="object-cover w-full h-full "
            src={photoshootPhotos.Photoshoot2}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-2 duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(photoshootPhotos.Photoshoot3)}
        >
          <img
            className="object-cover w-full h-full "
            src={photoshootPhotos.Photoshoot3}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-3 duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(photoshootPhotos.Photoshoot4)}
        >
          <img
            className="object-cover w-full h-full"
            src={photoshootPhotos.Photoshoot4}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-2 col-start-2  duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(photoshootPhotos.Photoshoot5)}
        >
          <img
            className="object-cover w-full h-full"
            src={photoshootPhotos.Photoshoot5}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-3 col-start-3 row-start-3 duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(photoshootPhotos.Photoshoot6)}
        >
          <img
            className="object-cover w-full h-full"
            src={photoshootPhotos.Photoshoot6}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-3 duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(photoshootPhotos.Photoshoot7)}
        >
          <img
            className="object-cover w-full h-full"
            src={photoshootPhotos.Photoshoot7}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-2 col-start-2 duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(photoshootPhotos.Photoshoot8)}
        >
          <img
            className="object-cover w-full h-full"
            src={photoshootPhotos.Photoshoot8}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-4 col-start-3 row-start-6 duration-[0.5s] hover:scale-[1.05]"
          onClick={() => openImage(photoshootPhotos.Photoshoot9)}
        >
          <img
            className="object-cover w-full h-full"
            src={photoshootPhotos.Photoshoot9}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-2 duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(photoshootPhotos.Photoshoot10)}
        >
          <img
            className="object-cover w-full h-full"
            src={photoshootPhotos.Photoshoot10}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-2 duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(photoshootPhotos.Photoshoot11)}
        >
          <img
            className="object-cover w-full h-full"
            src={photoshootPhotos.Photoshoot11}
            loading="lazy"
            alt=""
          />
        </div>
        <div
          className="bg-black col-span-1 row-span-1 duration-[0.5s] hover:scale-[1.05] "
          onClick={() => openImage(photoshootPhotos.Photoshoot12)}
        >
          <img
            className="object-cover w-full h-full"
            src={photoshootPhotos.Photoshoot12}
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

export default PortfolioPhoto;

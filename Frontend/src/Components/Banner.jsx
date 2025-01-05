import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DiscountBanner() {
  const [currentOffer, setCurrentOffer] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentOffer((prev) => (prev === 0 ? 1 : 0));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-16 overflow-hidden bg-[#f5d0c5]/20">
      {currentOffer === 0 ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[#f5d0c5] to-[#b68973] transition-opacity duration-500 opacity-100">
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <span className="inline-block animate-pulse size-3 rounded-full bg-yellow-400" />
            </div>
            <p className="text-center font-semibold text-lg sm:text-xl text-[#4a3427]">
              HEAVY DISCOUNT! 25% OFF on{" "}
              <Link to="/services" className="underline hover:text-[#b68973]">
                Bridal Makeup
              </Link>
            </p>
            <div className="hidden sm:block">
              <span className="inline-block animate-pulse size-3 rounded-full bg-yellow-400" />
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[#b68973] to-[#f5d0c5] transition-opacity duration-500 opacity-100">
          <div className="flex items-center gap-4">
            <div className="hidden sm:block">
              <span className="inline-block animate-pulse size-3 rounded-full bg-yellow-400" />
            </div>
            <p className="text-center font-semibold text-lg sm:text-xl text-[#4a3427]">
              SPECIAL OFFER! 30% OFF on{" "}
              <Link
                to="/services/training"
                className="underline hover:text-[#b68973]"
              >
                Student Admission
              </Link>
            </p>
            <div className="hidden sm:block">
              <span className="inline-block animate-pulse size-3 rounded-full bg-yellow-400" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ServiceDiscountBanner() {
  return (
    <div className="relative h-16 overflow-hidden bg-[#f5d0c5]/20">
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-[#f5d0c5] to-[#b68973]">
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <span className="inline-block animate-pulse size-3 rounded-full bg-yellow-400" />
          </div>
          <p className="text-center font-semibold text-lg sm:text-xl text-[#4a3427]">
            SPECIAL OFFER! Up to 25% OFF on{" "}
            <span
              className="underline hover:text-[#b68973]"
            >
              HD Airbrush Bridal Makeup
            </span>
          </p>
          <div className="hidden sm:block">
            <span className="inline-block animate-pulse size-3 rounded-full bg-yellow-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

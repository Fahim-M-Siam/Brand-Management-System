/* eslint-disable react/prop-types */
// @ts-nocheck
import BrandCard from "../BrandCard/BrandCard";

const Brands = ({ brands }) => {
  return (
    <div className="space-y-4 md:space-y-0 lg:space-y-0 mt-20 mb-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-0 md:gap-4 lg:gap-8">
      {brands?.map((brand) => (
        <BrandCard key={brand.id} brand={brand}></BrandCard>
      ))}
    </div>
  );
};

export default Brands;

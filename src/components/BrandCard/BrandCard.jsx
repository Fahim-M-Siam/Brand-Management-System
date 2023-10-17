/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// @ts-nocheck
const BrandCard = ({ brand }) => {
  const { id, Name, Image } = brand;
  return (
    <div className="card card-compact shadow-xl">
      <figure className="w-full">
        <img className="w-full h-[200px]" src={Image} alt={Name} />
      </figure>
      <div className="card-body bg-gradient-to-r from-[#cc2b5e] to-[#753a88]">
        <h2 className="card-title">{Name}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-outline">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default BrandCard;

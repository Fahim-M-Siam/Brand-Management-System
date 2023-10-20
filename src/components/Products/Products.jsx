// @ts-nocheck
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Products = () => {
  const { Name } = useParams();
  console.log(Name);
  const [products, setProducts] = useState([]);
  const [slider, setSlider] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://speedy-wrench-server-af2lh6y0x-fahim-mohammad-siams-projects.vercel.app/products/${Name}`
    )
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .finally(() => {
        setIsLoading(false);
      });
  }, [Name]);

  useEffect(() => {
    fetch("/adSlider.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const find = data?.find((item) => item.Name == Name);
        setSlider(find);
      });
  }, [Name]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div>
        <h2 className="mt-20 text-center mb-12 text-3xl">Most Reviewed</h2>
        <Slider className="ml-0 lg:ml-6" {...settings}>
          <div>
            <div className="card">
              <img
                className="w-full h-[600px] bg-no-repeat bg-cover"
                src={slider?.slider1}
              />
            </div>
          </div>
          <div>
            <div className="card">
              <img className="w-full h-[600px]" src={slider?.slider2} />
            </div>
          </div>
          <div>
            <div className="card">
              <img className="w-full h-[600px]" src={slider?.slider3} />
            </div>
          </div>
        </Slider>
      </div>
      {isLoading ? (
        <div className="my-64 text-center text-5xl">
          <span className="loading loading-ring loading-xs"></span>
          <span className="loading loading-ring loading-sm"></span>
          <span className="loading loading-ring loading-md"></span>
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : products.length > 0 ? (
        <div>
          <div className="text-3xl font-medium text-center my-14">
            <h2>Products of {Name}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {products?.map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
          </div>
        </div>
      ) : (
        <div className="my-20 text-center">
          <h2 className="text-3xl font-bold">Products are comming soon..</h2>
        </div>
      )}
    </div>
  );
};

export default Products;

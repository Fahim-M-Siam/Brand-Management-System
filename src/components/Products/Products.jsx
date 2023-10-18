// @ts-nocheck
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const { Name } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`http://localhost:5000/products/${Name}`)
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .finally(() => {
        setIsLoading(false);
      });
  }, [Name]);
  // var settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <div>
      {/* slider */}
      {/* <div>
        <Slider className="ml-0 lg:ml-6" {...settings}>
          <div>
            <div className="card">
              <img
                className="w-full md:w-[250px] lg:w-[250px] h-[200px]"
                src="https://i.ibb.co/qxcjHQP/slider1.jpg"
              />
            </div>
            <div className="card-body w-full md:w-[250px] lg:w-[250px] h-[50px] bg-gradient-to-r from-[#cc2b5e] to-[#753a88]">
              <p className="font-medium text-center">BMW -M Series8</p>
            </div>
          </div>
        </Slider>
      </div> */}
      {/* slider */}
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

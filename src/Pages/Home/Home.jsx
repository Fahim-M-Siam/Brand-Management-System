// @ts-nocheck
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Brands from "../../components/Brands/Brands";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// @ts-nocheck
const Home = () => {
  const brands = useLoaderData();
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Banner></Banner>
      <div className="mt-14 lg:mt-28 text-center">
        <h2 className="text-3xl">Brands We Are Working With</h2>
        <Brands brands={brands}></Brands>
      </div>
      <div className="max-w-6xl mx-auto mb-20">
        <div>
          <h2 className="mt-20 text-center mb-12 text-3xl">Find Your Choice</h2>
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
            <div>
              <div className="card">
                <img
                  className="w-full md:w-[250px] lg:w-[250px] h-[200px]"
                  src="https://i.ibb.co/9NHjWVm/slider2.jpg"
                />
              </div>
              <div className="card-body w-full md:w-[250px] lg:w-[250px] h-[50px] bg-gradient-to-r from-[#cc2b5e] to-[#753a88]">
                <p className="font-medium text-center">Marcedes - Maybach</p>
              </div>
            </div>
            <div>
              <div className="card">
                <img
                  className="w-full md:w-[250px] lg:w-[250px] h-[200px]"
                  src="https://i.ibb.co/TWR75LK/slider3.jpg"
                />
              </div>
              <div className="card-body w-full md:w-[250px] lg:w-[250px] h-[50px] bg-gradient-to-r from-[#cc2b5e] to-[#753a88]">
                <p className="font-medium text-center">Ford - Mustang 2018</p>
              </div>
            </div>
            <div>
              <div className="card">
                <img
                  className="w-full md:w-[250px] lg:w-[250px] h-[200px]"
                  src="https://i.ibb.co/WK4VLkz/slider4.jpg"
                />
              </div>
              <div className="card-body w-full md:w-[250px] lg:w-[250px] h-[50px] bg-gradient-to-r from-[#cc2b5e] to-[#753a88]">
                <p className="font-medium text-center">Toyota - Supra 2022</p>
              </div>
            </div>
            <div>
              <div className="card">
                <img
                  className="w-full md:w-[250px] lg:w-[250px] h-[200px]"
                  src="https://i.ibb.co/yf5Ckpr/slider5.jpg"
                />
              </div>
              <div className="card-body w-full md:w-[250px] lg:w-[250px] h-[50px] bg-gradient-to-r from-[#cc2b5e] to-[#753a88]">
                <p className="font-medium text-center">Tesla - ModelX</p>
              </div>
            </div>
            <div>
              <div className="card">
                <img
                  className="w-full md:w-[250px] lg:w-[250px] h-[200px]"
                  src="https://i.ibb.co/sRp38yv/slider6.jpg"
                />
              </div>
              <div className="card-body w-full md:w-[250px] lg:w-[250px] h-[50px] bg-gradient-to-r from-[#cc2b5e] to-[#753a88]">
                <p className="font-medium text-center">Honda - Civic</p>
              </div>
            </div>
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
            <div>
              <div className="card">
                <img
                  className="w-full md:w-[250px] lg:w-[250px] h-[200px]"
                  src="https://i.ibb.co/9NHjWVm/slider2.jpg"
                />
              </div>
              <div className="card-body w-full md:w-[250px] lg:w-[250px] h-[50px] bg-gradient-to-r from-[#cc2b5e] to-[#753a88]">
                <p className="font-medium text-center">Marcedes - Maybach</p>
              </div>
            </div>
          </Slider>
        </div>

        <section className="mt-20">
          <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-3xl mb-5 text-center">
              About SpeedyWrench Automotive Shop
            </h2>
            <div className="flex flex-col md:flex-col lg:flex-row lg:gap-4">
              <div className="w-full md:w-full lg:w-[50%] mt-10">
                <h2 className="text-center text-2xl font-semibold">
                  Your Road to Reliable Auto Care
                </h2>
                <p className="text-xs text-start mt-5 p-5 lg:p-1">
                  Welcome to SpeedyWrench, where we are not just another
                  automotive shop; we are your dependable companions on the road
                  to vehicle excellence. Our journey began with a simple, yet
                  profound mission - to offer a seamless and customer-centric
                  approach to automotive services, and we have been proudly
                  serving our community with top-tier auto solutions for years.
                  Our dedicated team of seasoned technicians is always at the
                  ready to ensure your vehicle operates at its peak, regardless
                  of its make or model. Whether it is the routine maintenance
                  that keeps your engine purring or intricate repairs that
                  demand our utmost precision, we approach every task with a
                  combination of passion and expertise that guarantees your
                  confidence in every mile driven.What sets SpeedyWrench apart
                  is our unwavering dedication to customer satisfaction. We
                  comprehend that our success hinges on your contentment, and we
                  prioritize transparency, open communication, and fair pricing
                  in all of our endeavors. Our experts take the time to explain
                  your vehicles needs and provide service options that cater to
                  both your budget and schedule. It is not just about servicing
                  vehicles; it is about serving you, our valued customer. The
                  SpeedyWrench Experience Choosing SpeedyWrench means selecting
                  a journey that is marked by a seamless, stress-free automotive
                  experience. Our cutting-edge facility is equipped with the
                  latest technology and tools, ensuring that we get the job done
                  right, the first time. While we are hard at work, relax in our
                  comfortable waiting area, enjoy complimentary refreshments, or
                  take advantage of our convenient shuttle service. Community
                  Engagement We are more than just a garage; we are an active
                  part of our local community. SpeedyWrench proudly sponsors
                  local events, participates in charitable initiatives, and
                  supports local organizations because we believe in giving back
                  to the community that has placed its trust in us. Join the
                  SpeedyWrench family today and experience the difference –
                  where we turn wrenches, deliver excellence, and drive
                  satisfaction for every customer who rolls into our garage.
                  Your journey is our passion, and your trust is our greatest
                  reward. At SpeedyWrench, we are not just fixing vehicles; we
                  are nurturing relationships and fostering trust with every
                  service we provide.
                </p>
              </div>
              <div className="w-full md:w-full lg:w-[50%] mt-0 lg:mt-28">
                <img
                  className="w-full"
                  src="https://i.ibb.co/FJsT03J/about.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;

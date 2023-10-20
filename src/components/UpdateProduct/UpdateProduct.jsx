// @ts-nocheck
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

// @ts-nocheck
const UpdateProduct = () => {
  const product = useLoaderData();
  const {
    _id,
    productName,
    brandName,
    type,
    price,
    description,
    rating,
    image,
  } = product;
  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    // inputvalues
    const productName = form.productName.value;
    const brandName = form.brandName.value.toUpperCase();
    const type = form.type.value.toUpperCase();
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const image = form.image.value;

    const updatedProduct = {
      productName,
      brandName,
      type,
      price,
      description,
      rating,
      image,
    };

    // send data to server
    fetch(
      `https://speedy-wrench-server-ag54id2ts-fahim-mohammad-siams-projects.vercel.app/product/${_id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Successfully Updated the Product");
        }
      });
  };
  return (
    <div className="hero min-h-screen bg-[url('https://i.ibb.co/kqmJ5Tn/updatepage.jpg')]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center text-white lg:text-left">
          <h1 className="text-5xl font-bold">Update Your Product</h1>
          <p className="py-6">
            Listing your car has never been easier! Add your vehicle
            effortlessly with our user-friendly platform. Simply provide the
            necessary details, upload images, and you are on your way to finding
            the perfect buyer for your beloved car. Start the selling process
            with simplicity and confidence today.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-10">
          <form onSubmit={handleUpdateProduct} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Product Name</span>
              </label>
              <input
                type="text"
                name="productName"
                placeholder="Product Name"
                defaultValue={productName}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Brand Name</span>
              </label>
              <select
                name="brandName"
                defaultValue={brandName}
                className="py-3 rounded-lg text-[#9CA3AF] pl-3"
              >
                <option value="">Brand Name</option>
                <option value="BMW">BMW</option>
                <option value="MERCEDES">MERCEDES</option>
                <option value="FORD">FORD</option>
                <option value="TOYOTA">TOYOTA</option>
                <option value="TESLA">TESLA</option>
                <option value="HONDA">HONDA</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Type</span>
              </label>
              <select
                name="type"
                defaultValue={type}
                className="py-3 rounded-lg text-[#9CA3AF] pl-3"
              >
                <option value="">Selct you type</option>
                <option value="SUV">SUV</option>
                <option value="HATCHBACK">HATCHBACK</option>
                <option value="COUPE">COUPE</option>
                <option value="SEDAN">SEDAN</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Price</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Description</span>
              </label>
              <input
                type="text"
                name="description"
                defaultValue={description}
                placeholder="Short Description"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Rating</span>
              </label>
              <input
                type="number"
                name="rating"
                defaultValue={rating}
                placeholder="Rating"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Image</span>
              </label>
              <input
                type="text"
                name="image"
                defaultValue={image}
                placeholder="Image URL of IMGBB"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-outline bg-gradient-to-r from-[#cc2b5e] to-[#753a88]"
              >
                Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;

// @ts-nocheck
import toast from "react-hot-toast";

// @ts-nocheck
const AddProduct = () => {
  const handleAddProduct = (event) => {
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

    const newProduct = {
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
      "https://speedy-wrench-server-af2lh6y0x-fahim-mohammad-siams-projects.vercel.app/products",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProduct),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Successfully Added the Product");
        }
      });
  };

  return (
    <div className="hero min-h-screen bg-[url('https://i.ibb.co/LRZ5wP9/add-Product.jpg')]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center text-white lg:text-left">
          <h1 className="text-5xl font-bold">Add Product now!</h1>
          <p className="py-6">
            Listing your car has never been easier! Add your vehicle
            effortlessly with our user-friendly platform. Simply provide the
            necessary details, upload images, and you are on your way to finding
            the perfect buyer for your beloved car. Start the selling process
            with simplicity and confidence today.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-10">
          <form onSubmit={handleAddProduct} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Product Name</span>
              </label>
              <input
                type="text"
                name="productName"
                placeholder="Product Name"
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
                className="py-3 rounded-lg text-[#9CA3AF] pl-3"
              >
                <option value="">Brand Name</option>
                <option value="bmw">BMW</option>
                <option value="marcedes">MARCEDES</option>
                <option value="ford">FORD</option>
                <option value="toyota">TOYOTA</option>
                <option value="tesla">TESLA</option>
                <option value="honda">HONDA</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Type</span>
              </label>
              <select
                name="type"
                className="py-3 rounded-lg text-[#9CA3AF] pl-3"
              >
                <option value="">Selct you type</option>
                <option value="suv">SUV</option>
                <option value="hatchback">HATCHBACK</option>
                <option value="coupe">COUPE</option>
                <option value="sedan">SEDAN</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Price</span>
              </label>
              <input
                type="text"
                name="price"
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
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

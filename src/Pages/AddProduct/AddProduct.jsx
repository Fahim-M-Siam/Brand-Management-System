// @ts-nocheck
const AddProduct = () => {
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
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                type="text"
                placeholder="Product Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Brand Name</span>
              </label>
              <input
                type="text"
                placeholder="Brand Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Type</span>
              </label>
              <input
                type="text"
                placeholder="Suv, Coupe, Hatchback, Sedan.."
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Price</span>
              </label>
              <input
                type="text"
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
                placeholder="Image URL of IMGBB"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline bg-gradient-to-r from-[#cc2b5e] to-[#753a88]">
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

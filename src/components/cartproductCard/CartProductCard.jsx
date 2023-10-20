/* eslint-disable react/prop-types */
// @ts-nocheck
import { AiFillDelete } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

// @ts-nocheck
const CartProductCard = ({ cartProduct, setCartProducts, cartProducts }) => {
  const { _id, productName, brandName, type, price, rating, image } =
    cartProduct;
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cartProduct/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Product has been deleted.",
                "success"
              );
              const remaining = cartProducts.filter(
                (product) => product._id !== _id
              );
              setCartProducts(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="card bg-gradient-to-r from-[#cc2b5e] to-[#753a88] shadow-xl">
      <figure className="w-full h-[250px]">
        <img className="w-full h-full" src={image} alt={productName} />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-base">
          {productName}
          <div className="badge badge-outline text-xs">{type}</div>
          <div className="badge badge-outline text-xs">{brandName}</div>
        </h2>
        <p className="font-medium">${price}</p>
        <div className="rating">
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input
            type="radio"
            name={rating}
            className="mask mask-star"
            checked
          />
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input type="radio" name="rating-1" className="mask mask-star" />
          <input type="radio" name="rating-1" className="mask mask-star" />
        </div>
        <div className="card-actions justify-end">
          <Link to={`/updateProduct/${_id}`}>
            <button className="btn btn-xs btn-outline font-medium">
              <MdEdit />
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-xs btn-outline font-medium"
          >
            <AiFillDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
// {
//     fetch(`http://localhost:5000/cartProduct/${id}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);

//       });
//   }
{
  /* <button
              onClick={() => handleDelete(_id)}
              className="btn btn-xs btn-outline font-medium"
            >
              <AiFillDelete />
            </button> */
}

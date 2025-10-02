import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { backEndApi } from "./../../Shop/index";

export default function WishlisButtom({ productId, isInitiallyAdded }) {
  const [whishList, setWhishList] = useState([]);
  const [whishListID, setWhishListID] = useState([]);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(isInitiallyAdded || false);

  const token = localStorage.getItem("token");
  // Function to handle the API interaction and local state change
  // const handleToggleWishlist = async () => {
  //   // Determine the action based on the current state (Add or Remove)
  //   const newAddedState = !added;

  //   // Determine the API endpoint/method based on the action.
  //   // NOTE: Strapi's update (PUT) usually takes the wishlist item ID, not the product ID.
  //   // For simplicity, we use a placeholder endpoint/method here.
  //   const method = newAddedState ? "post" : "delete";
  //   const endpoint = `${backEndApi}wishlists/${product.documentId}`;

  //   // Optimistically update the UI while the request is pending
  //   setAdded(newAddedState);

  //   try {
  //     // 2. FIX: The API call logic is now in the onClick handler's function scope.
  //     const res = await axios({
  //       method: method,
  //       url: endpoint,
  //       data: { products: product.documentId }, // Send the product ID in the request body
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     console.log("Wishlist action successful:", res.data);

  //     // Optional: If the API call fails, you might want to revert the state.
  //     // If the API call fails, the catch block runs.
  //   } catch (error) {
  //     // If the request fails, revert the state to the previous value
  //     setAdded(!newAddedState);
  //     console.error("Failed to update wishlist:", error);

  //     // Optional: Execute a global error handler if passed
  //     if (onToggle) onToggle(error);
  //   }
  // };
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await axios.get(`${backEndApi}wishlists`, {
          params: {
            populate: {
              products: {
                populate: "*",
              },
            },
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setWhishList(res.data.data[0].products);
        setWhishListID(res.data.data[0].documentId);
        console.log(whishList);
        console.log(whishListID);
        // res.data.data.image[0].url;
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const reomveFromWishList = async (productId) => {
    console.log(productId.productId);
    const updatedata = whishList
      .filter((ele) => ele.id !== productId.productId)
      .map((ele) => ele.id);
    console.log(updatedata);
    await axios
      .put(
        `${backEndApi}wishlists/${whishListID}`,
        {
          data: { products: updatedata },
        },
        {
          params: { populate: { products: { populate: "*" } } },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data.data.products);
        setWhishList(res.data.data.products);
      });
  };
  return (
    <>
      <button
        className="p-2 rounded-full cursor-pointer text-red-500 hover:bg-gray-100 transition-colors"
        onClick={() => {
          reomveFromWishList({ productId });
        }} // Call the main function on click
        title={added ? "Remove from Wishlist" : "Add to Wishlist"}
      >
        {added ? (
          <IoIosHeart className="text-[25px]" />
        ) : (
          <IoIosHeartEmpty className="text-[25px]" />
        )}
      </button>
    </>
  );
}

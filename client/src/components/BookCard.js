import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const BookCard = ({
  author_name = "",
  book_name = "",
  book_url = "",
  setData,
  index,
}) => {
  const handleClick = async () => {
    console.log(index);
    try {
      const deleteData = { delete_index: index };
      //@@sending delete request to delee the data
      const res = await axios.delete("/api/books", {
        data: { delete_index: index },
      });
      //@@updating the state
      setData(res.data);
      toast.error("Deleted Successfully!!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (error) {}
  };

  return (
    <div className="flex flex-col p-2 book-card border-2 border-gray-400 gap-2 bg-gray-300 rounded-lg  text-center">
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="colored"
      />
      <div className="md:max-w-[500px] md:max-h-[300px]  ">
        <img src={book_url} alt={book_name} className="w-full h-full" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <span>Author Name : {author_name}</span>
        <span>Book Name : {book_name}</span>
        <button
          className="justify-self-end bg-red-700 text-white w-[80%] p-[5px] rounded-xl hover:opacity-70"
          onClick={handleClick}
        >
          DELETE BOOK
        </button>
      </div>
    </div>
  );
};

export default BookCard;

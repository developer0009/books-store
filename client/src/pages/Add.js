import React from "react";
import { useState } from "react";
import Wrapper from "../components/Wrapper";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const Add = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    author_name: "",
    book_name: "",
    book_url: "",
  });
  console.log("hello world");
  const handleChange = (evt) => {
    setData({ ...data, [evt.target.name]: evt.target.value });
  };
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    //@@ sending POST request our data to server
    try {
      await axios.post("/api/books", data);
      toast.success("Added Successfully!!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(() => {
        navigate("/");
      }, 700);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Wrapper className={""}>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <form
        action=""
        onSubmit={handleSubmit}
        className="p-1 md:p-4 flex flex-col gap-7"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="author_name" className="font-semibold">
            Author Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="author_name"
            name="author_name"
            placeholder="Enter Author Name"
            className="p-6 h-9 bg-stone-600 text-white rounded-lg"
            onChange={handleChange}
            required
            value={data["author_name"]}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="author_name" className="font-semibold">
            Book Name <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="author_name"
            name="book_name"
            placeholder="Enter Author Name"
            className="p-6 h-9 bg-stone-600 text-white rounded-lg"
            onChange={handleChange}
            value={data["book_name"]}
            required
            minLength={6}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="author_name" className="font-semibold">
            Book URL
          </label>
          <input
            type="text"
            id="author_name"
            name="book_url"
            placeholder="Enter Author Name"
            className="p-6 h-9 bg-stone-600 text-white rounded-lg"
            onChange={handleChange}
            value={data["book_url"]}
            minLength={6}
          />
        </div>
        <button
          className="md:w-[7rem] mx-auto bg-green-600 p-3 flex justify-center items-center text-white rounded-lg hover:opacity-80"
          type="submit"
        >
          Submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Add;

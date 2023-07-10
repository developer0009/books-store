import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import { SyncLoader } from "react-spinners";
import axios from "axios";
import BookCard from "../components/BookCard";
const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    //   @@@ FETCHING DATA FROM SERVER
    setLoading(true);
    setTimeout(async () => {
      try {
        const res = await axios.get("/api/books");
        setData(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }, 1000);
  }, []);
  return (
    <div className="w-full mt-2">
      {!loading ? (
        <Wrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 gap-5 my-14 px-5 md:px-0">
          {data.map((book_data, index) => (
            <BookCard
              author_name={book_data.author_name}
              book_name={book_data.book_name}
              book_url={book_data.book_url}
              setData={setData}
              key={index}
              index={index}
            />
          ))}
        </Wrapper>
      ) : (
        <Wrapper>
          <div className="flex justify-center">
            <SyncLoader className="mx-auto" />
          </div>
        </Wrapper>
      )}
    </div>
  );
};

export default Home;

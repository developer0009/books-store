import express from "express";

const router = express.Router();

let booksCollection = [
  {
    author_name: "Robert Kiyosaaki",
    book_name: "Rich Dad Poor Dad",
    book_url:
      "https://www.winkart.in/wp-content/uploads/2020/11/RDPD-QUOTES.jpg",
  },
  {
    author_name: "James Clear",
    book_name: "Atomic Habits",
    book_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMCcTZmfWSt4WCl6o-8e6KJofYNaRI7e9_qssp7N0&s",
  },
  {
    author_name: "Robert Greene",
    book_name: "48 Laws of power",
    book_url:
      "https://5.imimg.com/data5/SELLER/Default/2022/9/DB/BR/RB/19351533/the-48-laws-of-power.jpg",
  },
];

// @@ GET Api
// Description -> returns the array with the status code
router.get("/", (req, res) => {
  res.status(200).json(booksCollection);
});

// @@ POST Api
// Description -> Add a book and update the array
router.post("/", (req, res) => {
  if (!req.body.book_url) {
    req.body.book_url =
      "https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/09/23165047/Importance-of-Books.jpg";
  }
  console.log(req.body);
  booksCollection.push(req.body);
  res.status(200).json(booksCollection);
});

// @@ DELETE Api
// Description -> remove  the particular value from the array and returns the array  with the status code
router.delete("/", (req, res) => {
  const { delete_index } = req.body;
  if (delete_index > booksCollection.length - 1 || delete_index < 0) {
    res.status(404).json({ message: "error 404 not found" });
  } else {
    booksCollection = booksCollection.filter((data, index) => {
      if (index !== delete_index) return data;
    });
  }
  // console.log(req);
  //   booksCollection = booksCollection.filtere;
  res.status(200).json(booksCollection);
});

export default router;

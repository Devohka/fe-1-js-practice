import { createProductsMarkUp } from "../createProduct";
import axios from 'axios';
const fruitsListRef = document.querySelector(".fruits__list");
const url = "http://localhost:3000/fruits";

//? then()

// export const fetchFruits = () =>
//   fetch(url)
//     .then((res) => {
//       if (!res.ok) {
//         console.log("!res.ok");
//       }
//       return res.json();
//     })
//     .then((data) => {
//       createProductsMarkUp(data, fruitsListRef);
//     })
//     .catch((err) => console.log(err));

//? async/await

// export const fetchFruits = async () => {
//   try {
//     const resp = await fetch(url);
//     const data = await resp.json();
//     createProductsMarkUp(data, fruitsListRef);
//   } catch (err) {
//     console.log(err);
//   }
// };

export const fetchFruits = async () => {
  try {
    const resp = await axios.get(url);
    createProductsMarkUp(resp.data, fruitsListRef);
  } catch (err) {
    console.log(err);
  }
};


// const options = {
//   method: "POST",
//   body: JSON.stringify(newFruit),
//   headers: {
//     "Content-Type": "application/json; charset=UTF-8",
//   },
// };

//? then()

// export const addFruit = (newFruit) =>
//   fetch(url, {
//     method: "POST",
//     body: JSON.stringify(newFruit),
// headers: {
//   "Content-Type": "application/json; charset=UTF-8",
// },
//   })
//     .then((res) => res.json())
//     .catch((err) => console.log(err));

//? async/await

// export const addFruit = async (newFruit) => {
//   try {
//     const resp = await fetch(url, {
//       method: "POST",
//       body: JSON.stringify(newFruit),
//       headers: {
//         "Content-Type": "application/json; charset=UTF-8",
//       },
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

export const addFruit = async (newFruit) => {
  try {
    const resp = await axios.post(url, newFruit);
  } catch (err) {
    console.log(err);
  }
};

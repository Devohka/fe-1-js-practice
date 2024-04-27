import { createProductsMarkUp } from "../createProduct";
import axios from 'axios';
const vegetablesListRef = document.querySelector(".vegetables__list");

//?then()

// export const fetchVegetables = () =>
//   fetch("http://localhost:3000/vegetables")
//     .then((res) => {
//       if (!res.ok) {
//         console.log("!res.ok");
//       }
//       return res.json();
//     })
//     .then((data) => {
//       createProductsMarkUp(data, vegetablesListRef);
//     })
//     .catch((err) => console.log(err));

//? async/await

// export const fetchVegetables = async () => {
//   try {
//     const resp = await fetch("http://localhost:3000/vegetables");
//     const data = await resp.json();
//     createProductsMarkUp(data, vegetablesListRef);
//   } catch (err) {
//     console.log(err);
//   }
// };

export const fetchVegetables = async () => {
  try {
    const resp = await axios.get("http://localhost:3000/vegetables");

    createProductsMarkUp(resp, vegetablesListRef);
  } catch (err) {
    console.log(err);
  }
};


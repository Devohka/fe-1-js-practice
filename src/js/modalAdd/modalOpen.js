import { makeMarkUpAddModal } from "../modalAdd/createModalAdd";
import { addFruit } from "../helpersAPI/fetchFruitsAPI";
const modalBackdrop = document.querySelector(".modal-add");

export const modalAddOpen = async (evt) => {
  const backdrop = document.querySelector(".backdrop");
  backdrop.classList.remove("is-hidden");
  modalBackdrop.innerHTML = makeMarkUpAddModal();
  let length = 1;
  globalThis.addFruitFormRef = document.querySelector(".add-fruit__form");

  //? then()

  // fetch("http://localhost:3000/fruits").then(res => res.json()).then(res => {
  //     length = res.length;
  // });

  //? async/await

  try {
    const resp = await fetch("http://localhost:3000/fruits");
    const data = await resp.json();
    length = data.length;
  } catch (err) {
    console.log(err);
  }

  globalThis.addFruitFormRef.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const newFruit = {
      id: String(length + 1),
      name: evt.currentTarget.elements.name.value,
      price: evt.currentTarget.elements.price.value,
      emoji: evt.currentTarget.elements.emoji.value,
      quantity: evt.currentTarget.elements.quantity.value,
    };
    console.log(newFruit);
    addFruit(newFruit);
    evt.currentTarget.reset();
  });
};

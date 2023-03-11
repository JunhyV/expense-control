import React, { useState } from "react";
import close from "../assets/cerrar.svg";

const Modal = ({ setDisplayForm }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("");
  const [validation, setValidation] = useState(true);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    if ([name, category].includes("") && quantity === 0) {
      e.preventDefault();
      setValidation(false);
      setError("Please, complete all requirements.");
    } else {
      setValidation(true);
    }
  };
  return (
    <div className="bg-black/90 text-white text-2xl text-center font-bold top-0 bottom-0 left-0 right-0 z-10 fixed  flex flex-col items-center justify-center gap-5">
      <h1 className="text-4xl">New Expense</h1>
      <hr className="border-2 border-blue-500 w-4/5" />
      <form className="flex flex-col gap-2 w-4/5" onSubmit={handleSubmit}>
        <label>Expense Name</label>
        <input
          className="text-black text-center font-normal p-1"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Quantity Spent</label>
        <input
          className="text-black text-center font-normal p-1"
          type="number"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <label>Category</label>
        <select className="text-black text-center font-normal p-1 ">
          <option className="text-base" value="default">
            Select your category
          </option>
          <option className="text-base" value="save">
            Save
          </option>
          <option className="text-base" value="home">
            Home
          </option>
          <option className="text-base" value="food">
            Food
          </option>
          <option className="text-base" value="various">
            Various
          </option>
          <option className="text-base" value="leisure">
            Leisure
          </option>
          <option className="text-base" value="health">
            Health
          </option>
          <option className="text-base" value="suscription">
            Suscription
          </option>
        </select>
        {validation ? (
          <p className="text-base text-transparent">-</p>
        ) : (
          <p className="text-base text-red-500">{error}</p>
        )}
        <input type="submit" value="Submit" />
      </form>

      <img
        onClick={() => setDisplayForm(false)}
        className="w-8 cursor-pointer absolute right-3 top-3"
        src={close}
        alt="close-btn"
      />
    </div>
  );
};

export default Modal;

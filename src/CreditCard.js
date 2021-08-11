import React, { useState, useEffect } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./App.css";

const CreditCard = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  const [dataIsValid, setDataIsValid] = useState(true);

  useEffect(() => {
    setExpiryHandler(); // This is be executed when `loading` state changes
  });
  const numberChangeHandler = (event) => {
    if (event.target.value.length === 16) {
      setNumber(event.target.value);
    } else {
      return;
    }
  };
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const monthChangeHandler = (event) => {
    if (event.target.value === "month") {
      return;
    }
    setMonth(event.target.value);
  };
  const setExpiryHandler = () => {
    const expiry = month + year;
    setExpiry(expiry);
  };
  const yearChangeHandler = (event) => {
    if (event.target.value === "year") {
      return;
    }
    setYear(event.target.value);
  };
  const cvcChangeHandler = (event) => {
    if (event.target.value.length === 3) {
      setCvc(event.target.value);
    } else {
      return;
    }
  };
  const focusHandler = (f) => {
    setFocus(f.target.name);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (number === null || number.trim().length !== 16) {
      setDataIsValid(false);
      return;
    }
    if (cvc === null || cvc.trim().length !== 3) {
      setDataIsValid(false);
      return;
    }
    if (name === null || name.trim() === "") {
      setDataIsValid(false);
      return;
    }

    setDataIsValid(true);
    const cardData = {
      number: number,
      name: name,
      expiry: expiry,
      cvc: cvc,
    };

    console.log(cardData);
  };

  return (
    <div className="App">
      <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />
      {!dataIsValid && <h2>Please Enter correct details</h2>}
      <form onSubmit={submitHandler}>
        <input
          type="number"
          name="number"
          maxLength="16"
          placeholder="Card Number"
          onChange={numberChangeHandler}
          onFocus={focusHandler}
        />
        <input
          type="text"
          name="name"
          placeholder="Name on Card"
          onChange={nameChangeHandler}
          onFocus={focusHandler}
        />
        <select onChange={monthChangeHandler} onFocus={focusHandler}>
          <option value="month">Month</option>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
          <option value="06">06</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
        <select onChange={yearChangeHandler} onFocus={focusHandler}>
          <option value="year">Year</option>
          <option value="21">2021</option>
          <option value="22">2022</option>
          <option value="23">2023</option>
          <option value="24">2024</option>
          <option value="25">2025</option>
          <option value="26">2026</option>
          <option value="27">2027</option>
          <option value="28">2028</option>
          <option value="29">2029</option>
          <option value="30">2030</option>
        </select>
        <span>
          <input
            type="number"
            name="cvc"
            maxLength="3"
            placeholder="CVV"
            onChange={cvcChangeHandler}
            onFocus={focusHandler}
          />
        </span>
        <button type="Submit" className="btn btn-success">
          Pay
        </button>
      </form>
    </div>
  );
};

export default CreditCard;

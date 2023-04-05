import styles from "../styles/Reg.module.css";
import StepOne from "./Register/StepOne";
import React, { useState, useEffect } from "react";

export function Card(props) {
  if (props.type == "card") {
    return (
      <section
        className={styles.card}
        id={props.direction == "left" ? styles.left : styles.right}
      >
        <img src={props.img} alt={props.alt} />
        <div className={styles.cardContainer}>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </div>
      </section>
    );
  } else if (props.type == "cont") {
    return <section className={styles.card}>{props.children}</section>;
  }
}

export function Input(props) {
  if (props.type == "text" || props.type == "email" || props.type == "phone") {
    return (
      <section className={styles.Icontainer}>
        <label htmlFor={props.name}>→</label>
        <input
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          required
        />
      </section>
    );
  } else if (props.type == "area") {
    return (
      <section className={styles.Icontainer}>
        <textarea
          name={props.name}
          placeholder={props.placeholder}
          cols="25"
          rows="5"
        />
      </section>
    );
  }
}

export function Greet() {
  const [name, setName] = useState("name");

  useEffect(() => {
    setName(localStorage.getItem("name"));
  }, []);

  let d = new Date();
  let time = d.getHours();
  if (time < 12) {
    return <span>Good morning {name}!. </span>;
  }
  if (time >= 12) {
    return <span>Good afternoon {name}! </span>;
  }
}

const Register = () => {
  return <StepOne />;
};

export default Register;
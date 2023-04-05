import styles from "../styles/Main.module.css";
import Link from "next/link";
import React from "react";

export function Button(props) {
  if (props.real == "real") {
    return (
      <button className={styles.button} onClick={props.onClick}>
        {props.children}{" "}
      </button>
    );
  } else {
    return <div className={styles.button}>{props.children} </div>;
  }
}

const Main = () => {
  return (
    <div className={styles.subcontainer}>
      <section>
        <h1 className={styles.title}>
          <span>Isipathana College Astronomical Society</span>
          <br />
          Virtual Webinar Series
        </h1>
        <p className={styles.p}>
          Isipathana College Astronomy Association presents a &quot;Free
          Astronomy webinar series&quot; for astronomy enthusiasts.
        </p>
        <Button className={styles.button}>
          <Link href="/register">
            <a>Let’s begin the adventure</a>
          </Link>
        </Button>
      </section>
      <section>
        <img
          className={styles.image}
          src="/icon.png"
          alt="Isipathana College Astronomical Society"
        />
      </section>
    </div>
  );
};

export default Main;

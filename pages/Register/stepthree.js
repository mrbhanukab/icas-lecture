import styles from "../../styles/Reg.module.css";
import Head from "next/head";
import { Card, Input, Greet } from "../register";
import { Button } from "../Main";
import Background from "../Background";
import Link from "next/link";
import { useState } from "react";

const StepThree = () => {
  const [enter, setEnter] = useState(false);
  const emailChangeHandler = (event) => {
    if (event.target.value == null) {
      setEnter(false);
    } else {
      setEnter(true);
      localStorage.setItem("email", event.target.value);
    }
  };
  return (
    <div className={styles.mainC}>
      <Background />
      <Head>
        <title>Step 3/6</title>
        <meta
          name="description"
          content="Isipathana College Astronomy Society presents you with the second lecture of the 'Free Astronomical Webinar Series', for astronomy enthusiasts."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Card type="cont">
        <div className={styles.container}>
          <div className={styles.subcontainer}>
            <h1>Registration Wizard [3/6]</h1>
            <div autoComplete="off">
              <p>Type Your Email</p>
              <Input
                name="email"
                type="email"
                placeholder="What is Your Email?"
                autofocus="true"
                onChange={emailChangeHandler}
                required
              />
              {enter ? (
                <Button>
                  <Link href="/Register/finalstep">
                    <a>Continue</a>
                  </Link>
                </Button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StepThree;

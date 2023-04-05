import styles from "../../styles/Reg.module.css";
import Head from "next/head";
import Link from "next/link";
import { Card, Input, Greet } from "../register";
import { Button } from "../Main";
import Background from "../Background";
import { useState } from "react";

const StepTwo = () => {
   const [enter, setEnter] = useState(false);
  const phoneChangeHandler = (event) => {
    if (event.target.value == null) {
      setEnter(false);
    } else {
      setEnter(true);
     localStorage.setItem("phone", event.target.value);
    }
  };
  return (
    <div className={styles.mainC}>
      <Background />
      <Head>
        <title>Step 2/6</title>
        <meta
          name="description"
          content="Isipathana College Astronomy Society presents you with the second lecture of the 'Free Astronomical Webinar Series', for astronomy enthusiasts."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Card type="cont">
        <div className={styles.container}>
          <div className={styles.subcontainer}>
            <h1>Registration Wizard [2/6]</h1>
            <div autoComplete="off">
              <p>
                {<Greet />}Next, What is your Whatsapp Number? (+94xxxxxxxxx)
              </p>
              <Input
                name="phone"
                type="phone"
                placeholder="What is Your Whatsapp Number?"
                autofocus="true"
                onChange={phoneChangeHandler}
                required
              />
              {enter ? (
                <Button>
                  <Link href="/Register/stepthree">
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

export default StepTwo;

import styles from "../../styles/Reg.module.css";
import Head from "next/head";
import { Card, Input } from "../register";
import { Button } from "../Main";
import Link from "next/link";
import Background from "../Background";
import { useState } from "react";

const StepOne = () => {
  const [enter, setEnter] = useState(false);
  const nameChangeHandler = (event) => {
    if (event.target.value == null) {
      setEnter(false);
    }
    else{
      setEnter(true);
      localStorage.setItem("name", event.target.value);
    }
  };
  return (
    <div className={styles.mainC}>
      <Background />
      <Head>
        <title>Let’s begin the adventure</title>
        <meta
          name="description"
          content="Isipathana College Astronomy Society presents you with the second lecture of the 'Free Astronomical Webinar Series', for astronomy enthusiasts."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Card type="cont">
        <div className={styles.container}>
          <div className={styles.subcontainer}>
            <h1>Registration Wizard [1/6]</h1>
            <div autoComplete="on">
              <p>Welcome to ICAS Virtual Webinar Series!</p>
              <p>
                It&apos;s time to begin the adventure. Let us know your name.
              </p>
              <Input
                name="Name"
                type="text"
                placeholder="What is Your Name?"
                autofocus="true"
                required
                onChange={nameChangeHandler}
              />
              {enter ? (
                <Button>
                  <Link href="/Register/steptwo">
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

export default StepOne;

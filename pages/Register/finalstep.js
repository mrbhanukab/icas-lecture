import styles from "../../styles/Reg.module.css";
import Head from "next/head";
import { Card, Input } from "../register";
import { Button } from "../Main";
import Link from "next/link";
import Background from "../Background";
import { useState } from "react";

const FinalStep = () => {
   const [enter, setEnter] = useState(false);
    const schoolChangeHandler = (event) => {
      localStorage.setItem("school", event.target.value);
    };
    const gradeChangeHandler = (event) => {
          if (event.target.value == null) {
            setEnter(false);
          } else {
            setEnter(true);
            localStorage.setItem("grade", event.target.value);
          }
    };
  return (
    <div className={styles.mainC}>
      <Background />
      <Head>
        <title>Step 4/6</title>
        <meta
          name="description"
          content="Isipathana College Astronomy Society presents you with the second lecture of the 'Free Astronomical Webinar Series', for astronomy enthusiasts."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Card type="cont">
        <div className={styles.container}>
          <div className={styles.subcontainer}>
            <h1>Registration Wizard [4/6]</h1>
            <div autoComplete="off">
              <p>
                This is the Next step. What is your school? (Ex:- Isipathana
                College, Colombo 05)
              </p>
              <Input
                name="school"
                type="text"
                placeholder="What is Your School?"
                autofocus="true"
                onChange={schoolChangeHandler}
                required
              />
              <p>And What is Your Grade? (Ex:- 10)</p>
              <Input
                name="grade"
                type="text"
                placeholder="What is Your Grade?"
                autofocus="true"
                onChange={gradeChangeHandler}
                required
              />
              {enter ? (
                <Button>
                  <Link href="/Register/verify">
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

export default FinalStep;

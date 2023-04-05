import { useEffect, useState } from "react";
import styles from "../../styles/Reg.module.css";
import Head from "next/head";
import { Card } from "../register";
import { Button } from "../Main";
import Background from "../Background";
import { setDoc, doc, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import Link from "next/link";

const firebaseConfig = {
  apiKey: "####",
  authDomain: "icas-webinar-###.firebaseapp.com",
  projectId: "icas-webinar-####",
  storageBucket: "icas-webinar-###.appspot.com",
  messagingSenderId: "####",
  appId: "1:883191443856:web:f367a22bcd3#####",
  measurementId: "G-JVH####",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const FinalStep = () => {
  const [submited, setSubmited] = useState(false);
  useEffect(() => {
    const docRef = doc(db, "users", localStorage.getItem("phone").slice(1));
    const payload = {
      Name: localStorage.getItem("name"),
      School: localStorage.getItem("school"),
      Grade: localStorage.getItem("grade"),
      Phone: localStorage.getItem("phone"),
      Email: localStorage.getItem("email"),
      Added: "null",
    };
    setDoc(docRef, payload);
    setTimeout(() => setSubmited(true), 2500);
    localStorage.setItem("loged", true);
  }, []);

  const Finish = () => {
    return (
      <div style={styles.delayed}>
        <p>Congratulations🎉, You have successful Entered.</p>
        <Button>
          <Link href="/">
            <a>Continue to Dashboard</a>
          </Link>
        </Button>
      </div>
    );
  };
  return (
    <div className={styles.mainC}>
      <Background />
      <Head>
        <title>Final Step</title>
        <meta
          name="description"
          content="Isipathana College Astronomy Society presents you with the second lecture of the 'Free Astronomical Webinar Series', for astronomy enthusiasts."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Card type="cont">
        <div className={styles.container}>
          <div className={styles.subcontainer}>
            <h1>Registration Wizard [6/6]</h1>
            <div autoComplete="off">
              <p>
                Conecting & Sending data to the &ldquo;asia-south1&ldquo; Google
                Data Server in India ...
                <br />
                <br />
                ⏳ Please wait a moment ...
                <br />
              </p>
              {submited ? <Finish /> : ""}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FinalStep;

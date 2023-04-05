import styles from "../../styles/Reg.module.css";
import Head from "next/head";
import { Card } from "../register";
import { Button } from "../Main";
import Background from "../Background";
import Link from "next/link";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "####",
  authDomain: "icas-webinar-####.firebaseapp.com",
  projectId: "icas-webinar-####",
  storageBucket: "icas-webinar-####.appspot.com",
  messagingSenderId: "####",
  appId: "1:883191443856:web:f367a22bcd36####",
  measurementId: "G-#####",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Verify = () => {
  const [data, setData] = useState([]);
  const [isAvailable, setIsAvailable] = useState(false);
  useEffect(() => {
    setData([
      localStorage.getItem("name"),
      localStorage.getItem("school"),
      localStorage.getItem("grade"),
      localStorage.getItem("phone"),
      localStorage.getItem("email"),
    ]);
    getDoc(doc(db, "users", localStorage.getItem("phone").slice(1))).then(
      (docSnap) => {
        if (docSnap.exists()) {
          setIsAvailable(true);
        } else {
          setIsAvailable(false);
        }
      }
    );
  }, []);
  return (
    <div className={styles.mainC}>
      <Background />
      <Head>
        <title>Step 5/6</title>
        <meta
          name="description"
          content="Isipathana College Astronomy Society presents you with the second lecture of the 'Free Astronomical Webinar Series', for astronomy enthusiasts."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Card type="cont">
        <div className={styles.container}>
          <div className={styles.subcontainer}>
            <h1>Registration Wizard [5/6]</h1>
            <div autoComplete="off">
              <p>
                Name: {data[0]}
                <br></br>
                School: {data[1]}
                <br></br>
                Grade: {data[2]}
                <br></br>
                Phone: {data[3]}
                <br></br>
                Email: {data[4]}
                <br />
                <br />
                You have provided above data. Do you confirm that these details
                are correct?
              </p>
              <p className={`${styles.error} ${!isAvailable && styles.hide}`}>
                You have Alredy Registered with {data[3]}, This Will Only Update
                the details.
              </p>
              <Button>
                <Link href="/Register/finalizing">
                  <a>Yes, Continue</a>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Verify;

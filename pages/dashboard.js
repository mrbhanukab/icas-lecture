import React from "react";
import Link from "next/link";
import styles from "../styles/Dashboard.module.css";

import Head from "next/head";
import Background from "./Background";
import { Greet } from "./register";
import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  EmailIcon,
  ViberIcon,
} from "react-share";
import { Button } from "./Main";
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "######",
  authDomain: "icas-webinar-####.firebaseapp.com",
  projectId: "icas-webinar-####",
  storageBucket: "icas-webinar-####.appspot.com",
  messagingSenderId: "######",
  appId: "1:883191443856:web:f367a22bcd#######",
  measurementId: "G-JVHM44####",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Dashboard = () => {
  const [isAdded, setIsAdded] = useState(false);
  const logOut = () => {
    localStorage.setItem("loged", false);
    window.location.replace("/");
  };
  useEffect(() => {
    getDoc(doc(db, "users", localStorage.getItem("phone").slice(1))).then(
      (docSnap) => {
        if (docSnap.exists()) {
          const Data = docSnap.data();
          if (Data.Added == true) {
            localStorage.setItem("Added", true);
            setIsAdded(true);
          }
        } else {
          setIsAdded(false);
        }
      }
    );

    if (localStorage.getItem("Added") == true) {
      setIsAdded(true);
    }
  }, []);
  const shareUrl = "https://icas-edu.web.app";
  const title =
    "I am participating in a webinar series conducted by the Isipathana College Astronomy Society. I invite you to it too.";
  return (
    <React.Fragment>
      <Background />
      <Head>
        <title>ICAS Webinar Series</title>
        <meta
          name="description"
          content="Isipathana College Astronomy Society presents you with the second lecture of the 'Free Astronomical Webinar Series', for astronomy enthusiasts."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.container}>
        <div className={styles.subcontainer}>
          <h1>
            <Greet />
          </h1>
          <p>Invite Your Friends :</p>
          <br />
          <div className={styles.share}>
            <FacebookShareButton url={shareUrl} quote={title}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <EmailShareButton url={shareUrl} quote={title}>
              <EmailIcon size={32} round />
            </EmailShareButton>
            <TelegramShareButton url={shareUrl} quote={title}>
              <TelegramIcon size={32} round />
            </TelegramShareButton>
            <TwitterShareButton url={shareUrl} quote={title}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <ViberShareButton url={shareUrl} quote={title}>
              <ViberIcon size={32} round />
            </ViberShareButton>
            <WhatsappShareButton url={shareUrl} quote={title}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
        </div>
        <div className={styles.subcontainer2}>
          <div className={styles.subcontainer3}>
            <h3>Lecture 1</h3>
            <h2>Are we Alone?</h2>{" "}
            <Button className={styles.button}>
              <Link href="/lectures/one">
                <a>Watch Now</a>
              </Link>
            </Button>
          </div>
          <div className={styles.subcontainer3}>
            <h3>Lecture 2</h3>
            <h2>Life on Earth</h2>{" "}
            <Button className={styles.button}>
              <Link href="/lectures/two">
                <a>Watch Now</a>
              </Link>
            </Button>
          </div>
          <div className={styles.subcontainer3}>
            <p>
              Click this button to Change Details. You will have to fill out the
              form the beginning 
              <span>
                <a href="https://wa.me/94767733492">
                  [We use your phone number to identify you, and if you need to
                  change your phone number, contact the developer (click here).]
                </a>
              </span>
            </p>
            <Button className={styles.button} real="real" onClick={logOut}>
              Change Details
            </Button>
          </div>
          {isAdded ? (
            ""
          ) : (
            <div className={styles.subcontainer3}>
              <h4>
                ⚠️ It seems you have not added to the WhatsApp Goup. If you
                haven&apos;t added to the group before <span>April 21</span>,
                contact us.
              </h4>
              <Button className={styles.button}>
                <a href="https://wa.me/94703886215">
                  <a>Contact Now</a>
                </a>
              </Button>
            </div>
          )}
        </div>
        <div className={styles.footer}>
          <div>
            <img
              className={styles.simage}
              src="/school.png"
              alt="Isipathana College"
            />
            <img
              className={styles.image}
              src="/icon.png"
              alt="Isipathana College Astronomical Society"
            />
          </div>
          <div>
            <p>
              <a href="#">© I.C.A.S. 2021 - {new Date().getFullYear()} </a> |
              All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;

import { useRouter } from "next/router";
import ResponsiveEmbed from "react-responsive-embed";
import styles from "../../styles/Dashboard.module.css";
import { Button } from "../Main";
import { useEffect, useState } from "react";
import Link from "next/link";
import Head from "next/head";

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
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import Background from "../Background";

const firebaseConfig = {
  apiKey: "#####",
  authDomain: "####",
  projectId: "####",
  storageBucket: "####",
  messagingSenderId: "####",
  appId: "1:883191443856:web:f367####",
  measurementId: "G-####",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Lectures = () => {
  const shareUrl = "https://icas-edu.web.app";
  const title =
    "I am participating in a webinar series conducted by the Isipathana College Astronomy Society 🧑‍🚀. I invite you to it too. 🔥";
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState([]);
  useEffect(() => {
    getDoc(doc(db, "lectures", id)).then((docSnap) => {
      if (docSnap.exists()) {
        setData([
          docSnap.data().name,
          docSnap.data().title,
          docSnap.data().lectures,
          docSnap.data().url,
          docSnap.data().finished,
          docSnap.data().Zoom,
        ]);
      }
    });
  }, []);

  const url = data[3];
  return (
    <div className={styles.container}>
      <Background />
      <Head>
        <title>
          {data[0]} | {data[1]}
        </title>
        <meta
          name="description"
          content="Isipathana College Astronomy Society presents you with the second lecture of the 'Free Astronomical Webinar Series', for astronomy enthusiasts."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className={styles.subcontainer3}>
        <h3>{data[0]}</h3>
        <h2>{data[1]}</h2>
        <h5>
          Lectures:
          <br />
          {data[2]}
        </h5>
        {data[4] ? (
          <div className={styles.video}>
            <ResponsiveEmbed src={url} />
          </div>
        ) : (
          <Button className={styles.button}>
            <a href="https://us02web.zoom.us/j/86937032380?pwd=RmtKbWFtRlRwemJxWU5SWkd6UDRpdz09">
              <a>Join to the event via Zoom</a>
            </a>
          </Button>
        )}

        <p>Share :</p>
        <br />
        <div className={styles.share3}>
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
        <Button className={styles.button}>
          <Link href="/dashboard">
            <a>Back to Home</a>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Lectures;

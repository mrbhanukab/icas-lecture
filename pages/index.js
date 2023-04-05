import React, { useState, useEffect } from "react";
import Dashboard from "./dashboard";
import Head from "next/head";
import Background from "./Background";
import Main from "./Main";

export default function Home() {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
    if (localStorage.getItem("loged") === "true") {
      setIsLogged(true);
    }
  }, []);
  if (isLogged == true) {
    return <Dashboard />;
  } else {
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
        <Main />
      </React.Fragment>
    );
  }
}

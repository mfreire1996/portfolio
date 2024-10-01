// "use client";

import { Metadata } from "next";
import Image from "next/image";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { motion, useAnimate } from "framer-motion";
import Link from "next/link";
import useSWR from "swr";

export const metadata: Metadata = {
  title: "Marcos Freire Portfolio",
  description: "Powered by Next.js",
};

  return (
    <main>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="..."
          crossOrigin="anonymous"
        />
      </Head>
      <div className="title">
        <h1>Hi I'm Marcos Freire Welcome to my website</h1>
        <h3>I'm a web developer and a boxing coach</h3>
        {/* <motion.body
          animate={{ fontSize: 250, color: "#ff2994", x: 100, y: -300 }}
        >
          TESTINNNGNGGGG
        </motion.body> */}
        <div className="container">
          <div className="link">
            <Link href="/about" className="link-content">
              <h5>See More</h5>
              <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
            </Link>
            <br></br>
          </div>
          <div className="link">
            <Link href="/about/projects" className="link-content">
              <h5>View Projects</h5>
              <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
            </Link>
            <br></br>
          </div>
        </div>
      </div>
    </main>
  );
}

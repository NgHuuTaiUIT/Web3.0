import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Footer, Navbar, Services, Transaction, Welcome } from "../components";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transaction />
      <Footer />
    </div>
  );
};

export default Home;

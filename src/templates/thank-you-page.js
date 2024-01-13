import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Page from "../components/Page";
import Footer from "../components/Footer";
import Button from "../components/Button";

const AanbodPage = ({ data }) => {
  return (
    <Layout>
      <Header />
      <Page>
        <div className="w-full p-8 prose">
          <h1 className="font-iskry text-red">CONTACT</h1>
          <p>
            Dankjewel voor je bericht! Ik neem zo snel mogelijk contact met je
          </p>
        </div>
      </Page>
      <Footer />
    </Layout>
  );
};

export default AanbodPage;

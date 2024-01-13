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
            Heb je een vraag? Wil je een kennismaking inplannen? Neem gerust
            contact met mij op!
          </p>
        </div>
      </Page>
      <Footer />
    </Layout>
  );
};

export default AanbodPage;

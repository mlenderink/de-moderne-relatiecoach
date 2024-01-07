import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Header />
      <Content />
      <Footer />
    </Layout>
  );
};

export default IndexPage;

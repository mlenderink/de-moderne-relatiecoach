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

          <form action="https://api.web3forms.com/submit" method="POST">
            <input
              type="hidden"
              name="access_key"
              value="f44194f4-6998-433e-8796-aa4e2e083e47"
            />
            <input
              type="hidden"
              name="redirect"
              value="https://www.demodernerelatiecoach.nl/thank-you"
            />
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Naam
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Naam"
                className="w-full rounded-md border border-champagne bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border border-champagne bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="subject"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Onderwerp
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Vul hier het onderwerp in"
                className="w-full rounded-md border border-champagne bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Bericht
              </label>
              <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Vu hier je bericht in"
                className="w-full resize-none rounded-md border border-champagne bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div>
              <div class="h-captcha" data-captcha="true"></div>
              <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                Verzenden
              </button>
            </div>
          </form>

          <script
            src="https://web3forms.com/client/script.js"
            async
            defer
          ></script>
        </div>
      </Page>
      <Footer />
    </Layout>
  );
};

export default AanbodPage;

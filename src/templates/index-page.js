import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Page from "../components/Page";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Logo from "../components/Logo";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Header />
      <Page>
        <div className="w-full py-8 flex flex-col justify-center items-center bg-cover bg-[url('/img/header_home_4.png')]">
          <Logo type={"white"} className="h-72" />
          <div className="pb-8">
            <Button style={"gray"} href="#">
              Let's meet
            </Button>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row py-8">
          <div className="basis-5/12 flex justify-center">
            <div className="w-fit flex md:flex-col">
              <div className="font-iskry text-red text-5xl pt-10 md:pt-0">
                GEEF{" "}
                <span className="font-avallon leading-3 text-[3.25rem]">
                  ZELF
                </span>
                <br />
                JE RELATIE
                <br />
                VORM
              </div>
              <div className="hidden md:flex justify-center md:pt-8">
                <img
                  src="/img/de_moderne_relatiecoach_rond.png"
                  alt="De Moderne Relatiecoach"
                  className="w-64 h-64"
                />
              </div>
            </div>
          </div>
          <div className="basis-7/12 prose text-lg p-8 md:p-0">
            <p>
              Hoe zou jullie relatie eruitzien als jullie dat samen mogen
              bepalen? Zonder dat je je laat beïnvloeden van wat anderen daarvan
              vinden? Dat is waar De Moderne Relatiecoach voor gaat. Ik ben van
              mening dat het niet uitmaakt hoe het hoort, ga voor een relatie
              die bij jullie past! En ik help je graag bij het vormgeven je
              moderne relatie.
            </p>
            <p>
              Bij De Moderne Relatiecoach ga je op een diepgaande, fijne en
              leuke manier aan je relatie werken. Of dit nu is op een moment dat
              het echt even niet goed gaat of juist als je de ruimte voelt om
              aan je relatie te werken, alles is mogelijk. Nieuwsgierig? Lees
              gauw verder!
            </p>
            <p className="text-red italic">
              “Iedereen wil de vrijheid om zichzelf te zijn.”
            </p>

            <p className="font-avallon text-red text-3xl">Rianne Driezes</p>
          </div>
        </div>

        <div className="w-full h-72 bg-cover bg-bottom bg-[url('/img/header_home_2.png')]"></div>

        <div className="w-full grid py-8 md:grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-between">
            <h1 className="pb-8 uppercase text-center">Mijn verhaal</h1>
            <p className="px-6 text-center">
              Ik ben De Moderne Relatiecoach en mijn naam is Rianne Driezes.
              Vanaf 2009 zijn ik en mijn partner bezig met het vormgeven van de
              relatie die bij ons past. Na de diverse opleidingen help ik nu
              anderen bij het vormgeven van hun relatie.
            </p>
            <div className="text-center pt-8">
              <Button href="/mijn-verhaal">Lees verder</Button>
            </div>
            <div className="border border-red m-8"></div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="pb-8 uppercase text-center">Moderne relatie?!</h1>
            <p className="px-6 text-center">
              Relaties zijn er in allerlei vormen. En dat is het mooiste wat er
              is. Onstuimige relaties, huisje-boompje-beestje relaties, afstand
              relaties, queer relaties, meerdere relaties, jarenlange relaties,
              kinky relaties en ga zo maar door. En dan niet te vergeten de
              relatie met jezelf..
            </p>
            <div className="text-center pt-8">
              <Button href="/moderne-relatie">Lees meer</Button>
            </div>
            <div className="border border-red m-8"></div>
          </div>
        </div>

        <div className="w-full grid md:grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-between">
            <h1 className="pb-8 uppercase text-center">
              Leer je eigen relatie vorm te geven
            </h1>
            <p className="px-6 text-center">
              In een coachtraject van De Moderne Relatiecoach ga je in
              verschillende sessies aan de slag met de thema's die spelen binnen
              jullie relatie. Met belevingsgerichte oefeningen, verschillende
              technieken en huiswerkopdrachten boeken jullie samen resultaat.
            </p>
            <div className="text-center pt-8">
              <Button href="/aanbod">Bekijk het aanbod</Button>
            </div>
            <div className="border border-red m-8"></div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="pb-8 uppercase text-center">Bekijk het aanbod</h1>
            <p className="px-6 text-center">
              Genoeg gelezen? Dat snap ik! Plan gerust vrijblijvend een
              kennismaking in van 30 minuten. Dan gaan we even videobellen en
              kennismaken. Jullie vertellen waar jullie tegenaanlopen en ik
              vertel wat ik daar eventueel in kan betekenen.
            </p>
            <div className="text-center pt-8">
              <Button href="/contact">Kennismaking plannen</Button>
            </div>
            <div className="border border-red m-8"></div>
          </div>
        </div>
      </Page>
      <Footer />
    </Layout>
  );
};

export default IndexPage;

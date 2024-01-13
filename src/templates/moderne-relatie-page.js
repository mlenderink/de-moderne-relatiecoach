import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Page from "../components/Page";
import Footer from "../components/Footer";

const ModerneRelatiePage = ({ data }) => {
  return (
    <Layout>
      <Header />
      <Page>
        <div className="w-full p-8 prose">
          <h1 className="font-iskry text-red">MODERNE RELATIE?!</h1>

          <h2 className="font-iskry text-red">
            Vogelvlucht door de geschiedenis
          </h2>
          <p>
            Relaties zijn in de loop der jaren nogal wat verandert. Zo waren
            huwelijken tot de 18e eeuw een manier om financiële zekerheid te
            verwerven. Het laat-achttiende eeuwse gezin op het platteland was
            nauw verbonden met een community bestaande uit familie, buurt en
            kerk. Door de Industriële revolutie werd het individu belangrijker
            dan voorheen en werd het gezin meer opzichzelfstaand. De opkomst van
            de feministische beweging in de 19e en 20e eeuw bracht fundamentele
            veranderingen in genderrollen teweeg. De wereldoorlogen zorgden voor
            een nieuwe nadruk op het stichten van gezinnen als een bron van hoop
            en herstel. Tot lang na de Tweede Wereldoorlog is de Nederlandse
            samenleving ingericht op één ideaal: de man is kostwinner, de vrouw
            zorgt voor de kinderen en het huishouden. Een opleving van het
            feminisme aan het eind van de jaren 60, de tweede feministische
            golf, brengt hier verandering in. In de jaren ’60 en ’70 werd
            abortus legaal, voorbehoedmiddelen vrij verkrijgbaar en de pil werd
            door het ziekenfonds vergoed. En werd er meer open gesproken over
            seksualiteit.
          </p>

          <h2 className="font-iskry text-red">Niet zo vanzelfsprekend</h2>
          <p>
            De opkomst van de digitale revolutie in de late 20e en 21e eeuw
            versterkt het individualisme en bied meer keuzevrijheid in carrière,
            levensstijl en partnerkeuze. Traditionele normen worden ter
            discussie gesteld en de betekenis van relaties verschilt meer van
            persoon tot persoon. Mijlpalen die traditiegetrouw bij het volwassen
            leven horen verschuiven. Zo bereiken twintigers van 2018 mijlpalen
            later dan twintigers van 2008, volgens Centraal Bureau voor de
            Statistiek. Zo gaan ze later uit huis, volgen ze langer onderwijs en
            hebben minder snel een vaste arbeidsrelatie of een koophuis. De
            leeftijd waarop zij gaan samenwonen of kinderen krijgen stijgt ook.
            Dit is niet alleen door de keuzes die tegenwoordig gemaakt worden,
            ook externe factoren als de oververhitte woningmarkt, flexcontracten
            en studieschulden maken het traditionele huisje-boompje-beestje niet
            meer zo vanzelfsprekend.
          </p>

          <h2 className="font-iskry text-red">Moderne relaties</h2>
          <p>
            Het traditionele relatiedenken gaat er vaak vanuit dat bijna alles
            samendoet met je partner. Een heel mooi iets, als dat bij je past.
            Vaak door de angst om de emotionele verbondenheid te verliezen
            houden we onze verlangens, behoeftes en wensen voor onszelf. Dat in
            een tijd waarin zelfontwikkeling, groei en individualisme hoog in
            het vaandel zijn. Op elk vlak in ons leven roepen we dat we ons
            authentieke zelf willen zijn, maar binnen relaties nemen die ruimte
            vaak juist helemaal niet. De wereld is veranderd, hoe we naar
            relaties kijken ook, waarom dan niet de relatie zo vormgeven dat die
            echt bij je past. Hoe dat er dan ook maar uit ziet. Jarenlang
            samenzijn en toch apart wonen, een thuisblijfvader terwijl de ander
            carrière maakt, een polyamoureuze familie waarin kinderen worden
            opgevoed door meerdere mensen, een vrouw die zowel een relatie heeft
            met een man als een vrouw, een D/s relatie naast een voor de rest
            monogame relatie, een samengesteld gezin en ga zo maar door.
          </p>
        </div>
      </Page>
      <Footer />
    </Layout>
  );
};

export default ModerneRelatiePage;

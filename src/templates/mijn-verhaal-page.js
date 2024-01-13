import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Page from "../components/Page";
import Footer from "../components/Footer";
import Button from "../components/Button";

const MijnVerhaalPage = ({ data }) => {
  return (
    <Layout>
      <Header />
      <Page>
        <div className="w-full p-8 prose">
          <h1 className="font-iskry text-red">MIJN VERHAAL</h1>
          <p>
            Ik ben De Moderne Relatiecoach en mijn naam is Rianne Driezes. Sinds
            2009 heb ik een relatie met Martijn en sinds een aantal jaren hebben
            wij een open relatie. Ik zeg altijd dat als er iets in het leven
            verandert, verandert de relatie mee. Wij hebben een hoop
            veranderingen meegemaakt samen. Van eerste keer samenwonen tot
            samenwonen in het buitenland. Van monogaam naar non-monogaam. Van de
            eerste verliefdheid naar de eerste verliefdheid op iemand anders.
            Van nieuwe banen tot burn-out. Daarnaast brengt de ADD van Martijn
            ook genoeg uitdagingen met zich mee. Hoe een relatie er ook uitziet
            het is altijd uitdagend. Voor ons was de verandering naar een
            non-monogame relatie het meest impactvol.
          </p>
          <p>
            Als je altijd open en transparant communiceren hoog in het vaandel
            hebt staan en de eerste keren moet uitspreken dat je ook gevoelens
            voor iemand hebt of graag de vrijheid wilt om nieuwe dingen te
            ontdekken, dan is dat onwijs spannend. Een volledig nieuwe dimensie
            van open zijn. Je wilt de ander niet kwetsen, maar bovenal wilde ik
            heel graag mezelf mogen. Dan heb je ook nog de buitenwereld die
            meekijkt. We vertelde het aan vrienden en familie, waar sommige het
            begrepen en anderen totaal niet. We kregen opmerkingen als “Gaat het
            dan wel goed in jullie relatie?” en “Dat kan alleen maar fout
            gaan.”.
          </p>
          <p>
            Nu een aantal jaren later heeft het ons juist zoveel moois gebracht.
            Zoals Martijn zegt: “Voor de open relatie was er een bepaalde mate
            van vanzelfsprekendheid, nu met de open relatie heb ik veel meer het
            gevoel dat we telkens weer voor elkaar kiezen.”. Voor mij betekent
            het; we zijn volledig onszelf, alles is en wordt uitgesproken en we
            houden meer dan ooit van elkaar. Dat is voor mij het allerbeste
            gevoel. En dat gun ik anderen ook. Ik ben niet van mening dat
            iedereen voor een non-monogame relatie moet gaan, maar ik ben wel
            van mening dat je de relatie zo mag vormgeven dat het bij jullie
            past. Ik heb een achtergrond als communicatieadviseur en een
            intensieve opleiding tot coach en relatiecoach met verschillende
            coachtrajecten gedaan. En ik help je graag bij het vormgeven van
            jullie relatie. Nieuwsgierig wat ik voor jou of jullie kan
            betekenen? Neem gerust contact met me op!
          </p>
          <p className="font-avallon text-red text-3xl">Rianne Driezes</p>
        </div>
      </Page>
      <Footer />
    </Layout>
  );
};

export default MijnVerhaalPage;

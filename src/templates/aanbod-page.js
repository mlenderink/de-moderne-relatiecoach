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
          <h1 className="font-iskry text-red">AANBOD</h1>
          <p>
            In een coachtraject van De Moderne Relatiecoach ga je in
            verschillende sessies aan de slag met de thema’s die spelen binnen
            jullie relatie. Met belevingsgerichte oefeningen, verschillende
            technieken en huiswerkopdrachten boeken jullie samen resultaat. Hoe
            het coachtraject eruitziet hangt ervan af wat jouw of jullie
            behoefte is. Hieronder een paar belangrijke zaken.
          </p>

          <h2 className="font-iskry text-red">Kennismaking</h2>
          <p>
            We starten altijd met een online vrijblijvende kennismaking van
            ongeveer 30 minuten. Dan gaan we even videobellen en kennismaken.
            Jullie vertellen waar jullie tegenaanlopen en ik vertel wat ik daar
            eventueel in kan betekenen. Aan het eind van de kennismaking zal ik
            aangeven of we wat mij betreft kunnen starten met een coachtraject.
            Na de kennismaking nemen jullie de tijd om even na te denken of dit
            bij jullie past. Als jullie daarna nog steeds enthousiast zijn
            plannen we een intake in.
          </p>
          <Button href="/contact">Plan een intake!</Button>

          <h2 className="font-iskry text-red">Intake</h2>
          <p>
            De intake is een sessie van ongeveer anderhalf uur waarbij jullie de
            ruimte krijgen om alles te delen over waar jullie aan willen werken
            binnen de relatie. Samen werken we tegen het einde van de sessie
            naar een concrete coachvraag die de centraal staat in het
            coachtraject. Dit betekent niet dat er geen andere zaken dan de
            thema’s binnen de coachvraag behandelt kunnen worden in het
            coachtraject. De coachvraag kan ook tijdens het traject bijgeschaafd
            of aangepast worden.
          </p>

          <h2 className="font-iskry text-red">Coachtraject</h2>
          <p>
            Bij een coachtraject ga ik uit van gemiddeld 6-8 sessies op locatie
            in Nijmegen. Dit is natuurlijk volledig afhankelijk van de
            coachvraag en wat we onderweg tegenkomen. In overleg plannen we de
            sessies die nodig zijn. De sessies bestaan grotendeels uit sessies
            met jullie samen, in sommige gevallen is het prettig om ook een
            individuele sessie in te plannen. Dit doen we uiteraard alleen als
            het voor iedereen goed voelt. Daarnaast krijgen jullie als het
            passend is huiswerkopdrachten om extra te oefenen, helderheid te
            krijgen of ter voorbereiding van de volgende sessie. Zo boeken
            jullie niet alleen in de sessies resultaat maar ook thuis.
          </p>

          <h2 className="font-iskry text-red">Ook voor singles?</h2>
          <p>
            Jazeker, De Moderne Relatiecoach is er ook voor singles. Lukt het
            maar niet om de juiste partner te vinden? Wil je voor jezelf
            duidelijk krijgen wat voor relatie bij je past? Zit je vast in
            patronen die je nu toch echt wilt doorbreken? Uiteindelijk begint
            het vormgeven van een relatie die bij je past bij jezelf. Meer
            informatie? <a href="/contact">Plan een kennismaking!</a>
          </p>

          <h2 className="font-iskry text-red">Meerdere partners?</h2>
          <p>
            Moderne relaties bestaan niet altijd uit twee personen, dus ook als
            je meerdere partners hebt kun je bij De Moderne Relatiecoach
            terecht. In overleg stemmen we af welke vorm het beste past. Dit kan
            een afwisseling zijn van individuele, duo en groepssessies. Houd er
            wel rekening mee dat er doorgaans gemiddeld meer sessies nodig zijn
            bij meer personen. Meer informatie?{" "}
            <a href="/contact">Plan een kennismaking!</a>
          </p>

          <h2 className="font-iskry text-red">Investering</h2>
          <p>
            De belangrijkste investering die je doet is de tijd die je
            investeert. Als je het coachtraject ingaat met aandacht voor jezelf
            en voor elkaar haal je er het meeste uit. Houd er dan dus ook
            rekening mee dat je niet alleen tijd nodig hebt voor de sessies,
            maar ook ruimte hebt voor eventuele huiswerkopdrachten, fijne tijd
            samen en goede gesprekken. De kosten per sessie van anderhalf uur
            zijn € 135,- inclusief btw. Voor singles zijn de sessies een uur en
            zijn de kosten per sessie € 90,- inclusief btw.
          </p>
          <p className="italic">
            De Moderne Relatiecoach gaat voor inclusie. Is de prijs de enige
            belemmering voor jullie om de hulp te krijgen die je nodig hebt?
            Neem dan even contact met mij op, dan kijken we samen naar de
            mogelijkheden.
          </p>
        </div>
      </Page>
      <Footer />
    </Layout>
  );
};

export default AanbodPage;

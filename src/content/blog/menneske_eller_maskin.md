---
title: "Maskin eller Menneske"
description: ""
pubDate: "Jun 2 2024"
heroImage: "/menneske_eller_maskin/menneske_eller_maskin2.jpg"
heroImage2: "/menneske_eller_maskin/menneske_eller_maskin.jpg"
heroImage3: "/menneske_eller_maskin/menneske_eller_maskin.jpg"
heroImage4: ""
category: 'Full-stack-utvikler oppdrag for teknologiske installasjoner'
role: "Full-stack utvikling og problemløser for fysisk utstilling"
team: ["Alexander Fjellheim", 'UIB MIX250: "Maskin eller Menneske" ']
duration: "2-3 måneder"
technologies: ["Javascript SPA", "Flask (Python)", "Raspberry PI GPIO"]
---
<section>

<h2>
Jeg ble ansatt av UiB til å bistå med teknisk utvikling til to gruppers bachelorprosjekt i medie- og interaksjonsdesign våren 2024. 
</h2>

<p>
Bachelorprosjektet var en teknologisk utstilling på Universitetsmuseet i Bergen som skulle ta opp <a href="https://teklab.uib.no/artikler/utstilling-kunstig-intelligens-skaper-ambivalens/"> menneskers forhold til kunstig intelligens </a> og var utstilt fra mai 2024 til desember 2024. Jeg var med på å utvikle hovedinstallasjonen til <a href="https://teklab.uib.no/artikler/maskin-eller-menneske/">Maskin eller Menneske</a> og <a href="https://teklab.uib.no/artikler/se-verden-gjennom-oynene-til-ai/">Eyes of AI</a>. Videre skal jeg snakke om prosjektet til "Maskin eller Menneske":
</p>

<p>
Menneske eller maskin-gruppen ønsket å ha en oppstilling som brukte spillifisering til å teste publikums evne til å skille mellom ekte eller falske bilder. 

Jeg fikk tilgang på Figma-filen til studentene, hvor de hadde designet ønsket utseende og prosess for spillet. Gruppen delte en mappe med AI-generere bilder og en annen mappe med ekte bilder. I tillegg fikk jeg ønsket lyder til spillet. 

Jeg valgte å lage en single-page-application med JavaScript som kjører lokalt på en Raspberry PI. PIen kjører også en Flask server som styrer en RGB lyslenke rundt rammen på TVen. Lysene er animert til å lyse opp grønt eller rødt ved riktig eller feil svar.
Når spillet er over og poengsum-animasjonen vises, lyser diodene opp i sync med "progress"-animasjonen og resultatet. Lyslenken er drevet av en 5V 50W ekstern strømforsyning og ble loddet og meg og en annen MIX-student til å bestå av 250 dioder og kunne gå rundt omkretsen av skjermen brukt til installasjonen.
</p>

<h3>
MONTERING
</h3>
<p>
Jeg kom med Raspberry PI'en og ekstra SD-kort med endelige disc-image backups til PIen. Det var litt tricky å montere lyslenken og skjule strømforskyning og ledninger bak skjermen, men dette fikk jeg også hjelp av museumsansatte til.
</p>


<h3>REFLEKSJONER</h3>
<p>
Jeg har brukt mye tid på lyslenken og effektene, men siden veggen ble malt sort, ble effekten lite synlig. Dette var en bommert, men jeg lærte noe interesant i prosessen. I ettertid har museumet også skrudd ned lyden betraktelig da de heller ønsket å ha en felles lyd over hele utstillingen.
</p>

<p>
<a href="https://github.com/AlexanderFjellheim/maskinEllerMenneske_QuizApp">Lenke til prosjektet på GitHub</a>
</p>
<section>

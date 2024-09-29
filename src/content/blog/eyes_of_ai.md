---
title: "Eyes of AI"
description: ""
pubDate: "Jun 3 2024"
heroImage: "/eyes_of_ai/eyes_of_ai.webp"
heroImage2: "/eyes_of_ai/demo.jpg"
heroImage3: "/eyes_of_ai/eyes_of_ai_utstilling.jpg"
heroImage4: "/eyes_of_ai/eyes_of_ai_utstilling2.jpg"
category: 'Full-stack-utvikler oppdrag for teknologiske installasjoner'
role: "Full-stack utvikling og problemløser for fysisk utstilling"
team: ["Alexander Fjellheim", 'UIB MIX250: "Eyes of AI" ']
duration: "2-3 måneder"
technologies: ["Computer Vision (Ultralytics)","Torch, Matplotlib", "Raspberry PI, ESP32", "3D-printing og CAD"]
---
<section>

<h2>
Jeg ble ansatt av UiB til å bistå med teknisk utvikling til to gruppers bachelorprosjekt i medie- og interaksjonsdesign våren 2024. 
</h2>

<p>
Bachelorprosjektet var en teknologisk utstilling på Universitetsmuseet i Bergen som skulle ta opp <a href="https://teklab.uib.no/artikler/utstilling-kunstig-intelligens-skaper-ambivalens/"> menneskers forhold til kunstig intelligens </a> og var utstilt fra mai 2024 til desember 2024. Jeg var med på å utvikle hovedinstallasjonen til <a href="https://teklab.uib.no/artikler/maskin-eller-menneske/">Maskin eller Menneske</a> og <a href="https://teklab.uib.no/artikler/se-verden-gjennom-oynene-til-ai/">Eyes of AI</a>. Videre skal jeg snakke om prosjektet til "Eyes of AI":
</p>



<p>
    Eyes of AI- gruppen ønsket å ha en installasjon som skulle vise frem objektgjenkjenning og bruke det til oppgaver som: 'detection', 'segmentasjon','pose estimation' og 'classification'. Dette skulle videreutvikles til en interaktiv opplevelse for museumsbesøkende.
</p>

<p>
    Utviklingen hadde flere faser der jeg implementerte objektgjennkjenning ved hjelp av forskjellige YOLO-modeller og GUI interface fra Figma prototyper og tilbakemeldinger. I begynnelsen tok vi utgangspunkt i en Raspberry Pi 4, webkamera og forskjellige touchskjermer for at gruppen kunne sette i gang med brukertesting. 
</p>

<p>
    Jeg har benyttet meg av mange gode resurser og dokumentasjon fra Ultralytics og iterativt implementert demoer av YOLO-modeller og funksjoner på tvers av hardware:
</p>
<ul>
    <li>Raspberry PI 4</li>
    <li>Raspberry PI + Google Coral USB TPU</li>
    <li>Nvidia Jetson Nano</li>
    <li>X86 CPU (Laptop)</li>
    <li>Nvidia CUDA (Stasjonær PC med Nvidia GTX 1060)</li>
</ul>

<p>
    Til slutt fikk vi tak i en stasjonær PC med et grafikkort kraftig nok til å gi oss nok through-put til å kjøre modeller som ga oss ønsket kvalitet og oppløsning. Likevel synes jeg at det var utrolig spennende å lære meg kvantisering av modeller og optimalisering for forskjellige runtimes og engines som: ONNX, Pytorch, TensorRT, NCNN og TensorFlow (TF Edge for Coral AI akseleratoren).
</p>
<p>
    Det var et veldig kult prosjekt siden vi kunne kjøre inference på 4 forskjellige YOLO-modeller og bruke dataen til å plotte rammer, tekster, skjelett og segmentasjoner av bilde på toppen av live kamerafeed. I f.eks. 'classification' brukte jeg inference dataen til å produsere ordskyer av objekter og deres confidence verdier.
</p>

<p>
    Hovedelementet i installasjonen ble da en touchskjerm med en GUI til å velge mellom de 4 modusene og få mer informasjon om hvordan de virker, og en 65 tommer skjerm som viser "Eyes of AI", altså live inference fra webcam med overlays og challenges som skal engasjere brukeren til å utforske hva som er mulig og finne evt. begrensninger med objektgjennkjenning.
</p>


<h3>
MONTERING
</h3>
<p>
    I tillegg til fysisk montering av systemene, var det viktig at alt skulle kjøre automatisk og uavbrutt. I denne sluttfasen brukte jeg en god del tid på å skrive systemd tjenester til å auto-starte både GUI og objektgjennkjenningsprogrammene og binde de til riktige skjermer og oppløsninger og riktig xinput mapping av touchskjermen. Det tok mye testing og feilprøving før det ferdige produktet til slutt ble "plug-and-play" og bugs og brukerinteraksjoner som eventuelt kunne avbryte systemet ble patched. 
</p>


<h3>REFLEKSJONER</h3>

<p>
    Dette var et krevende prosjekt der jeg lærte utrolig mye. Jeg hadde et godt samarbeid med gruppen og det var spennende å utforske løsninger og idéer sammen. Lærte mye om fordeler og ulemper ved bruk av forskjellige teknologier og hardware og jeg er veldig fornøyd med resultatet av min tekniske løsning.
</p>
<section>
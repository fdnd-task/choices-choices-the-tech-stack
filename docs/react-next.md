
# Choices, Choices - React/ Next.js

## React/ Next.js (Justify Your Tech Stack pt.2)

Over het onderbouwd kiezen van een tech-stack.

## Doel van deze opdracht

Je leert hoe je systematisch onderzoek doet naar een passende tech-stack voor een opdracht én hoe je deze keuze kunt onderbouwen en presenteren. Vandaag gaan we, na het college van Chanel van Triple/Hypersolid aan de slag met de installatie van React/Next. Elk framework heeft specifieke backend systemen waar het goed mee samenwerkt, probeer vandaag een eerder door jou gebruikte API, bijv. whois.fdnd.nl of de API uit je project, om jouw oefening mee uit te voeren.

## Aanpak

Afgelopen sprints heb je websites gebouwd met tooling: Directus, Sveltekit en Netlify. Zo’n serie tools die met elkaar werken noemen we vaak een *tech-stack*. In deze leertaak onderzoek je wat de voor- en nadelen van verschillende tech-stacks zijn.

Bij het onderzoeken van een tech-stack is het belangrijk de belanghebbenden - in het engels *stakeholders* - goed in acht te nemen. Bij het werken met de tech-stack komen immers meerdere partijen samen. Jouw organisatie die als ontwikkelaar van een systeem ingehuurd wordt, de gebruiker die uiteindelijk met het systeem moet gaan werken én (medewerkers van) de opdrachtgever die het systeem gaat beheren.

Jouw keuze voor een tech-stack heeft enorme impact op alledrie deze partijen en een verkeerde keuze kan een onbruikbaar systeem opleveren, iets wat we natuurlijk ten allen tijden willen voorkomen. Daarom is het verstandig bij het onderzoeken van een mogelijke tech-stack verschillende invalshoeken te gebruiken.

In jouw onderzoek ga je van de drie eerdergenoemde invalshoeken uit bij het onderzoeken van de gebruikservaring:
- [User eXperience (UX)](#1-user-experience)
- [Developer eXperience (DX)](#2-developer-experience)
- [Content management eXperience (CX)](#3-content-management-experience)

N.B.: Wellicht helpt het je om een paar van de [bronnen](#bronnen) door te lezen om grip te krijgen op waar we het over hebben. Dat gaat je helpen bij het uitvoeren van onderstaande opdrachten.

#### 1. User eXperience

Voor de UX is het belangrijk te weten wie de gebruikers zijn van de website, wat voor apparaten zij gebruiken en of ze bv snel internet hebben of juist niet. Als je het antwoord op bovenstaande vragen hebt onderzoek je wat voor type pagina jouw tech-stack genereert. Is het heel zwaar op 3d animatie? Vraagt de frontend veel javascript rekenkracht? Is er veel netwerkverkeer bij het gebruik van jouw toepassing? Kan het omgaan met het wegvallen van het internet of is er een continue verbinding nodig?

Denk aan de door jou in het verleden bij FDND opgedane kennis omtrent UX bij het uitvoeren van dit onderzoek.

##### Aanpak
1. Beschrijf de verschillende type personen in de doelgroep en bepaal wat de randvoorwaarden zijn die door bijvoorbeeld hun devices of tech-geletterdheid gesteld worden.
2. Onderzoek de tech-stack op user experience. Bijvoorbeeld door het doen van een snelle WCAG audit met lighthouse of Axe of een device test met een van de devices uit het device lab (de plastic koffers). Houdt je eerdere ervaring bij FDND met betrekking tot UX in het achterhoofd.
3. Documenteer je bevindingen in een Gist!

#### 2. Developer eXperience

De ontwikkelervaring of *developer experience* wordt bepaald aan de hand van een aantal criteria.

De basis van de ontwikkelervaring ligt in de **functie** van een ontwikkeltool. Een mooie interface of een marketingverhaal doen niet zo veel als de functionaliteit slecht is. Als het niet werkt, is er geen DX.

Naast dat de tool moet werken, is het belangrijk dat de tool goede performance heeft en **betrouwbaar** is. Elk softwareproduct heeft bugs, maar hoe daar mee om gegaan wordt is belangrijk. Is er een groot ontwikkelteam en zijn er regelmatig updates en releases dan verhoogt dat de ontwikkelervaring.

**Gemak** gaat bij DX niet alleen over het gebruiken van de tool zelf maar ook over documentatie, communities, knowledge bases, shortcuts, snippets, filters, etcetera. Al deze dingen dragen bij aan ontwikkelervaring.

Tenslotte is een **heldere interface** (bijv. API) waar je tegen aan programmeert van onschatbare waarde. Als je niet weet wat je kunt verwachten werk je niet lekker. Helderheid vergroot de ontwikkelervaring.

##### Aanpak

1. Onderzoek de tech-stack op developer experience. Het beste is een klein project met de tech-stack proberen te realiseren, bijvoorbeeld een oude leertaak.
2. Documenteer je bevindingen in een Gist! Bijvoorbeeld door genoemde punten te beschrijven: functies, betrouwbaarheid, gemak en helderheid.

#### 3. Content Management eXperience

Het CMS gaat gebruikt worden door de opdrachtgevers of andere content beheerders. Of de beheerders jouw CMS kunnen gebruiken hangt af van het gebruiksgemak en de benodigde technische capaciteit.

Wat voor eisen stelt jouw tech-stack aan de beheerder van het systeem? Hebben ze genoeg aan domein-kennis van hun eigen bedrijf of moeten ze een deel van jouw skills als frontend designer/developer omarmen voor ze iets kunnen toevoegen of aanpassen?

##### Aanpak

1. Onderzoek de tech-stack op content management experience. Vraag thuis of een familielid of kennis content kan toevoegen in het door jou opgezette systeem en vraag of ze dat prettig vinden..
2. Documenteer je bevindingen in een Gist!

### Bronnen
Hier wat bronnen die je kunnen helpen bij het structureren van je onderzoek:

- https://medium.com/swlh/what-is-dx-developer-experience-401a0e44a9d9
- https://www.softermii.com/blog/10-tips-in-choosing-the-best-tech-stack-for-your-web-application
- https://symfony.com/ten-criteria
- https://www.velvetech.com/blog/choosing-project-tech-stack-basic-principles/
- https://tray.io/blog/align-revenue-ops-tech-stack
- https://www.zachleat.com/web/site-generator-review/  

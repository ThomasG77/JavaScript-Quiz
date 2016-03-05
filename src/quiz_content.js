var quiztitle = "OpenData Quiz";

/**
* Set the information about your questions here. The correct answer string needs to match
* the correct choice exactly, as it does string matching. (case sensitive)
*
*/
var quiz = [{
    "question": "En quoi consiste une démarche d'ouverture de données « open data » ?",
    "image" :   "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
    "choices": [
        "Publier en ligne un grand volume de données",
        "Publier en ligne des données brutes librement accessibles et réutilisables par tous",
        "Publier en ligne des données secrètes afin de les exposer au plus grand nombre"
    ],
    "correct"       :   "Publier en ligne des données brutes librement accessibles et réutilisables par tous",
    "explanation"   :   "Il s'agit de publier en ligne des données brutes librement accessibles et réutilisables par tous. Un grand volume de donnée en ligne ne garantit les possibilités de réutilisation et publier des données secrètes peut enfreindre le droit à la vie privée. Une démarche d'ouverture de données  « open data » nécessite de respecter des règles juridiques."
},
{
    "question": "Quelles sont les données concernées par une démarche d'ouverture de données publiques ?",
    "image" :   "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
    "choices": [
      "Toutes les données des réseaux sociaux",
      "Toutes les données hormis les données personnelles",
      "Toutes les données produites et détenues par les services publics, sauf exceptions"
    ],
    "correct": "Toutes les données hormis les données personnelles",
    "explanation": "Dans l'idéal, toutes les données hormis les données personnelles. Dans les faits, il s'agit généralement des données publiques.."
},
{
    "question": "Quelle est l'url d'accès à la plateforme open data du département de Loire-Atlantique ?",
    "image" :   "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
    "choices": [
      "open-data.loire-atlantique.fr",
      "opendata.loire-atlantique.fr",
      "data.loire-atlantique.fr"
    ],
    "correct": "data.loire-atlantique.fr",
    "explanation": "Tous les portails open data couvrant les Pays de la Loire commencent par \"data.\". Le choix d'un sous-domaine restant arbitaire, le mieux est tester."
},
{
    "question": "Quel est l'intrus ?",
    "image" :   "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
    "choices": [
      "CADA",
      "CNIL",
      "CAF"
    ],
    "correct": "CAF",
    "explanation": "C'est la CAF, un organisme de droit privé ayant engagé une démarche open data en 2015. Les deux premières entités sont des autorités administratives indépendantes qui contribuent à réguler le mouvement open data."
},
{
    "question": "Parmi ces licences d'utilisation, lesquelles ne peuvent pas être associées à des données open data ?",
    "image" :   "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
    "choices": [
      "CC-BY-NC, LO",
      "ODBL, LO",
      "LO, CC-BY-SA"
    ],
    "correct": "CC-BY-NC, LO",
    "explanation": "C'est CC-BY-NC, LO. Mélanger une licence ayant des clauses non commerciales (NC) avec une licence qui oblige l'échange réciproque n'est pas possible juridiquement bien que techniquement faisable."
},
{
    "question": "Quel format n'est pas open data ?",
    "choices": [
      "CSV",
      "PDF",
      "RDF"
    ],
    "correct": "PDF",
    "explanation": "Il s'agit du PDF. Contrairement au CSV et au RDF, il ne permet pas d'accéder aux données sous forme structurée. Il n'est pas lisible par les machines de manière automatique."
},
{
    "question": "Quel est l'intrus dans les réutilisateurs actifs de données publiques en France ?",
    "choices": [
      "Regards Citoyens",
      "OpenStreetMap",
      "Wikimedia",
      "Libertic",
      "Le FCNantes"
    ],
    "correct": "Le FCNantes",
    "explanation": "Il s'agit du FCNantes. Celui-ci n'a pas engagé de démarche open data. Il n'est pas un réutilisateur, encore moins actif."
},
{
    "question": "Quelle est l'adresse de la plateforme nationale de données publiques open data ?",
    "choices": [
      "opendatagouv.fr",
      "data.gouv.fr",
      "data.france.fr"
    ],
    "correct": "data.gouv.fr",
    "explanation": "C'est data.gouv.fr. En effet, les domaines du gouvernement finissent en gouv.fr. Seul le deuxième répond à ce critère."
},
{
    "question": "Lequel de ces élus n'a jamais publié de données ouvertes de sa ville ?",
    "choices": [
      "Jean-Marc Ayrault",
      "Nathalie Kosciusko-Morizet",
      "Martine Aubry"
    ],
    "correct": "Martine Aubry",
    "explanation": "C'est Martine Aubry. En tant qu'élue de Lille, elle n'a pas ouvert de données sur son territoire."
},
{
    "questions": "Quelle commune ou intercommunalité n'a pas de portail open data?",
    "choices": [
      "Aix-En-Provence",
      "Nantes",
      "Paris",
      "Grenoble",
      "Saint-Malo",
      "Aucune"
    ],
    "correct": "Martine Aubry",
    "explanation": "Aix-En-Provence. Bien que la ville publie des données en open data sur http://opendata.regionpaca.fr, elle ne dispose pas d'un portail en propre. Cela n'est pas dû particulièrement à un absence d'engagement mais à un choix stratégique: certaines collectivités publient leurs données par exemple sur http://data.gouv.fr"
}];

exports.quiztitle = quiztitle
exports.quiz = quiz

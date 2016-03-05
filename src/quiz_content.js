var quiztitle = "Quiz Title";

/**
* Set the information about your questions here. The correct answer string needs to match
* the correct choice exactly, as it does string matching. (case sensitive)
*
*/
var quiz = [
{
    "question": "En quoi consiste une démarche d'ouverture de données « open data »?",
    "image" :   "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
    "choices": [
        "Publier en ligne un grand volume de données",
        "Publier en ligne des données brutes librement accessibles et réutilisables par tous",
        "Publier en ligne des données secrètes afin de les exposer au plus grand nombre"
    ],
    "correct"       :   "Publier en ligne des données brutes librement accessibles et réutilisables par tous",
    "explanation"   :   "Un grand volume de donnée en ligne qui n'est pas réutilisable n'est permet pas de créer de nouveax usage, publier des données secrètes peut enfreindre le droit à la vie privée. Une démarche d'ouverture de données  « open data » nécessite de respecter les règles juridiques. C'est ce qu'on fait avec la publication en ligne des données brutes librement accessibles et réutilisables par tous"
},
    {
        "question"      :   "Q1: Who came up with the theory of relativity?",
        "image"         :   "http://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/220px-Albert_Einstein_Head.jpg",
        "choices"       :   [
                                "Sir Isaac Newton",
                                "Nicolaus Copernicus",
                                "Albert Einstein",
                                "Ralph Waldo Emmerson"
                            ],
        "correct"       :   "Albert Einstein",
        "explanation"   :   "Albert Einstein drafted the special theory of relativity in 1905.",
    },
    {
        "question"      :   "Q2: Who is on the two dollar bill?",
        "image"         :   "http://upload.wikimedia.org/wikipedia/commons/thumb/9/94/US_%242_obverse-high.jpg/320px-US_%242_obverse-high.jpg",
        "choices"       :   [
                                "Thomas Jefferson",
                                "Dwight D. Eisenhower",
                                "Benjamin Franklin",
                                "Abraham Lincoln"
                            ],
        "correct"       :   "Thomas Jefferson",
        "explanation"   :   "The two dollar bill is seldom seen in circulation. As a result, some businesses are confused when presented with the note.",
    },
    {
        "question"      :   "Q3: What event began on April 12, 1861?",
        "image"         :   "",
        "choices"       :   [
                                "First manned flight",
                                "California became a state",
                                "American Civil War began",
                                "Declaration of Independence"
                            ],
        "correct"       :   "American Civil War began",
        "explanation"   :   "South Carolina came under attack when Confederate soldiers attacked Fort Sumter. The war lasted until April 9th 1865.",
    },

];

exports.quiztitle = quiztitle
exports.quiz = quiz

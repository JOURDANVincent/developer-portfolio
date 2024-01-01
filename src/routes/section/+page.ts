/** @type {import('./$types').PageLoad} */
export async function load() {
    
    return {

        skills: {
            professional: [

                {
                    title: "Java",
                    src: "/images/svg/brand_icons/java.svg",
                    level: 50,
                },
                {
                    title: "Spring Boot",
                    src: "/images/svg/brand_icons/spring-boot.svg",
                    level: 40,
                },
                {
                    title: "Hibernate",
                    src: "/images/svg/brand_icons/hibernate.svg",
                    level: 20,
                },
                {
                    title: "SQL",
                    src: "/images/svg/brand_icons/mysql.svg",
                    level: 70,
                },
                {
                    title: "Ionic",
                    src: "/images/svg/brand_icons/ionic.svg",
                    level: 30,
                },
                {
                    title: "Angular",
                    src: "/images/svg/brand_icons/angular.svg",
                    level: 65,
                },
                {
                    title: "Firebase",
                    src: "/images/svg/brand_icons/firebase.svg",
                    level: 50,
                },
                {
                    title: "JavaScript",
                    src: "/images/svg/brand_icons/javascript.svg",
                    level: 75,
                },
                {
                    title: "TypeScript",
                    src: "/images/svg/brand_icons/typescript.svg",
                    level: 50,
                },
                {
                    title: "Linux",
                    src: "/images/svg/brand_icons/linux.svg",
                    level: 30,
                },
                {
                    title: "HTML",
                    src: "/images/svg/brand_icons/html5.svg",
                    level: 90,
                },
                {
                    title: "CSS",
                    src: "/images/svg/brand_icons/css-3.svg",
                    level: 80,
                },
            ],
    
            mancraft: [
                
               
                {
                    title: "React Native",
                    src: "/images/svg/brand_icons/react-native.svg",
                    level: 80,
                },
                {
                    title: "Realm",
                    src: "/images/svg/brand_icons/realm.svg",
                    level: 75,
                },
                {
                    title: "Redux",
                    src: "/images/svg/brand_icons/redux.svg",
                    level: 70,
                },
                {
                    title: "Svelte JS",
                    src: "/images/svg/brand_icons/svelte.svg",
                    level: 75,

                 },
                {
                    title: "React",
                    src: "/images/svg/brand_icons/react.svg",
                    level: 70,
                },
                {
                    title: "Mongo DB",
                    src: "/images/svg/brand_icons/nodejs.svg",
                    level: 60,
                },
                {
                    title: "Express JS",
                    src: "/images/svg/brand_icons/express-js.svg",
                    level: 70,
                },
                {
                    title: "Node JS",
                    src: "/images/svg/brand_icons/nodejs2.svg",
                    level: 30,
                },
                {
                    title: "PHP",
                    src: "/images/svg/brand_icons/php.svg",
                    level: 60,
                },           
            ], 
        },

        experiences: [
            {
                date: "2022",
                title: "Développeur Java / Angular",
                place: "CGI - Amiens",
                desc: [
                    "Développement évolutions / Maintenance applications web & mobile",
                    // "Développement des évolutions et correctifs sur VM Linux",
                    "Démonstration / Test sur environnement d'intégration dockérisé",
                    // "Travail en équipe suivant les méthodes agiles",
                    // "Utilisation IntelliJ / VS Code / Android Studio / GitLab",
                ],
                techno: {
                    web: "HTML , CSS, JavaScript, JAVA",
                    mobile: "Angular, Ionic, TypeScript",
                    desktop: "Electron, Angular, TypeScript"
                }
            },
        ],

        studies: [
            {
               date: "2021",
               title: "Formation React Native",
               place: "La MANU - Amiens",
               desc: "Maîtrise du framework React Native",
               techno: "RN, JSX, Redux, Mongo DB"
            },
            {
               date: "2020-2021",
               title: "Formation Web & Web Mobile",
               place: "La MANU - Amiens",
               desc: "RNCP 31114, Niveau 5, Bac+2",
               techno: "HTML, CSS, JS, PHP, SQL"
            },
           //  {
           //     date: "2002-2004",
           //     title: "BTS - Mécanique & Automatisme Industriel",
           //     place: "CFAI Somme | VALEO - Amiens",
           //     desc: "Diplôme en alternance obtenu en 2004",
           //     // techno: "Télémécanique, Siemens"
           //     techno: "",
           //  },
        ],

        resume: [
            "Développement et maintenance de site du Ministère de la Transition Ecologique",
            "Travaille en équipe suivant les méthodes agiles",
            "Développement des évolution sur VM Linux",
            "Utilisation du dépôt GitLab",
            "Démonstration client / test sur environnement d'intégration",
            "Visites mon profil Linkedin pour plus d'info ou simplement contactes moi"
        ],

    }
}
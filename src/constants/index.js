import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,    
    oxia,
    nextmedia,
    webpoint,
    comunique,
    ccnhorse,
    ci,
    git,
    github,
    html,
    javascript,
    linkedin,
    postgresql,    
    mui,
    nextjs,
    nodejs,
    argentoba,
    ccva,
    dajerco,
    promises,
    ftm,
    react,
    linux,    
    django,    
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    sass
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: postgresql,
        name: "Postgre SQL",
        type: "Database",
    },    
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },       
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: linux,
        name: "Linux",
        type: "Frontend",
    }    
];

export const experiences = [
    {
        title: "IT Solutions Manager",
        company_name: "Centro Cuesta Nacional",
        icon: ccnhorse,
        iconBg: "#a2d2ff",
        date: "Dec 2021 - Present",
        points: [
        "Leading the design, development, and maintenance of SAP systems, aligning them with evolving business requirements.",
        "Expertise in web technologies like XML, JSON, REST, OData, Web Services, SOAP, and Certificates.",
        "Skilled in various SAP modules including SD, FI, CO-PA, MM, WM, and HCM, enhancing process optimization and integration.",
        "Building strong collaborations with global teams and stakeholders for successful project execution."
        ],
    },
    {
        title: "Co-manager SAP Profitability Analysis, Financial Accounting and Human Resources",
        company_name: "César Iglesias, S.A.",
        icon: ci,
        iconBg: "#d3d3d3",
        date: "Mar 2020 - Dec 2021",
        points: [
        "Implemented ZKTeco facial recognition in attendance devices, reducing overtime costs by 20% and manual entries by 98%.",
        "Developed an e-Commerce integrated web portal with SAP SD/HR/FI-AR Modules, increasing sales by 407%.",
        "Executed Foreign Currency Valuation for USD/EUR/JPY, providing essential local currency data.",
        "Led the ABAP development team, ensuring high-quality software solutions."
        ],
    },
    {
        title: "Project Manager",
        company_name: "Centro Cuesta Nacional",
        icon: ccnhorse,
        iconBg: "#add8e6",
        date: "Jan 2010 - Dec 2017",
        points: [
        "Implemented SAP HANA, Data Modeling, and Web Intelligence reports.",
        "Developed BI Dashboards for HR, providing critical workforce insights.",
        "Trained in SAP BW Enterprise Data Warehousing and Business Objects.",
        "Developed SAP and energy measurement application interfaces for leased premises.",
        "Assisted in implementing SD & MM modules, and conducted data migration and user training."
        ],
    },
    {
        title: "Co-owner, Project Manager",
        company_name: "Webpoint",
        icon: webpoint,
        iconBg: "#90ee90",
        date: "Jul 2007 - Aug 2009",
        points: [
        "Managed client-supplier relations and executed impactful web development projects.",
        "Led a team in agile development practices and developed multilayer applications.",
        "Analyzed costs, created business plans, and negotiated a 36% share acquisition by DGTEC GROUP.",
        "Implemented W3C certifications and WCAG for websites."
        ],
    },
    {
        title: "Project Manager",
        company_name: "Comunique",
        icon: comunique,
        iconBg: "#fff000",
        date: "Jan 2007 - May 2007",
        points: [
        "Managed projects like Induveca, Provaltur, Autoplaza, and Madesol, overseeing all development stages.",
        "Gained experience in AJAX, Flash (ActionScript), PHP, XML, MySQL, and JavaScript programming.",
        "Implemented MVC architecture using CakePHP in the Madesol project."
        ],
    },
    {
        title: "IT Director",
        company_name: "Oxia Group",
        icon: oxia,
        iconBg: "#fff6c1",
        date: "Sep 2005 - Jan 2007",
        points: [
        "Acquired expertise in LAMP stack and PostgreSQL.",
        "Managed the 'FIDELIUM' loyalty system, handling a million daily transactions and over 70,000 cardholders.",
        "Led a diverse team of designers, developers, and technicians.",
        "Received specialized training in smartcard reader programming in France."
        ],
    },
    {
        title: "Software Consultant",
        company_name: "Nextmedia Dominicana",
        icon: nextmedia,
        iconBg: "#a2d2ff",
        date: "Jan 2005 - Sept 2006",
        points: [
            "Advanced and refined C# programming skills, specializing in developing robust web applications.",
            "Played a key role in the development and deployment of the DGII Marbetes project, an online platform for vehicle license plate renewal for Dirección General de Impuestos Internos.",
            "Significantly contributed to the e-banking system for Asociación La Nacional de Ahorros y Préstamos (ALNAP), demonstrating proficiency in .NET framework, and integration with IBM AS/400 systems.",
            "Managed complex databases using DB2, ensuring data integrity, efficiency, and scalability.",
            "Collaborated effectively with cross-disciplinary teams, enhancing communication and project success.",
            "Implemented innovative solutions, optimizing the user experience and system performance."
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/gmarte',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/gmarte',
    }
];

export const projects = [
    {
        iconUrl: argentoba,
        theme: 'btn-back-red',
        name: 'Argento BA',
        description: 'Developed The website serves as a real estate platform showcasing properties available for sale or rent, particularly in the Dominican Republic.',
        link: 'https://argentoba.com/',
    },
    {
        iconUrl: dajerco,
        theme: 'btn-back-blue',
        name: 'Dajer & CO',
        description: "Developed and launched a dynamic web platform for a prominent architecture firm focused on AEC industry outsourcing. The platform was designed to both highlight the company's services and enhance their operational efficiency.",
        link: 'https://www.dajerstudio.com/',
    },
    {
        iconUrl: ftm,
        theme: 'btn-back-green',
        name: 'Family Task Manager',
        description: 'Web platform that allows parents to assign chores and responsibilities to their children and reward them for completion.',
        link: 'https://ftm-v2.vercel.app/',
    },
    {
        iconUrl: ccva,
        theme: 'btn-back-black',
        name: 'Assisted Sales',
        description: 'The Assisted Sales project is a React Native application developed with the Expo framework, designed to interface with an SAP ERP 6.0 backend. The setup implies a robust enterprise mobile application capable of leveraging the vast functionalities and data offered by the SAP system, ensuring a cohesive experience for its users.',
        link: 'https://www.youtube.com/watch?v=zYN5LaIKr6o',
    },    
    {
        iconUrl: promises,
        theme: 'btn-back-pink',
        name: 'Promises',
        description: 'This web application is to provide a transparent and accountable system for tracking and reporting on the promises made by politicians to the public.',
        link: 'https://github.com/gmarte/promesas/',
    },    
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Sigan Viendo web scrapper',
        description: '"Sigan Viendo" is a web scraping application designed to gather and analyze information from Dominican Republic government websites.',
        link: 'https://github.com/gmarte/gobdo',
    }
];
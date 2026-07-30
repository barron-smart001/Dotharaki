const coursesData = [
  {
    id: 1,
    title: "React Fundamentals",
    level: "Beginner",
    levelColor: "green", // Customize based on your styling system
    description: "Learn the core mental model behind React — components, props, state, and hooks — by building real interfaces from scratch.",
    instructor: {
      name: "Jane Doe",
      initials: "JD"
    },
    rating: 4.8,
    duration: "8 hours",
    price: 49.99
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    level: "Advanced",
    levelColor: "purple",
    description: "Go beyond the basics with closures, prototypes, async patterns, and the language features that power modern frameworks.",
    instructor: {
      name: "John Smith",
      initials: "JS"
    },
    rating: 4.7,
    duration: "10 hours",
    price: 55.99
  },
  {
    id: 3,
    title: "UI/UX Design Basics",
    level: "Beginner",
    levelColor: "green",
    description: "Foundations of usable, accessible interface design — from user research to wireframes to high-fidelity mockups.",
    instructor: {
      name: "Amara Chen",
      initials: "AC"
    },
    rating: 4.6,
    duration: "6 hours",
    price: 39.99
  },
  {
    id: 4,
    title: "Python for Data Science",
    level: "Beginner",
    levelColor: "green",
    description: "Get hands-on with Python, pandas, and NumPy to clean, explore, and visualize real-world datasets.",
    instructor: {
      name: "Sarah Jenkins", 
      initials: "SJ"
    },
    rating: 4.9,
    duration: "12 hours",
    price: 59.99
  },
  {
    id: 5,
    title: "Machine Learning Foundations",
    level: "Intermediate",
    levelColor: "blue",
    description: "Understand the math and intuition behind modern Machine Learning models while implementing them from scratch.",
    instructor: {
      name: "Michael Chang",
      initials: "MC"
    },
    rating: 4.8,
    duration: "14 hours",
    price: 69.99
  },
  {
    id: 6,
    title: "Data Visualization with D3.js",
    level: "Intermediate",
    levelColor: "blue",
    description: "Turn raw data into compelling, interactive, and beautiful web charts using the industry-standard D3 library.",
    instructor: {
      name: "Elena Rostova",
      initials: "ER"
    },
    rating: 4.5,
    duration: "9 hours",
    price: 44.99
  },

    {
    id: 7,
    title: "Full-Stack Web Development with Node.js",
    level: "Intermediate",
    levelColor: "blue",
    description: "Build and deploy a complete web application with Express, REST APIs, and a relational database.",
    instructor: {
      name: "John Smith",
      initials: "JS"
    },
    rating: 4.7,
    duration: "14 hours",
    price: 89.99
  },
  {
    id: 8,
    title: "Mobile App Development with React Native",
    level: "Intermediate",
    levelColor: "blue",
    description: "Use your React skills to build cross-platform mobile apps for iOS and Android from a single codebase.",
    instructor: {
      name: "Michael Okafor",
      initials: "MO"
    },
    rating: 4.6,
    duration: "11 hours",
    price: 79.99
  },
  {
    id: 9,
    title: "iOS Development with Swift",
    level: "Beginner",
    levelColor: "green",
    description: "Design and build native iOS apps with Swift and SwiftUI, from your first view to the App Store.",
    instructor: {
      name: "Grace Kim",
      initials: "GK"
    },
    rating: 4.7,
    duration: "10 hours",
    price: 69.99
  },
  {
    id: 10,
    title: "Android Development with Kotlin",
    level: "Beginner",
    levelColor: "green",
    description: "Build modern Android applications with Kotlin, Jetpack Compose, and Material Design.",
    instructor: {
      name: "Michael Okafor",
      initials: "MO"
    },
    rating: 4.6,
    duration: "10 hours",
    price: 69.99
  },
  {
    id: 11,
    title: "Advanced UI Design Systems",
    level: "Advanced",
    levelColor: "purple",
    description: "Design and document scalable component libraries and design systems used by product teams.",
    instructor: {
      name: "Liam O’Connor",
      initials: "LO"
    },
    rating: 4.8,
    duration: "8 hours",
    price: 79.99
  },
  {
    id: 12,
    title: "Figma for Product Designers",
    level: "Beginner",
    levelColor: "green",
    description: "Master Figma from first shapes to interactive, developer-ready prototypes.",
    instructor: {
      name: "Amara Chen",
      initials: "AC"
    },
    rating: 4.6,
    duration: "5 hours",
    price: 34.99
  },
  {
    id: 13,
    title: "Digital Marketing Essentials",
    level: "Beginner",
    levelColor: "green",
    description: "Plan and run marketing campaigns across search, social, and email using proven frameworks.",
    instructor: {
      name: "Priya Sharma",
      initials: "PS"
    },
    rating: 4.5,
    duration: "6 hours",
    price: 39.99
  },
  {
    id: 14,
    title: "SEO & Content Strategy",
    level: "Intermediate",
    levelColor: "blue",
    description: "Rank higher on search engines with keyword research, on-page SEO, and a repeatable content strategy.",
    instructor: {
      name: "Priya Sharma",
      initials: "PS"
    },
    rating: 4.6,
    duration: "7 hours",
    price: 49.99
  },
  {
    id: 15,
    title: "Business Analytics Fundamentals",
    level: "Beginner",
    levelColor: "green",
    description: "Use spreadsheets and BI tools to turn business data into decisions leadership can act on.",
    instructor: {
      name: "David Osei",
      initials: "DO"
    },
    rating: 4.4,
    duration: "6 hours",
    price: 44.99
  },
  {
    id: 16,
    title: "Project Management Professional Prep",
    level: "Intermediate",
    levelColor: "blue",
    description: "Learn the frameworks, terminology, and practice questions to prepare for a PM certification exam.",
    instructor: {
      name: "David Osei",
      initials: "DO"
    },
    rating: 4.7,
    duration: "10 hours",
    price: 69.99
  },
  {
    id: 17,
    title: "Introduction to Cybersecurity",
    level: "Beginner",
    levelColor: "green",
    description: "Understand core security concepts, common attack vectors, and how to think like a defender.",
    instructor: {
      name: "Elena Petrova",
      initials: "EP"
    },
    rating: 4.6,
    duration: "7 hours",
    price: 49.99
  },
  {
    id: 18,
    title: "Ethical Hacking Fundamentals",
    level: "Intermediate",
    levelColor: "blue",
    description: "Practice penetration-testing techniques in safe lab environments to find and fix vulnerabilities.",
    instructor: {
      name: "Elena Petrova",
      initials: "EP"
    },
    rating: 4.8,
    duration: "12 hours",
    price: 89.99
  },
  {
    id: 19,
    title: "Cloud Computing with AWS",
    level: "Intermediate",
    levelColor: "blue",
    description: "Design, deploy, and scale applications on AWS using core compute, storage, and networking services.",
    instructor: {
      name: "Tom Becker",
      initials: "TB"
    },
    rating: 4.7,
    duration: "11 hours",
    price: 79.99
  },
  {
    id: 20,
    title: "DevOps & CI/CD Pipelines",
    level: "Advanced",
    levelColor: "purple",
    description: "Automate build, test, and deployment workflows with modern CI/CD tools and containerization.",
    instructor: {
      name: "Tom Becker",
      initials: "TB"
    },
    rating: 4.8,
    duration: "13 hours",
    price: 89.99
  }

];

export default coursesData;

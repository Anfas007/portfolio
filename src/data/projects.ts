import doctorImg from "../assets/images/projects/health-passport/doctor.png";
import mobileImg from "../assets/images/projects/health-passport/mobile.png";
import qrImg from "../assets/images/projects/health-passport/qr.png";
import emergencyImg from "../assets/images/projects/health-passport/emergency.png";
import emergency2Img from "../assets/images/projects/health-passport/emergency2.png";
import architectureImg from "../assets/images/projects/health-passport/architecture.png";


export const projects = [
  {
    id: "health-passport",

    title: "AI Emergency Health Passport",

    shortDescription:
      "AI-powered healthcare platform enabling secure QR-based emergency access to patient medical records.",

    overview:
      "Developed a healthcare platform that enables first responders and hospitals to securely access emergency patient records through QR codes while preserving patient privacy.",

    problem:
      "During medical emergencies, hospitals often lack instant access to critical patient information such as allergies, medications and medical history, delaying treatment.",

    solution:
      "Designed an AI-powered Emergency Health Passport using FastAPI, Flutter, React and MongoDB with secure QR-based emergency access and AI-assisted clinical decision support.",

    technologyStack: [
  {
    category: "Frontend",
    technologies: [
      "Flutter",
      "React",
    ],
  },
  {
    category: "Backend",
    technologies: [
      "Python",
      "FastAPI",
    ],
  },
  {
    category: "Database",
    technologies: [
      "MongoDB",
      "FHIR",
    ],
  },
  {
    category: "Authentication",
    technologies: [
      "JWT",
    ],
  },
  {
    category: "AI / ML",
    technologies: [
      "Scikit-learn",
      "SHAP",
    ],
  },
],

    features: [
      "Secure QR-based emergency access to patient medical records",
  "AI-generated emergency medical summary",
  "Role-based authentication for patients and doctors",
  "Interactive doctor dashboard for consultations",
  "Hospital dashboard for emergency case management",
  "Complete medical history and prescriptions",
  "Drug interaction and allergy alerts"
    ],

    challenges: [
  "Designing secure emergency access while preserving patient privacy.",
  "Implementing role-based authentication for patients, doctors, hospitals and emergency responders.",
  "Designing scalable REST APIs for seamless communication between mobile and web applications.",
  "Structuring MongoDB collections for efficient storage and retrieval of medical records.",
],

  keyLearnings: [
  "Designed and developed scalable REST APIs using FastAPI.",
  "Implemented JWT-based authentication and role-based access control.",
  "Integrated Flutter mobile and React web applications with a shared backend.",
  "Designed MongoDB collections for efficient healthcare data management.",
  "Improved understanding of full-stack application architecture and API design.",
],
  
  images: [
  {
    src: doctorImg,
    title: "Doctor Dashboard",
    description:
      "Doctors can access patient records, consultation history and emergency requests from a single dashboard.",
  },

  {
    src: mobileImg,
    title: "Patient Mobile App",
    description:
      "Patients manage their health profile, prescriptions and emergency QR code through the Flutter application.",
  },

  {
    src: qrImg,
    title: "Emergency QR Access",
    description:
      "A unique QR code allows authorized emergency responders to securely retrieve critical medical information.",
  },

  {
    src: emergencyImg,
    title: "Emergency Consultation",
    description:
      "Healthcare professionals can instantly review allergies, medications and patient history during emergencies.",
  },

  {
    src: emergency2Img,
    title: "AI Medical Summary",
    description:
      "AI generates a concise medical summary highlighting allergies, chronic conditions and important clinical insights.",
  },
],

 architectureImage: architectureImg,

 github: "https://github.com/Anfas007/ai-emergency-health-passport",

    demo: "#"
  },

  {
  id: "attendance",

  title: "Smart Attendance Management System",

  shortDescription:
    "A face recognition-based attendance management system that automates student attendance with real-time recognition and reporting.",

  overview:
    "Developed a web-based attendance management system using Django and OpenCV to automate attendance recording through face recognition. The system improves accuracy, reduces manual effort, and provides administrators with attendance reports and student management features.",

  problem:
    "Traditional attendance systems rely on manual roll calls or paper-based records, which are time-consuming, prone to human error, and vulnerable to proxy attendance.",

  solution:
    "Built a face recognition-based attendance system using Django, OpenCV, and MySQL that automatically identifies students, marks attendance in real time, and generates attendance reports through an intuitive admin dashboard.",

  technologies: [
    "Python",
    "Django",
    "OpenCV",
    "MySQL"
  ],

  features: [
    "Face Recognition Attendance",
    "Student Registration",
    "Automatic Attendance Recording",
    "Attendance Reports",
    "Admin Dashboard",
    "Student Management"
  ],

  challenges: [],

  keyLearnings: [],

  images: [],

  architectureImage:"#",

  github: "#",

  demo: "#"
}
];
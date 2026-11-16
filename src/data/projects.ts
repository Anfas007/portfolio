import doctorImg from "../assets/images/projects/health-passport/doctor.png";
import mobileImg from "../assets/images/projects/health-passport/mobile.png";
import qrImg from "../assets/images/projects/health-passport/qr.png";
import emergencyImg from "../assets/images/projects/health-passport/emergency.png";
import emergency2Img from "../assets/images/projects/health-passport/emergency2.png";
import architectureImg from "../assets/images/projects/health-passport/architecture.png";
import attendanceImg from "../assets/images/projects/attendance/attendance.png";
import loginImg from "../assets/images/projects/attendance/login.png";
import adminImg from "../assets/images/projects/attendance/admin.png";
import faceRecognitionImg from "../assets/images/projects/attendance/faceRecognition.png";
import attendanceReportImg from "../assets/images/projects/attendance/attendanceReport.png"


export const projects = [
  {
    id: "health-passport",

    title: "AI Emergency Health Passport",

    shortDescription:
      "A healthcare platform that helps doctors and first responders access important patient information during emergencies.",

    overview:
      "Developed a healthcare platform that enables first responders and hospitals to securely access essential patient medical records through QR-based emergency access, while maintaining privacy and controlled access to sensitive information.",

    problem:
      "During medical emergencies, healthcare providers may not have immediate access to critical patient information such as allergies, medications, medical history, and existing conditions, potentially delaying informed treatment.",

    solution:
      "Designed and developed an AI-powered Emergency Health Passport that combines secure QR-based access with AI-assisted medical insights, enabling healthcare professionals to quickly understand a patient's medical context during critical situations.",

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
      "Provides doctors with centralized access to patient records, consultations, and emergency requests.",
  },

  {
    src: mobileImg,
    title: "Patient Mobile App",
    description:
      "Enables patients to manage their medical profile, prescriptions, and emergency QR access.",
  },

  {
    src: qrImg,
    title: "Emergency QR Access",
    description:
      "Enables secure QR-based access to critical patient information during medical emergencies.",
  },

  {
    src: emergencyImg,
    title: "Emergency Consultation",
    description:
      "Allows healthcare professionals to quickly review allergies, medications, and medical history.",
  },

  {
    src: emergency2Img,
    title: "AI Medical Summary",
    description:
      "Generates a concise AI-assisted summary highlighting allergies, conditions, medications, and key clinical information.",
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
    "A face-recognition system that records student attendance and provides simple reports for administrators.",

  overview:
    "Developed a web-based Smart Attendance Management System using Django, OpenCV, face_recognition, and PostgreSQL to automate student identification and attendance recording. The system allows administrators to manage student records, capture attendance through real-time face recognition, validate students based on course and semester, and monitor attendance through a centralized dashboard.",

  problem:
    "Traditional attendance systems rely on manual roll calls or paper-based records, which are time-consuming, prone to human errors, and vulnerable to proxy attendance. Managing attendance separately for different courses and semesters can also make record maintenance difficult.",

  solution:
    "Built a face recognition-based attendance system using Django, OpenCV, face_recognition, and PostgreSQL that automatically identifies registered students, validates their selected course and semester, and records attendance in real time. The system also provides an admin dashboard for monitoring attendance, viewing reports, and downloading attendance details.",

  technologyStack: [
  {
    category: "Frontend",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
    ],
  },
  {
    category: "Backend",
    technologies: [
      "Python",
      "Django",
    ],
  },
  {
    category: "Database",
    technologies: [
      "PostgreSQL",
    ],
  },
  {
    category: "Image Processing",
    technologies: [
      "Pillow",
    ],
  },
  {
    category: "AI / Computer vision",
    technologies: [
      "OpenCV",
      "face_recognition",
      "dlib",
      "NumPy",
    ],
  },

  {
    category: "Visualization",
    technologies: [
      "Chart.js",
    ],
  },
],

  features: [
    "Face Recognition Attendance",
    "Student Registration",
    "Automatic Attendance Recording",
    "Attendance Reports",
    "Admin Dashboard",
    "Student Management",
    "Secure Database Management",
    "Responsive Web Interface"
  ],

  challenges: [
    "Face Recognition Accuracy: Handling variations in lighting, face angle, image quality, and facial appearance.",
    "Real-Time Processing: Processing camera frames and recognizing faces quickly enough for smooth attendance marking.",
    "Session Validation: Ensuring attendance is marked only for the selected course and semester.",
    "Duplicate Attendance: Preventing the same student from being marked multiple times in the same attendance session.",
    "Error Handling: Handling cases such as unrecognized faces, missing images, camera failures, and incorrect attendance sessions."
  ],

  keyLearnings: [
    "Developed a complete web application using Django.",
    "Gained practical experience with OpenCV and face_recognition for real-time facial recognition.",
    "Learned how to store and manage application data using PostgreSQL and Django ORM.",
    "Improved skills in debugging, testing, database management, and UI development.",
    "Integrated computer vision with a web-based application to automate attendance.",
    "Gained hands-on experience throughout the requirements, design, development, and testing lifecycle."
  ],

  images: [
  {
    src: loginImg,
    title: "Secure Login",
    description:
      "Provides authenticated access to the attendance management system through a secure administrator login.",
  },

  {
    src: adminImg,
    title: "Admin Dashboard",
    description:
      "Centralized dashboard for managing students, courses, attendance sessions, and overall attendance activity.",
  },

  {
    src: faceRecognitionImg,
    title: "Face Recognition",
    description:
      "Uses real-time facial recognition to identify registered students and automatically record their attendance.",
  },

  {
    src: attendanceReportImg,
    title: "Attendance Reports",
    description:
      "Provides structured attendance reports for monitoring student attendance across courses and semesters.",
  },
],

  architectureImage: attendanceImg,

  github: "https://github.com/Anfas007/smart-attendance-management-system",

  demo: "#"
}
];
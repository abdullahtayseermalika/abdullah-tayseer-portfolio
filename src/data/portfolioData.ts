/**
 * Central Portfolio Data Configuration for Abdullah Tayseer
 * Modify or extend projects, skills, education, and links here.
 */

export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  imagePath?: string;
  visualType: 'sentrix' | 'classroom' | 'floodtrace' | 'cloudvault';
  highlights: string[];
  architecture: string[];
  hardware?: string[];
  software: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  status: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const PERSONAL_INFO = {
  name: "Abdullah Tayseer",
  title: "ECE STUDENT & DEVELOPER",
  roleSubtitle: "ENGINEERING × SOFTWARE × AI",
  professionalIdentity:
    "Electronics & Communication Engineering Student | Embedded Systems Developer | AI & Computer Vision Enthusiast | Robotics & IoT Developer",
  shortBrandStatement:
    "I build intelligent systems at the intersection of electronics, software, AI, and robotics.",
  secondaryStatement:
    "From embedded prototypes to computer vision and connected devices, I turn engineering ideas into practical experiments.",
  heroPhrase: "Curiosity becomes code. Ideas become systems.",
  quote: "Build with curiosity. Solve with logic. Improve through iteration.",
  quoteAuthor: "Abdullah Tayseer",
  quoteParagraph:
    "I believe engineering is about exploring possibilities, learning from failures, and continuously improving the way things work.",
  
  about: {
    label: "BEHIND THE BUILDS",
    heading: "ENGINEERING IDEAS INTO REALITY.",
    paragraph:
      "I'm an Electronics and Communication Engineering student interested in the intersection of hardware, software, and intelligent systems. I enjoy experimenting with new technologies, building prototypes, and learning through practical problem-solving.",
  },

  location: "Karnataka, India",
  institution: "Anjuman Institute of Technology and Management",
  institutionLocation: "Bhatkal, Karnataka, India",
  degree: "Bachelor of Engineering (B.E.)",
  branch: "Electronics and Communication Engineering",
  academicYear: "2026–2027",
  expectedGraduation: "To be confirmed (2027)",
  availability: "OPEN TO OPPORTUNITIES",
  contactHeading: "LET'S BUILD SOMETHING MEANINGFUL.",
  contactSubtitle:
    "I'm interested in engineering projects, technical collaborations, internships, and opportunities to learn by building real-world solutions.",
  footerTagline: "ENGINEERING × SOFTWARE × CURIOSITY",
  
  // Social links
  links: {
    github: "https://github.com/abdullahtayseermalika",
    email: "abdullah.tayseer.ece@example.com", // clearly editable placeholder
    emailPlaceholderText: "[ADD PROFESSIONAL EMAIL]",
    isEmailPlaceholder: true,
    linkedin: "https://linkedin.com/in/abdullah-tayseer-placeholder", // clearly editable placeholder
    linkedinPlaceholderText: "[ADD LINKEDIN PROFILE]",
  },
};

export const CAPABILITIES = [
  {
    number: "01",
    title: "EMBEDDED SYSTEMS",
    description: "Microcontrollers, firmware, sensor interfacing & real-time protocols",
  },
  {
    number: "02",
    title: "COMPUTER VISION",
    description: "Facial landmarks, spatial tracking, fatigue detection & OpenCV",
  },
  {
    number: "03",
    title: "ROBOTICS & IOT",
    description: "ROS 2 nodes, connected sensors, automation & telemetry",
  },
  {
    number: "04",
    title: "SOFTWARE DEVELOPMENT",
    description: "Python backend services, Linux pipelines & cloud storage APIs",
  },
];

export const QUICK_STATS = [
  {
    number: "01",
    label: "ENGINEERING DISCIPLINE",
    value: "Electronics & Communication Engineering",
    subtext: "Focusing on hardware-software symbiosis",
  },
  {
    number: "02",
    label: "TECHNICAL FOCUS",
    value: "AI · Embedded Systems · Robotics",
    subtext: "Perception pipelines & physical computing",
  },
  {
    number: "03",
    label: "BUILDING APPROACH",
    value: "Learn · Prototype · Improve",
    subtext: "From theoretical model to working silicon",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "sentrix",
    number: "01",
    title: "SENTRIX: DRIVER MONITORING SYSTEM",
    category: "AI / COMPUTER VISION",
    shortDescription:
      "A computer vision prototype exploring driver fatigue monitoring through facial landmarks and an ESP32-connected monitoring pipeline.",
    fullDescription:
      "Sentrix addresses driver drowsiness and distraction in real-time. Built with a Python-based perception pipeline utilizing OpenCV and MediaPipe Face Mesh, it extracts critical facial landmarks to compute the Eye Aspect Ratio (EAR) and mouth yawn frequency. When drowsiness thresholds are breached, telemetry is transmitted over a serial communication bus to an onboard ESP32 controller, triggering immediate auditory alerts and safety telemetry.",
    tags: ["PYTHON", "MEDIAPIPE", "OPENCV", "ESP32", "LINUX"],
    imagePath: "/src/assets/images/sentrix_cv_mesh_1792316658230.jpg",
    visualType: "sentrix",
    highlights: [
      "Sub-30ms real-time facial landmark tracking using MediaPipe 468-point mesh",
      "Dynamic Eye Aspect Ratio (EAR) calculation to detect microsleep events",
      "Head-pose estimation for detecting distraction and gaze deviation",
      "Bidirectional UART communication link between Python host and ESP32 microcontroller",
    ],
    architecture: [
      "Video stream capture via Linux V4L2 backend",
      "Landmark extraction and landmark vector geometry processing",
      "Adaptive threshold classifier with temporal window smoothing",
      "ESP32 interrupt-driven haptic/audio buzzer and telemetry output",
    ],
    hardware: ["ESP32 DevKit V1", "High-FPS IR/USB Camera Module", "Piezo Buzzer & Indicator LEDs"],
    software: ["Python 3.11", "OpenCV", "MediaPipe", "ESP-IDF / Arduino C++", "Linux Kernel"],
    githubUrl: "https://github.com/abdullahtayseermalika/SENTRIX-Driver-Monitor",
    status: "Prototype Validated",
  },
  {
    id: "classroom-automation",
    number: "02",
    title: "CLASSROOM AUTOMATION",
    category: "EMBEDDED SYSTEMS / IOT",
    shortDescription:
      "An academic automation project combining ESP32-CAM, voice and touch control concepts, and fingerprint-based attendance management.",
    fullDescription:
      "An integrated IoT classroom environment system engineered to eliminate manual attendance logging and optimize electrical power consumption. Utilizing an ESP32-CAM module alongside a capacitive/optical fingerprint sensor, the system verifies student identities and posts attendance records directly over WiFi to a local academic server. Smart relay drivers automate classroom lighting, fans, and projectors through scheduled timers, ambient sensing, and touch override interfaces.",
    tags: ["ESP32-CAM", "EMBEDDED C++", "IOT", "AUTOMATION"],
    visualType: "classroom",
    highlights: [
      "Secure biometric authentication using optical fingerprint scanner module",
      "ESP32-CAM visual validation with lightweight snapshot logging",
      "Multi-channel optocoupler relay switching for high-voltage classroom appliances",
      "Local web server interface hosted on ESP32 for direct manual control and status queries",
    ],
    architecture: [
      "Sensor polling routine with hardware debounce and interrupt timers",
      "Secure HTTP/REST API dispatch for attendance logging to local database",
      "Fail-safe relay state management to prevent power surges upon power reset",
    ],
    hardware: ["ESP32-CAM", "R307 Optical Fingerprint Module", "4-Channel 5V Relay Board", "PIR Motion Sensor"],
    software: ["Embedded C++", "Arduino Core for ESP32", "FreeRTOS Tasks", "HTML/CSS Web UI"],
    githubUrl: undefined, // No repository URL provided yet; kept cleanly unlinked
    status: "System Prototype Completed",
  },
  {
    id: "floodtrace",
    number: "03",
    title: "FLOODTRACE — FLOOD DAMAGE MAPPING & ASSESSMENT",
    category: "FLOOD MAPPING / GEOSPATIAL TECHNOLOGY",
    shortDescription:
      "An engineering project focused on mapping flood-related damage and identifying potentially affected roads and isolated communities using satellite imagery, elevation data, and geospatial analysis.",
    fullDescription:
      "FloodTrace is a satellite-based flood damage assessment and emergency planning engineering project developed by Team ASMR. Utilizing Sentinel-1 synthetic aperture radar (SAR) observations captured before and after flood events, the system applies dual-polarization (VV/VH) backscatter change analysis and connected component spatial filtering to accurately map surface water expansion. By integrating digital elevation models (DEM) and vector road networks, the system pinpoints submerged transport corridors and identifies cut-off, isolated communities to support rapid disaster response logistics.",
    tags: ["PYTHON", "SENTINEL-1 SAR", "GEOSPATIAL ANALYSIS", "COPERNICUS DEM", "OPENSTREETMAP"],
    imagePath: "/src/assets/images/floodtrace_geospatial_map_1792320043273.jpg",
    visualType: "floodtrace",
    highlights: [
      "Sentinel-1 SAR dual-polarization (VV/VH) backscatter change analysis for cloud-penetrating flood mapping",
      "Digital Elevation Model (DEM) and topographic slope filtering to reduce false positives in depression zones",
      "Vector road network overlay to detect severed transit corridors and submerged bridges",
      "Spatial clustering to locate potentially isolated communities and settlements requiring immediate emergency aid",
      "Automated Rapid Situation Report (SitRep) compilation comparing findings against Copernicus reference data",
    ],
    architecture: [
      "Sentinel-1 GRD imagery ingestion & backscatter calibration",
      "Dual-pol log-ratio thresholding & connected component spatial filtering",
      "Digital Elevation Model slope mask & hydrological surface modeling",
      "Vector infrastructure intersection & community isolation vulnerability scoring",
    ],
    hardware: ["Geospatial High-Memory Compute Station"],
    software: [
      "Python 3",
      "Sentinel-1 SAR Radar",
      "Copernicus DEM",
      "GeoPandas & Rasterio",
      "OpenStreetMap (OSM)",
      "QGIS",
    ],
    githubUrl: "https://github.com/abdullahtayseermalika/FLOODTRACE-ASMR1",
    status: "Research Prototype (Team ASMR)",
  },
  {
    id: "cloudvault",
    number: "04",
    title: "CLOUDVAULT",
    category: "WEB DEVELOPMENT / CLOUD",
    shortDescription:
      "A cloud file management web application with user authentication and file upload, download, and deletion workflows.",
    fullDescription:
      "A secure, responsive cloud storage application engineered with Python and Flask on the backend and Supabase for authentication and storage bucket policies. CloudVault provides granular user access controls, signed URLs for private downloads, and responsive drag-and-drop file organization designed with a sleek, high-contrast dark aesthetic.",
    tags: ["PYTHON", "FLASK", "SUPABASE", "HTML", "CSS", "GITHUB"],
    visualType: "cloudvault",
    highlights: [
      "Session-based and tokenized authentication using Supabase Auth",
      "S3-compatible bucket file chunk uploads and signed expiring download links",
      "Responsive file explorer with size formatting, MIME-type sorting, and search",
      "Secure API endpoints with CSRF protection and sanitized file payloads",
    ],
    architecture: [
      "Flask routing engine with Blueprint modular architecture",
      "Supabase Python SDK for storage management and authentication checks",
      "Lightweight client-side asynchronous fetch requests for fluid file operations",
    ],
    hardware: ["Cloud Deployed (Render / Local Linux Server)"],
    software: ["Python 3", "Flask", "Supabase Storage & Auth", "Modern HTML5 / CSS3", "Git"],
    githubUrl: "https://github.com/abdullahtayseermalika/cloudfilestorage",
    status: "Active Web Project",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "PROGRAMMING",
    skills: ["Python", "C/C++", "MATLAB/Octave fundamentals"],
  },
  {
    title: "EMBEDDED SYSTEMS",
    skills: ["ESP32", "Arduino", "ESP32-CAM", "Sensor Interfacing", "Serial Communication", "UART / I²C / SPI"],
  },
  {
    title: "AI & COMPUTER VISION",
    skills: ["OpenCV", "MediaPipe Face Mesh", "Facial Landmark Analysis", "Perception Pipelines"],
  },
  {
    title: "WEB & CLOUD",
    skills: ["Flask", "HTML", "CSS", "Supabase", "Render"],
  },
  {
    title: "ROBOTICS & SIMULATION",
    skills: ["ROS 2 Jazzy", "SUMO fundamentals"],
  },
  {
    title: "DEVELOPER TOOLS",
    skills: ["Git", "GitHub", "VS Code", "PlatformIO", "Wokwi", "Linux", "Ubuntu", "Arch Linux"],
  },
];

export const WORK_PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    title: "DISCOVER",
    description: "Understand the problem, define requirements, and identify constraints.",
    deliverables: ["Problem breakdown", "System constraints & hardware requirements", "Success metrics definition"],
  },
  {
    step: "02",
    title: "RESEARCH",
    description: "Explore technologies, existing solutions, and technical feasibility.",
    deliverables: ["Sensor & IC datasheet analysis", "Algorithmic benchmarks", "Open-source library evaluation"],
  },
  {
    step: "03",
    title: "DESIGN",
    description: "Plan the architecture, interfaces, components, and system workflow.",
    deliverables: ["Schematic wireframes", "State machine & flowchart diagrams", "Pinout & communication protocol maps"],
  },
  {
    step: "04",
    title: "BUILD",
    description: "Develop the prototype, implement the software, and integrate hardware where required.",
    deliverables: ["Breadboard / simulation circuit setup", "Embedded firmware & software drivers", "Core system integration"],
  },
  {
    step: "05",
    title: "TEST & IMPROVE",
    description: "Debug, evaluate functionality, refine the implementation, and document results.",
    deliverables: ["Logic analyzer & serial debugging", "Edge-case stress testing", "Clean documentation & code refactoring"],
  },
];

export const CURRENT_INTERESTS = [
  {
    number: "01",
    title: "Intelligent Embedded Systems",
    description: "Deploying lightweight ML algorithms directly onto resource-constrained microcontrollers.",
  },
  {
    number: "02",
    title: "Computer Vision & Driver Monitoring",
    description: "Real-time facial mesh inference and gaze dynamics to enhance vehicular safety systems.",
  },
  {
    number: "03",
    title: "Robotics & ROS 2",
    description: "Developing modular node architectures, sensor fusion, and actuator controls with ROS 2 Jazzy.",
  },
  {
    number: "04",
    title: "Autonomous Navigation & Traffic Simulation",
    description: "Exploring urban mobility topologies, micro-simulations, and agent routing algorithms using SUMO.",
  },
  {
    number: "05",
    title: "IoT & Sensor Networks",
    description: "Robust telemetry networks combining low-power transceivers, edge nodes, and cloud backends.",
  },
  {
    number: "06",
    title: "Linux-Based Engineering Workflows",
    description: "Leveraging Linux toolchains, Bash automation, and kernel interfaces for deterministic development.",
  },
];

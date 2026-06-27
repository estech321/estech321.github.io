export const siteConfig = {
  name: "Eric Smith",
  title:
    "Student focused on embedded systems, hardware engineering, and technical theater production",
  description:
    "Portfolio website of Eric Smith - microcontrollers, embedded systems, and practical stage tech solutions",
  accentColor: "#1d4ed8",
  social: {
    github: "https://github.com/estech321",
  },
  aboutMe:
    "I am a student focused on the intersection of hardware engineering, embedded systems, and technical theater production. I specialize in creating practical micro-controller solutions to improve my life :)",
  skills: [
    "Raspberry Pi Pico",
    "Arduino",
    "ESP8266",
    "Python",
    "MicroPython",
    "DMX512",
  ],
  projects: [
    {
      name: "Raspberry Pi Pico DMX Controller",
      description:
        "A custom hardware solution built to solve work light issues in our theater's control booth. It outputs DMX512 signals to control LED PAR work lights via programmed presets (Full White / Crew Blue / Off).",
      link: "https://github.com/estech321/pico-dmx-panel",
      skills: ["Raspberry Pi Pico", "RS-485", "MicroPython"],
    },
    {
      name: "Keypad and RFID Access Control System",
      description:
        "An experimental Raspberry Pi Pico device that requires both an RFID card and a PIN before allowing access. Key codes can modify allowed tags and PINs, making it useful for low-cost access control experiments.",
      link: "https://github.com/estech321/keypad-access-control",
      skills: ["Raspberry Pi Pico", "RFID", "Keypad", "MicroPython"],
    },
  ],
  experience: [
    {
      company: "Stage Crew",
      title: "Head Lighting Designer",
      dateRange: "Sept 2025-June 2026",
      bullets: [
        "Programmed lighting cue stacks for a full production of Matilda The Musical JR.",
        "Became fluent with MagicQ lighting consoles",
        "Collaborated with a small team and fostered a lighting community",
      ],
    },
  ],
  /*
  education: [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
  */
};

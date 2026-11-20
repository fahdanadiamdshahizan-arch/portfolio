
// ==========================================
// FAHDA NADIA PORTFOLIO
// Navigation + Interactive Skills
// ==========================================

// AUTOMATIC YEAR
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// MOBILE NAVIGATION
const menu = document.getElementById("menu");
const nav = document.getElementById("navlinks");

if (menu && nav) {
  menu.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
    });
  });
}

// ==========================================
// SKILL DESCRIPTIONS
// ==========================================

const skillInfo = {

  // BUSINESS ANALYSIS

  urs: {
    title: "User Requirements Specification (URS)",
    description:
      "A document that captures what users need from a system, including their expectations, business processes and functional needs.",
    usage:
      "Used during requirement gathering to understand user needs and provide a foundation for subsequent analysis and documentation."
  },

  brs: {
    title: "Business Requirements Specification (BRS)",
    description:
      "A document that defines business objectives, requirements, scope and processes that a proposed system or enhancement must support.",
    usage:
      "Used to translate stakeholder needs into structured business requirements before detailed system specifications are prepared."
  },

  srs: {
    title: "Software Requirements Specification (SRS)",
    description:
      "A detailed document describing the functional and non-functional requirements of a software system.",
    usage:
      "Used by developers, testers and stakeholders as a reference for system functionality, validation and implementation."
  },

  sds: {
    title: "Software Design Specification (SDS)",
    description:
      "A technical document describing how a system is designed, including components, interfaces, data structures and process flows.",
    usage:
      "Used to communicate system design decisions and guide developers during implementation."
  },

  usecases: {
    title: "Use Cases",
    description:
      "Descriptions of interactions between users or external systems and a software application to achieve specific goals.",
    usage:
      "Used to identify actors, define system interactions, document alternative flows and clarify expected behaviour."
  },

  dfd: {
    title: "Data Flow Diagram (DFD)",
    description:
      "A visual representation of how data moves between external entities, processes and data stores within a system.",
    usage:
      "Used to analyse data movement and communicate how information is processed across system functions."
  },

  erd: {
    title: "Entity Relationship Diagram (ERD)",
    description:
      "A diagram illustrating database entities, their attributes and the relationships between them.",
    usage:
      "Used during database analysis and design to understand data structures and relationships."
  },

  datamapping: {
    title: "Data Mapping",
    description:
      "The process of defining how data fields correspond between different systems, databases or data structures.",
    usage:
      "Used to support data integration, migration and consistency between source and destination systems."
  },

  manuals: {
    title: "User Manuals",
    description:
      "Instructional documentation that explains how users can navigate and operate a system.",
    usage:
      "Used to support system adoption, user training and day-to-day system operations."
  },

  // TESTING

  uat: {
    title: "User Acceptance Testing (UAT)",
    description:
      "A testing phase where users validate whether a system meets agreed business requirements and is suitable for operational use.",
    usage:
      "Used before system acceptance or deployment to verify business workflows and identify issues requiring resolution."
  },

  testscripts: {
    title: "Test Scripts",
    description:
      "Structured test instructions containing test scenarios, steps, test data and expected results.",
    usage:
      "Used to guide consistent testing and verify that system functionality behaves according to requirements."
  },

  defects: {
    title: "Defect Tracking",
    description:
      "The process of recording, monitoring and managing software issues throughout their resolution lifecycle.",
    usage:
      "Used to document defects, track their status, support developer investigation and coordinate retesting."
  },

  ado: {
    title: "Azure DevOps",
    description:
      "A Microsoft platform providing tools for work item management, software development collaboration and testing workflows.",
    usage:
      "Used to record bugs, track issues, manage work items and monitor defect resolution during testing."
  },

  // TOOLS

  figma: {
    title: "Figma",
    description:
      "A collaborative interface design tool used to create wireframes, mockups and interactive prototypes.",
    usage:
      "Used to visualise proposed interfaces and communicate UI/UX requirements with stakeholders."
  },

  moqups: {
    title: "Moqups",
    description:
      "A visual collaboration tool for creating wireframes, mockups, diagrams and user flows.",
    usage:
      "Used to prepare early interface concepts and communicate proposed system layouts."
  },

  dbml: {
    title: "Database Markup Language (DBML)",
    description:
      "A readable language for defining database schemas, tables, columns and relationships.",
    usage:
      "Used to document database structures and generate database relationship diagrams."
  },

  dbeaver: {
    title: "DBeaver",
    description:
      "A database management application that supports SQL queries, data exploration and database administration tasks.",
    usage:
      "Used to inspect database structures, review records and execute queries for analysis or troubleshooting."
  },

  excel: {
    title: "Microsoft Excel",
    description:
      "A spreadsheet application for organising, analysing and presenting structured information.",
    usage:
      "Used for data mapping, requirement tracking, test case management and reporting."
  },

  // TECHNICAL

  php: {
    title: "PHP",
    description:
      "A server-side programming language commonly used for web application development.",
    usage:
      "Used to build backend application logic and understand how web systems process requests."
  },

  java: {
    title: "Java",
    description:
      "An object-oriented programming language widely used for enterprise and application development.",
    usage:
      "Used to develop applications and understand object-oriented programming concepts."
  },

  python: {
    title: "Python",
    description:
      "A general-purpose programming language used in automation, data processing and software development.",
    usage:
      "Used for scripting, basic automation, data processing and programming tasks."
  },

  html: {
    title: "HyperText Markup Language (HTML)",
    description:
      "The standard markup language used to structure content on web pages.",
    usage:
      "Used to create web page elements such as headings, navigation, forms and content sections."
  },

  css: {
    title: "Cascading Style Sheets (CSS)",
    description:
      "A stylesheet language used to control the appearance, layout and responsiveness of web pages.",
    usage:
      "Used to style interfaces, manage spacing and typography, and create responsive layouts."
  },

  javascript: {
    title: "JavaScript",
    description:
      "A programming language used to add dynamic behaviour and interactivity to websites.",
    usage:
      "Used to handle user interactions, update page content and create interactive web features."
  },

  mysql: {
    title: "MySQL",
    description:
      "A relational database management system used to store and manage structured application data.",
    usage:
      "Used to write SQL queries, retrieve records and support database-related application development."
  }

};

// ==========================================
// INTERACTIVE SKILL MODAL
// ==========================================

const skillModal = document.getElementById("skill-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalUsage = document.getElementById("modal-usage-text");
const modalClose = document.getElementById("modal-close");

let previousFocus = null;

function openSkillModal(skillKey) {
  const skill = skillInfo[skillKey];

  if (!skill || !skillModal) {
    return;
  }

  previousFocus = document.activeElement;

  modalTitle.textContent = skill.title;
  modalDescription.textContent = skill.description;
  modalUsage.textContent = skill.usage;

  skillModal.hidden = false;
  skillModal.setAttribute("aria-hidden", "false");

  document.body.classList.add("modal-open");
  modalClose.focus();
}

function closeSkillModal() {
  if (!skillModal) {
    return;
  }

  skillModal.hidden = true;
  skillModal.setAttribute("aria-hidden", "true");

  document.body.classList.remove("modal-open");

  if (previousFocus && typeof previousFocus.focus === "function") {
    previousFocus.focus();
  }
}

// CLICK ANY SKILL
document.querySelectorAll("[data-skill]").forEach((button) => {
  button.addEventListener("click", () => {
    const skillKey = button.dataset.skill;
    openSkillModal(skillKey);
  });
});

// CLOSE BUTTON
if (modalClose) {
  modalClose.addEventListener("click", closeSkillModal);
}

// CLICK OUTSIDE MODAL
if (skillModal) {
  skillModal.querySelectorAll("[data-close-modal]").forEach((element) => {
    element.addEventListener("click", closeSkillModal);
  });
}

// ESCAPE KEY + KEYBOARD FOCUS
document.addEventListener("keydown", (event) => {
  if (!skillModal || skillModal.hidden) {
    return;
  }

  if (event.key === "Escape") {
    closeSkillModal();
  }

  if (event.key === "Tab") {
    const focusable = [...skillModal.querySelectorAll(
      'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
    )].filter((element) => element.getClientRects().length > 0);

    if (!focusable.length) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
});

/* JS Library usage examples */
"use strict";

const portfolio = new Portfolio();

const about = portfolio.createAbout(".ex-about-display");
about.addAboutContent(
  "Hi, I'm Gazi!",
  ["JAVASCRIPT ES6+", "PYTHON", "JAVA", "C#", "HTML/CSS"],
  "I am currently a fourth year Computer Science major at University of Toronto. After graduation, I will be joining Amazon as a Software Development Engineer while undertaking a part-time Master's of Science in Software Engineering at University of Oxford. \nBelow are some languages I am working with currently:",
  "./example-assets/icon2.png"
);

const newItemDisplay = portfolio.createItemDisplay(".ex-item-slider");
const slider = newItemDisplay.createItemSlider();
slider.addItem(
  "Adam A.I.",
  "A self-learning A.I. that learns to traverse through a complex maze using the genetic algorithm.",
  "./example-assets/icon3.png",
  { GITHUB: "www.github.com", "LIVE DEMO": "www.github.com" }
);
slider.addItem(
  "Odin Bot",
  "A Telegram Bot that helps you excel in your daily tasks using NLP.",
  "./example-assets/icon1.png",
  { GITHUB: "www.github.com" }
);
slider.addItem(
  "Minimax Stonehenge",
  "Two-player, zero-sum game with a strategic Minimax artificial intelligence.",
  "./example-assets/icon2.png",
  { GITHUB: "www.github.com", "LIVE DEMO": "www.github.com" }
);

const newItemDisplay2 = portfolio.createItemDisplay(".ex-item-grid");
const grid = newItemDisplay2.createItemGrid();
grid.addItem(
  "Adam A.I.",
  "A self-learning A.I. that learns to traverse through a complex maze using the genetic algorithm.",
  "./example-assets/icon3.png",
  { GITHUB: "www.github.com", "LIVE DEMO": "www.github.com" }
);
grid.addItem(
  "Odin Bot",
  "A Telegram Bot that helps you excel in your daily tasks using NLP.",
  "./example-assets/icon1.png",
  { GITHUB: "www.github.com" }
);
grid.addItem(
  "Minimax",
  "Two-player, zero-sum game with a strategic Minimax artificial intelligence.",
  "./example-assets/icon2.png",
  { GITHUB: "www.github.com", "LIVE DEMO": "www.github.com" }
);
grid.addItem(
  "Truth",
  "A remake of the solar system using Three.js.",
  "./example-assets/icon.png"
);

const expDisplay = portfolio.createExpDisplay(".ex-exp-stepper");
const stepper = expDisplay.createExpStepper();
stepper.addExpItem(
  "Amazon",
  "SDE 1 @ Amazon",
  "Collaborate with experienced cross-disciplinary Amazonians to conceive, design, and bring innovative products and services to market. Design and build innovative technologies in a large distributed computing environment and help lead fundamental changes in the industry.",
  ["AWS", "KUBERNETES"]
);
stepper.addExpItem(
  "Wattpad",
  "Software Engineering Intern @ Wattpad",
  "Developed a responsive React web page (the new Story Details) from scratch, both on client and server side, for an app with massive scale (2 billion daily requests). Collaborated with senior engineers and product management following best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations.",
  ["REACT", "BACKBONE", "SASS"]
);
stepper.addExpItem(
  "Orange Gate",
  "Software Engineering Intern @ Orange Gate",
  "Developed a Node.js smart home system through Facebook’s Messenger integrated with Bocco sen- sors and other smart devices (Nest camera, TPLink smart plugs) to derive conclusions about the current state of the home. Identified continuous improvements in data quality, design reports and coding activities, presenting results and findings to internal business stakeholders.",
  ["DialogFlow", "Vision", "AutoML", "Messenger Bot API", "MongoDB"]
);
stepper.addExpItem(
  "Centivizer",
  "Software Engineering Intern @ Centivizer",
  "Developed a Node.js smart home system through Facebook’s Messenger integrated with Bocco sen- sors and other smart devices (Nest camera, TPLink smart plugs) to derive conclusions about the current state of the home. Identified continuous improvements in data quality, design reports and coding activities, presenting results and findings to internal business stakeholders.",
  ["DialogFlow", "Vision", "AutoML", "Messenger Bot API", "MongoDB"]
);

const expDisplay2 = portfolio.createExpDisplay(".ex-exp-tabs");
const expTable = expDisplay2.createExpTable();
expTable.addExpItem(
  "WATTPAD",
  "Software Engineering Intern @ Wattpad",
  "Developed a responsive React web page (the new Story Details) from scratch, both on client and server side, for an app with massive scale (2 billion daily requests). Collaborated with senior engineers and product management following best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations.",
  ["REACT", "BACKBONE", "SASS"]
);
expTable.addExpItem(
  "ORANGE GATE",
  "Software Engineering Intern @ Orange Gate",
  "Developed a Node.js smart home system through Facebook’s Messenger integrated with Bocco sen- sors and other smart devices (Nest camera, TPLink smart plugs) to derive conclusions about the current state of the home. Identified continuous improvements in data quality, design reports and coding activities, presenting results and findings to internal business stakeholders.",
  ["DialogFlow", "Vision", "AutoML", "Messenger Bot API", "MongoDB"]
);

expTable.addExpItem(
  "AMAZON",
  "SDE 1 @ Amazon",
  "Collaborate with experienced cross-disciplinary Amazonians to conceive, design, and bring innovative products and services to market.",
  ["AWS", "KUBERNETES"]
);

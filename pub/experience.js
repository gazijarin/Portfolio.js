function ExpDisplay(location) {
  const domLocation = location ? $(location) : $("body");
  this.expDisplay = document.createElement("div");
  this.expDisplay.className = "exp-display";
  domLocation.append(this.expDisplay);
}
ExpDisplay.prototype = {
  getExpDisplay: function() {
    return this.expDisplay;
  },
  createExpTable: function() {
    const newExpTable = new ExperienceTable();
    this.expDisplay.append(newExpTable.getExpTable());
    return newExpTable;
  },
  createExpStepper: function() {
    const newExpStepper = new ExperienceStepper();
    this.expDisplay.append(newExpStepper.getExpStepper());
    return newExpStepper;
  }
};

function ExperienceStepper() {
  this.stepCount = 0;
  this.expDiv = document.createElement("div");
  this.expDiv.className = "exp-stepper";

  this.stepBar = document.createElement("div");
  this.stepBar.className = "step-bar";

  this.stepContent = document.createElement("div");
  this.stepContent.className = "step-content";

  this.nextBtn = document.createElement("button");
  this.nextBtn.className = "exp-btn btn-next";
  this.nextBtn.appendChild(document.createTextNode(">"));

  this.prevBtn = document.createElement("button");
  this.prevBtn.className = "exp-btn btn-prev";
  this.prevBtn.appendChild(document.createTextNode("<"));
  this.prevBtn.disabled = true;

  this.expDiv.appendChild(this.stepBar);
  this.expDiv.appendChild(this.stepContent);
  this.expDiv.appendChild(this.prevBtn);
  this.expDiv.appendChild(this.nextBtn);

  let currentStep = 1;

  this.nextBtn.addEventListener("click", () => {
    const maxSteps = document.querySelectorAll(".step").length;
    const bullets = [...document.querySelectorAll(".bullet")];

    bullets[currentStep].classList.add("completed");

    // Hide current content
    const stepItems = [...document.querySelectorAll(".step-item-content")];
    stepItems[currentStep - 1].classList.add("hidden");

    currentStep++;
    stepItems[currentStep - 1].classList.remove("hidden");
    this.prevBtn.disabled = false;

    if (currentStep === maxSteps) {
      this.nextBtn.disabled = true;
    }
  });

  this.prevBtn.addEventListener("click", () => {
    const bullets = [...document.querySelectorAll(".bullet")];

    bullets[currentStep - 1].classList.remove("completed");

    // Hide current content
    const stepItems = [...document.querySelectorAll(".step-item-content")];
    stepItems[currentStep - 1].classList.add("hidden");
    stepItems[currentStep - 2].classList.remove("hidden");

    currentStep--;
    this.nextBtn.disabled = false;

    if (currentStep === 1) {
      this.prevBtn.disabled = true;
    }
  });
}
ExperienceStepper.prototype = {
  getExpStepper: function() {
    return this.expDiv;
  },
  addExpItem: function(stepText, stepTitle, stepDesc, stack) {
    let step = document.createElement("div");
    step.className = "step";

    let bullet = document.createElement("div");
    bullet.className = "bullet";

    if (this.stepCount === 0) {
      bullet.classList.add("completed");
    }

    bullet.appendChild(document.createTextNode(this.stepCount));

    let stepTextDiv = document.createElement("div");
    stepTextDiv.className = "step-text";

    stepTextDiv.appendChild(document.createTextNode(stepText));

    step.appendChild(stepTextDiv);
    step.appendChild(bullet);

    this.addContent(stepTitle, stepDesc, stack);

    this.stepBar.appendChild(step);
    this.stepCount++;
  },
  addStack: function(stack) {
    let stackDiv = document.createElement("ul");
    stackDiv.className = "stack";

    for (let i = 0; i < stack.length; i++) {
      let li = document.createElement("li");

      li.appendChild(document.createTextNode(stack[i]));
      stackDiv.appendChild(li);
    }

    return stackDiv;
  },
  addContent: function(titleText, descText, stack) {
    let content = document.createElement("div");
    content.className = "step-item-content";

    let title = document.createElement("div");
    title.className = "exp-item-title";
    title.appendChild(document.createTextNode(titleText));

    let descContent = document.createElement("div");
    descContent.className = "desc-content";

    let desc = document.createElement("div");
    desc.className = "exp-description";
    desc.appendChild(document.createTextNode(descText));

    descContent.appendChild(desc);
    descContent.appendChild(this.addStack(stack));

    content.appendChild(title);
    content.appendChild(descContent);

    let stepCount = document.querySelectorAll(".step").length;

    if (stepCount !== 0) {
      content.classList.add("hidden");
    }
    this.stepContent.appendChild(content);
  }
};

function ExperienceTable() {
  this.expDiv = document.createElement("div");
  this.expDiv.className = "exp";

  this.expTable = document.createElement("div");
  this.expTable.className = "exp-table";

  this.expTabs = document.createElement("ul");
  this.expTabs.className = "exp-tabs";

  this.expTabContent = document.createElement("div");
  this.expTabContent.className = "exp-tab-content";

  this.expItems = [];

  this.expTable.appendChild(this.expTabs);
  this.expTable.appendChild(this.expTabContent);
  this.expDiv.appendChild(this.expTable);

  this.expDiv.appendChild(this.expTable);

  this.exampleDiv = document.createElement("div");
  this.exampleDiv.className = "example-div";

  this.expDiv.appendChild(this.exampleDiv);
}

ExperienceTable.prototype = {
  getExpTable: function() {
    return this.expDiv;
  },
  getExpItems: function() {
    return this.expItems;
  },
  addExpItem: function(buttonName, title, desc, stack) {
    const newExpItem = new ExpItem(buttonName, title, desc, stack);
    const expItemObj = newExpItem.getExpItem();

    expItemObj.button.setAttribute("href", "#tab-" + this.expItems.length);
    expItemObj.content.setAttribute("id", "tab-" + this.expItems.length);
    expItemObj.button.addEventListener("click", this.onTabClick);

    this.expTabs.append(expItemObj.button);
    this.expTabContent.append(expItemObj.content);
    this.expItems.push(expItemObj);

    if (this.expItems.length == 1) {
      $(this.expItems[0].button).addClass("active");
      $(this.expItems[0].content).addClass("active");
    }
  },
  onTabClick: function(tabClickEvent) {
    $(tabClickEvent.currentTarget).click(function() {
      $(this)
        .siblings("li")
        .removeClass("active");
      $(this).addClass("active");
    });
    let contentTabs = document.querySelectorAll(".exp-item-content");
    for (i = 0; i < contentTabs.length; i++) {
      contentTabs[i].classList.remove("active");
    }
    let activeTabId = tabClickEvent.currentTarget.getAttribute("href");
    let activeContent = document.querySelector(activeTabId);
    activeContent.classList.add("active");

    tabClickEvent.preventDefault();
  }
};

// Exp item should have: button name, title, desc
function ExpItem(buttonName, title, desc, stack) {
  this.expItem = {};
  this.addContent(buttonName, title, desc, stack);
}

ExpItem.prototype = {
  getExpItem: function() {
    return this.expItem;
  },
  addStack: function(stack) {
    let stackDiv = document.createElement("ul");
    stackDiv.className = "stack";

    for (let i = 0; i < stack.length; i++) {
      let li = document.createElement("li");

      li.appendChild(document.createTextNode(stack[i]));
      stackDiv.appendChild(li);
    }

    return stackDiv;
  },
  addContent: function(buttonName, titleText, descText, stack) {
    let content = document.createElement("div");
    content.className = "exp-item-content";

    let title = document.createElement("div");
    title.className = "exp-item-title";
    title.appendChild(document.createTextNode(titleText));

    let descContent = document.createElement("div");
    descContent.className = "desc-content";

    let desc = document.createElement("div");
    desc.className = "exp-description";
    desc.appendChild(document.createTextNode(descText));

    descContent.appendChild(desc);
    descContent.appendChild(this.addStack(stack));

    let tab = document.createElement("li");
    tab.className = "exp-tab";
    let btnLink = document.createElement("a");
    btnLink.appendChild(document.createTextNode(buttonName));

    tab.appendChild(btnLink);

    content.appendChild(title);
    content.appendChild(descContent);

    this.expItem.content = content;
    this.expItem.button = tab;
  }
};

function About(location) {
  const domLocation = location ? $(location) : $("body");
  this.about = document.createElement("div");
  this.about.className = "about";

  this.aboutContent = document.createElement("div");
  this.aboutContent.className = "about-content";

  this.about.appendChild(this.aboutContent);
  domLocation.append(this.about);
}

About.prototype = {
  getAbout: function() {
    return this.about;
  },
  addAboutContent: function(title, stack, description, iconUrl) {
    this.addHeader(title);
    this.addAboutInfo(stack, description, iconUrl);
  },
  addHeader: function(titleText) {
    let title = document.createElement("div");
    title.className = "about-title";
    title.appendChild(document.createTextNode(titleText));

    this.aboutContent.appendChild(title);
  },
  addStack: function(stack) {
    let stackDiv = document.createElement("ul");
    stackDiv.className = "about-stack";

    for (let i = 0; i < stack.length; i++) {
      let li = document.createElement("li");

      li.appendChild(document.createTextNode(stack[i]));
      stackDiv.appendChild(li);
    }

    return stackDiv;
  },
  addAboutInfo: function(stack, descText, iconUrl) {
    let descContent = document.createElement("div");
    descContent.className = "desc-content";

    let desc = document.createElement("div");
    desc.className = "about-description";
    desc.appendChild(document.createTextNode(descText));

    descContent.appendChild(desc);
    descContent.appendChild(this.addStack(stack));

    let icon = document.createElement("img");
    icon.src = iconUrl ? iconUrl : "";
    icon.className = "about-icon";

    let info = document.createElement("div");
    info.className = "about-info";

    info.appendChild(descContent);
    info.append(icon);

    this.aboutContent.appendChild(info);
  }
};

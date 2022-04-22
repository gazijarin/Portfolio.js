function ItemDisplay(location) {
  const domLocation = location ? $(location) : $("body");
  this.itemDisplay = document.createElement("div");
  this.itemDisplay.className = "item-display";
  domLocation.append(this.itemDisplay);
}
ItemDisplay.prototype = {
  getItemDisplay: function() {
    return this.itemDisplay;
  },
  createItemGrid: function() {
    const newItemGrid = new ItemGrid();
    this.itemDisplay.append(newItemGrid.getItemGrid());
    return newItemGrid;
  },
  createItemSlider: function() {
    const newItemSlider = new ItemSlider();
    this.itemDisplay.appendChild(newItemSlider.getItemSlider());
    return newItemSlider;
  }
};

function ItemGrid() {
  this.itemGrid = document.createElement("div");
  this.itemGrid.className = "item-grid";

  this.itemGridContent = document.createElement("div");
  this.itemGridContent.className = "item-grid-content";

  this.itemGrid.appendChild(this.itemGridContent);
}
ItemGrid.prototype = {
  getItemGrid: function() {
    return this.itemGrid;
  },
  addItem: function(title, description, iconUrl, stack) {
    const newItem = new Item();
    newItem.addHeader(title, iconUrl);
    newItem.addDescription(description, stack);
    this.itemGridContent.append(newItem.getItem());
  }
};

function ItemSlider() {
  let currSlide = 0;

  this.currIndex = 0;

  this.ItemSlider = document.createElement("div");
  this.ItemSlider.className = "item-slider";

  this.nextBtn = document.createElement("button");
  this.nextBtn.className = "btn btn-next";
  this.nextBtn.appendChild(document.createTextNode(">"));

  this.prevBtn = document.createElement("button");
  this.prevBtn.className = "btn btn-prev";
  this.prevBtn.appendChild(document.createTextNode("<"));

  this.nextBtn.addEventListener("click", function() {
    const slides = document.querySelectorAll(".item-slide");
    let maxSlide = slides.length - 1;
    if (currSlide === maxSlide) {
      currSlide = 0;
    } else {
      currSlide++;
    }

    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - currSlide)}%)`;
    });
  });

  this.prevBtn.addEventListener("click", function() {
    const slides = document.querySelectorAll(".item-slide");
    let maxSlide = slides.length - 1;
    if (currSlide === 0) {
      currSlide = maxSlide;
    } else {
      currSlide--;
    }

    slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - currSlide)}%)`;
    });
  });

  this.ItemSlider.appendChild(this.nextBtn);
  this.ItemSlider.appendChild(this.prevBtn);
}

ItemSlider.prototype = {
  getItemSlider: function() {
    return this.ItemSlider;
  },
  addItem: function(title, desc, image, stack) {
    const newSlide = new ItemSlide(title, desc, image, stack);

    this.slide = document.createElement("div");
    this.slide.className = "item-slide";

    this.slide.appendChild(newSlide.getItemSlide());

    this.slide.style.transform = `translateX(${this.currIndex * 100}%)`;
    this.ItemSlider.appendChild(this.slide);
    this.currIndex++;
  }
};

function ItemSlide(title, desc, image, stack) {
  this.slideContent = document.createElement("div");
  this.slideContent.className = "slide-content";
  this.addContent(title, desc, image, stack);
}

ItemSlide.prototype = {
  getItemSlide: function() {
    return this.slideContent;
  },
  addLinkStack: function(stack) {
    let stackDiv = document.createElement("ul");
    stackDiv.className = "stack link";

    Object.keys(stack).forEach(function(key) {
      let li = document.createElement("li");

      let a = document.createElement("a");
      let linkText = document.createTextNode(key);
      a.appendChild(linkText);
      a.href = stack[key] ? stack[key] : "";

      li.appendChild(a);
      stackDiv.appendChild(li);
    });

    return stackDiv;
  },
  addContent: function(titleText, descText, image, stack) {
    let cover = document.createElement("img");
    cover.src = image ? image : "";
    cover.className = "slide-cover";

    let title = document.createElement("div");
    title.className = "slide-title";
    title.appendChild(document.createTextNode(titleText));

    let desc = document.createElement("div");
    desc.className = "slide-desc";
    desc.appendChild(document.createTextNode(descText));

    let textContent = document.createElement("div");
    textContent.className = "slide-text";

    textContent.appendChild(title);
    textContent.appendChild(desc);
    if (stack) {
      textContent.appendChild(this.addLinkStack(stack));
    }

    this.slideContent.appendChild(cover);
    this.slideContent.appendChild(textContent);
  }
};

function Item() {
  this.item = document.createElement("div");
  this.item.className = "item";
}

Item.prototype = {
  getItem: function() {
    return this.item;
  },
  addLinkStack: function(stack) {
    let stackDiv = document.createElement("ul");
    stackDiv.className = "stack link grid";

    Object.keys(stack).forEach(function(key) {
      let li = document.createElement("li");

      let a = document.createElement("a");
      let linkText = document.createTextNode(key);
      a.appendChild(linkText);
      a.href = stack[key] ? stack[key] : "";

      li.appendChild(a);
      stackDiv.appendChild(li);
    });

    return stackDiv;
  },
  addHeader: function(titleText, iconUrl) {
    let title = document.createElement("div");
    title.className = "item-title";
    title.appendChild(document.createTextNode(titleText));

    let icon = document.createElement("img");
    icon.src = iconUrl ? iconUrl : "";
    icon.className = "item-icon";

    let header = document.createElement("div");
    header.className = "item-header";

    header.appendChild(title);
    header.append(icon);
    this.item.appendChild(header);
  },
  addDescription: function(descText, stack) {
    let desc = document.createElement("div");
    desc.className = "item-description";
    desc.appendChild(document.createTextNode(descText));
    this.item.appendChild(desc);
    if (stack) {
      this.item.appendChild(this.addLinkStack(stack));
    }
  }
};

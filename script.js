// Use local storage to optimize the carousel
// store the request response in local storage
// use the previously stored response to load the img urls
// add logic in "getListOfImgs"
// JSON.stringify/JSON.parse
// don't make request to server if there is data in localstorage

localStorage.setItem("user", "ana");

class Carousel {
  constructor() {
    // this will hold the start point for the 3 element array that is needed for rendering the imgs in the "ImgsList" object
    this.indexUrl = 0;
    // this will get all our urls
    this.getListOfImgs();
  }

  getListOfImgs() {
    // get data from localstorage
    const json = localStorage.getItem("requestData");

    // if we have data then we render the imgs imidiatly
    if (json) {
      this.generateUrls(JSON.parse(json));
    } else {
      // if we don't have data in localstorage then we need to fetch them from the server
      // fetch is responsible for calling the server
      fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b")
        .then(function (respose) {
          return respose.json();
        })
        // 'generateUrls' is called after we have the data
        // .then(this.generateUrls.bind(this));
        .then((json) => {
          console.log(json);
          // store data from server in localstorage so we can use it later
          localStorage.setItem("requestData", JSON.stringify(json));

          // render imgs we data from the server
          this.generateUrls(json);
        });
    }
  }

  generateUrls(json) {
    // we transform the data from server to a array of simple urls strings
    this.urls = json.meals.map(function (meal) {
      return meal.strMealThumb;
    });

    // "render imgs will render the img HTML object"
    this.renderImgs();

    // this will render the buttons for changing the imgs on user 'click'
    this.renderButtons();
  }

  renderImgs() {
    // console.log(this.urls);
    // we have specialized class for rendering carousels imgs
    this.imgs = new ImgsList();

    // this will render the imgs without src attribute
    this.imgs.initialRender();

    //this will update the imgs using "this.indexUrl;"
    this.updateImgs();
  }

  updateImgs() {
    // the actual job of updating the imgs is done by "ImgsList" object, but the method needs a 3 elemnt array
    this.imgs.updateImgsSrc(this.urls.slice(this.indexUrl, this.indexUrl + 3));
  }

  renderButtons() {
    this.buttons = new ChangeImgsButtons();
    // the buttons created by the "ChangeImgsButtons" object needs callback for reacting to user click
    // this callback needs to be defined here in "Carousell" class as this is the brain for the entire component
    // the callback is "this.changeImgs"
    this.buttons.initialRender(this.changeImgs.bind(this));
  }

  // this method will update the start poin for the imgs so that every time the user click on one of the buttons the imgs are updated

  changeImgs(direction) {
    const localStorageValueNoKey = localStorage.getItem("abcd");
    const localStorageValue = localStorage.getItem("test");
    console.log("localStorageValueNoKey", localStorageValueNoKey);
    console.log("localStorageValue", localStorageValue);

    console.log("nr of imgs urls", this.urls.length);
    console.log(direction);
    switch (direction) {
      case "left":
        this.indexUrl--;
        break;

      case "right":
        this.indexUrl++;
        break;
      default:
        break;
    }

    console.log(this.indexUrl);

    // we can only use "updateImgs" after "this.indexUrl" is change in one way or the other
    this.updateImgs();
  }
}

class ImgsList {
  // this will create the html objects that hold the imgs
  initialRender() {
    this.imgContainer = document.createElement("div");
    this.imgContainer.classList.add("carousel-imgs-container");

    this.imgs = [];
    for (let i = 0; i < 3; i++) {
      const img = document.createElement("img");
      this.imgs.push(img);
      this.imgContainer.appendChild(img);
    }

    document.body.appendChild(this.imgContainer);
  }

  // this will update the imgs by changing thier src attribute
  updateImgsSrc(urls) {
    for (let i = 0; i < this.imgs.length; i++) {
      const img = this.imgs[i];
      img.src = urls[i];
    }
  }
}

class ChangeImgsButtons {
  // this will create the html object for buttons
  // this will hook as well the callback that comme from the parent object to the 'click' event on buttons
  initialRender(callback) {
    this.leftButton = document.createElement("button");
    this.leftButton.innerText = "<";
    document.body.prepend(this.leftButton);

    this.leftButton.addEventListener("click", function () {
      callback("left");
    });

    this.rightButton = document.createElement("button");
    this.rightButton.innerText = ">";
    document.body.appendChild(this.rightButton);

    this.rightButton.addEventListener("click", function () {
      callback("right");
    });
  }
}

new Carousel();

document.addEventListener ( "DOMContentLoaded" ,  () =>  {
    const cardArray = [
        {
            name: "cosmos",
            img: "images/cosmos.png"
        },
        {
            name: "cosmos",
            img: "images/cosmos.png"
        },
        {
            name: "animaux",
            img: "images/animaux.jpg"
        },
        {
            name: "animaux",
            img: "images/animaux.jpg"
        },        
        {
            name: "desert",
            img: "images/desert.jpg"
        },        
        {
            name: "desert",
            img: "images/desert.jpg"
        },              
        {
            name: "lapin",
            img: "images/lapin.jpg"
        },
        {
            name: "lapin",
            img: "images/lapin.jpg"
        },        
        {
            name: "lune",
            img: "images/lune.jpg"
        },
        {
            name: "lune",
            img: "images/lune.jpg"
        },
        {
          name: "lapin2",
          img: "images/lapin2.png"
      },
      {
          name: "lapin2",
          img: "images/lapin2.png"
      },
      {
          name: "dent",
          img: "images/dent.png"
      },
      {
          name: "dent",
          img: "images/dent.png"
      },   
        {
            name: "musique",
            img: "images/musique.jpg"
        },      
        {
            name: "musique",
            img: "images/musique.jpg"
        },
        {
          name: "cosmos",
          img: "images/cosmos.png"
      },
      {
          name: "cosmos",
          img: "images/cosmos.png"
      },
      {
          name: "animaux",
          img: "images/animaux.jpg"
      },
      {
          name: "animaux",
          img: "images/animaux.jpg"
      },        
      {
          name: "desert",
          img: "images/desert.jpg"
      },        
      {
          name: "desert",
          img: "images/desert.jpg"
      },              
      {
          name: "lapin",
          img: "images/lapin.jpg"
      },
      {
          name: "lapin",
          img: "images/lapin.jpg"
      },        
      {
          name: "lune",
          img: "images/lune.jpg"
      },
      {
          name: "lune",
          img: "images/lune.jpg"
      },
      {
        name: "lapin2",
        img: "images/lapin2.png"
    },
    {
        name: "lapin2",
        img: "images/lapin2.png"
    },
    {
        name: "dent",
        img: "images/dent.png"
    },
    {
        name: "dent",
        img: "images/dent.png"
    },   
      {
          name: "musique",
          img: "images/musique.jpg"
      },      
      {
          name: "musique",
          img: "images/musique.jpg"
      }
        
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector(".grid")
    const resultDisplay = document.querySelector("#result")
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img")
        card.setAttribute("src", "images/nuage.jpg")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipCard)
        grid.appendChild(card)
      }
    }

    function checkForMatch() {
      const cards = document.querySelectorAll("img")
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute("src", "images/nuage.jpg")
        cards[optionTwoId].setAttribute("src", "images/nuage.jpg")
        alert("Vous avez trouvez la bonne image!")
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert("Vous avez trouvez la bonne image!!")
        cards[optionOneId].setAttribute("src", "images/ok.png")
        cards[optionTwoId].setAttribute("src", "images/ok.png")
        cards[optionOneId].removeEventListener("click", flipCard)
        cards[optionTwoId].removeEventListener("click", flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute("src", "images/nuage.jpg")
        cards[optionTwoId].setAttribute("src", "images/nuage.jpg")
        alert("Oh la la... Recommencez. Appuyez sur ok pour continuer. Pas mal l'idée du pop-up pour perdre du temps?")
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = "Heja!! (Je parle pas suédois mais je trouve Le mot marrant) vous avez fini le jeu, appuyez sur je suis un noob pour recommencer"
      }else {
        cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2)
        alert("Heja!! (Je parle pas suédois mais je trouve Le mot marrant) vous avez fini le jeu, appuyez sur je suis un noob pour recommencer")
      }

    }

    function flipCard() {
      let cardId = this.getAttribute("data-id")
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute("src", cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 120)
      }
    }
    function startTimer(duration, display) {
      var timer = duration, minutes, seconds;
      setInterval(function () {
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);
  
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;
  
          display.textContent = minutes + ":" + seconds;
  
          if (--timer < 0) {
              timer = duration;
          }
      }, 1000);
  }
  
  window.onload = function () {
      var fiveMinutes = 20 * 6,
          display = document.querySelector('#time');
      startTimer(fiveMinutes, display);
  };
    createBoard()
  })

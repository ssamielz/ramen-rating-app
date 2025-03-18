document.addEventListener("DOMContentLoaded", function(){
  

    const ramens = [
      {
        id: 1,
        name: "Shoyu Ramen",
        restaurant: "Ichiran",
        image: "shoyu.jpg",
        rating: 5,
        comment: "Delicious!",
      },
     
      {
        id: 2,
        name: "Spicy Miso Ramen",
        restaurant: "Ippudo",
        image: "naruto.jpg",
        rating: 4,
        comment: "Rich and spicy broth!",
      },
      {
        id: 3,
        name: "Shio Ramen",
        restaurant: "Santouka",
        image: "gyukotsu.jpg",
        rating: 5,
        comment: "Light and perfectly balanced!",
      },
      {
        id: 4,
        name: "Kojiro",
        restaurant: "Afuri",
        image: "kojiro.jpg",
        rating: 4,
        comment: "Nutty and flavorful!",
      },
      {
        id: 5,
        name: "Nirvana",
        restaurant: "Rokurinsha",
        image: "nirvana.jpg",
        rating: 5,
        comment: "Thick noodles, amazing dipping sauce!",
      },
      {
        id: 6,
        name: "",
        restaurant: "",
        image: "",
        rating: '',
        comment:""
      }
    ];

const newImagesInside = document.getElementById('ramen-menu');
const imageToBeChanged = document.getElementById('ramen-detail');
const myRating = document.getElementById('myRating');
const myComment = document.getElementById('myComment');

  function displayRamens(){
    for(let element of ramens){
      const myImages = document.createElement('img');
      myImages.src = element.image;
      myImages.alt = element.name;
      myImages.classList.add('my-images-loaded');

      newImagesInside.appendChild(myImages);
      
    }
  }

  newImagesInside.addEventListener('click', handleClick)
  function handleClick(event){
    if(event.target.classList.contains('my-images-loaded')){
        imageToBeChanged.src = event.target.src;
        imageToBeChanged.alt = event.target.alt;
        
        const matchingSource = ramens.find((element) => element.image === event.target.src.slice(22))
       myRating.innerText = matchingSource.rating;
       myComment.innerText = matchingSource.comment;
      
    }
  }

  const button = document.getElementById('myButton');
  const myName = document.getElementById('name');
  const myRestaurant = document.getElementById('restaurant');
  const myUrl = document.getElementById('image');
  const myRatings = document.getElementById('rating');
  const myComments = document.getElementById('comment');


  function addSubmitListener(){
    button.addEventListener('click', function(e){
      e.preventDefault();
      myName.push(ramens)
      myRestaurant.push(ramens)
      myUrl.push(ramens)
      myRatings.push(ramens)
      myComments.push(ramens)
      
    });
  }


  (function main(){
    displayRamens();
    addSubmitListener();
  })();
  
})


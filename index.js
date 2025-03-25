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
     
    ];

let newImagesInside = document.getElementById('ramen-menu');
let imageToBeChanged = document.getElementById('ramen-detail');
let myRating = document.getElementById('myRating');
let myComment = document.getElementById('myComment');

  function displayRamens(){
    let mymenu = document.getElementById("ramen-menu");
    mymenu.innerHTML=""
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
    let myRating = document.getElementById('myRating');
    let myComment = document.getElementById('myComment');
    if(event.target.classList.contains('my-images-loaded')){
        imageToBeChanged.src = event.target.src;
        imageToBeChanged.alt = event.target.alt;
        
        const matchingSource = ramens.find((element) => element.name === event.target.alt)
        console.log(matchingSource.image);
        
       myRating.textContent = matchingSource.rating;
       myComment.textContent = matchingSource.comment;
      
    }
  }

  const button = document.getElementById('myButton');
 



      let newramen;
      let ramenform=document.getElementById("ramen-form")
      ramenform.addEventListener("submit",()=>{
        event.preventDefault();

        let myName = document.getElementById('name').value;
        let myRestaurant = document.getElementById('restaurant').value;
        let myUrl = document.getElementById('image').value;
        let newRating = document.getElementById('rating').value;
        let newComment = document.getElementById('comment').value;

        const newImage = document
        newramen={
          id:(ramens.length + 1),
          name:myName,
          restaurant:myRestaurant,
          image:myUrl,
          rating: parseInt(newRating, 10),
          comment:newComment
        }
       
        

      ramens.push(newramen)
      console.log(ramens);
      displayRamens();


            })
      



  function main(){
    displayRamens();
    //addSubmitListener();
  }
  main();
})


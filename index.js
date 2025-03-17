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
        name: "Miso Ramen",
        restaurant: "Menya",
        image: "miso.jpg",
        rating: 4,
        comment: "Very flavorful!",
      },
      {
        id: 3,
        name: "Tonkotsu Ramen",
        restaurant: "Ramen-ya",
        image: "tonkotsu.jpg",
      },
      {
        id: 4,
        name: "Spicy Miso Ramen",
        restaurant: "Ippudo",
        image: "naruto.jpg",
        rating: 4,
        comment: "Rich and spicy broth!",
      },
      {
        id: 5,
        name: "Shio Ramen",
        restaurant: "Santouka",
        image: "gyukotsu.jpg",
        rating: 5,
        comment: "Light and perfectly balanced!",
      },
      {
        id: 6,
        name: "Tantanmen",
        restaurant: "Afuri",
        image: "",
        rating: 4,
        comment: "Nutty and flavorful!",
      },
      {
        id: 7,
        name: "Tsukemen",
        restaurant: "Rokurinsha",
        image: "tsukemen.png",
        rating: 5,
        comment: "Thick noodles, amazing dipping sauce!",
      },
    ];

    // Changing images
  const images = document.querySelectorAll('.myImportedImages');
  const placeholder = document.getElementById('ramen-detail');
  images.forEach((image) => {  
    image.addEventListener('click', function(){
      placeholder.src = image.src;
      placeholder.alt = image.alt;
    });
   
  });
  
  
  });
  
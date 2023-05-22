'use strict'
console.log('hello world');

const mainContainer = document.getElementById('imgDiv')
const imgContainer1 = document.getElementById('img1');
const imgContainer2 = document.getElementById('img2');
const imgContainer3 = document.getElementById('img3');
const imgTitle1 = document.getElementById('img1title');
const imgTitle2 = document.getElementById('img2title');
const imgTitle3 = document.getElementById('img3title');
let count = 0;


function Images(img, imgPath){
    this.img = img;
    this.imgPath = imgPath;
    this.clicks = 0;
    this.votes = 0;
}
Images.allImages = [];

Images.allImages.push(new Images("bag", "Images/bag.jpg"));
Images.allImages.push(new Images("banana", "Images/banana.jpg"));
Images.allImages.push(new Images("bathroom", "Images/bathroom.jpg"));
Images.allImages.push(new Images("boots", "Images/boots.jpg"));
Images.allImages.push(new Images("breakfast", "Images/breakfast.jpg"));
Images.allImages.push(new Images("bubblegum", "Images/bubblegum.jpg"));
Images.allImages.push(new Images("chair", "Images/chair.jpg"));
Images.allImages.push(new Images("cthulhu", "Images/cthulhu.jpg"));
Images.allImages.push(new Images("dog-duck", "Images/dog-duck.jpg"));
Images.allImages.push(new Images("dragon", "Images/dragon.jpg"));
Images.allImages.push(new Images("pen", "Images/pen.jpg"));
Images.allImages.push(new Images("pet-sweep", "Images/pet-sweep.jpg"));
Images.allImages.push(new Images("scissors", "Images/scissors.jpg"));
Images.allImages.push(new Images("shark", "Images/shark.jpg"));
Images.allImages.push(new Images("sweep", "Images/sweep.png"));
Images.allImages.push(new Images("tauntaun", "Images/tauntaun.jpg"));
Images.allImages.push(new Images("unicorn", "Images/unicorn.jpg"));
Images.allImages.push(new Images("water-can", "Images/water-can.jpg"));
Images.allImages.push(new Images("wine-glass", "Images/wine-glass.jpg"));

Images.prototype.renderImages = function(title, image){
    title.textContent = this.img;
    image.src = this.imgPath;
    this.views ++;
}

function randomizeArray(){
    let myArray = Images.allImages;
    let randomArray = myArray.sort(function(){return (Math.random()-0.5)});
    console.log(randomArray)
    }

    function getThreeImages(){
        randomizeArray();
      let img1 = Images.allImages[0];
      let img2 = Images.allImages[1];
      let img3 = Images.allImages[2];
      img1.renderImages(imgTitle1, imgContainer1);
      img2.renderImages(imgTitle2, imgContainer2);
      img3.renderImages(imgTitle3, imgContainer3);
    };

    function handleClick(e){
        let imageClicked = e.target.id;
        if(imageClicked === "img1" || imageClicked === "img2" || imageClicked === "img3"){
            mainContainer.views++;
            count++;
        }
        if(imageClicked === "img1"){
            imgContainer1.clicks++;
        }
        if(imageClicked === "img2"){
            imgContainer2.clicks++;
        }
        if(imageClicked === "img3"){
            img.imgContainer3.clicks++;  
        }
    }
// Put array into local storage
function putArrayInStorage(){
    let stringArray = JSON.stringify(Images.allImages);
    if (stringArray = []){
        localStorage.setItem('images', stringArray);
    }
    else(localStorage.setItem('images', stringArray));
}

//Get images from storage
function getArrayFromStorage(){
    let storedImage = localStorage.getItem('images');
    if(storedImage){
        let newImage = JSON.parse(storedImage);
        for(let images of newImage){
            let myNewImage = new Images(images.name, images.imgPath, images.views, images.clicks);
            Images.allImages.push(myNewImage)
        }
    }
}

//Function to remove images from the applicaiton
function removeImages(){
    document.getElementById('img1').style.display = 'none';
    document.getElementById('img2').style.display = 'none';
    document.getElementById('img3').style.display = 'none';
}

// Function to change images on click. 
function handleClick(e){
    let imageClicked = e.target.id;
    if(imageClicked === 'img1' || imageClicked === 'img2' || imageClicked === 'img3'){
    }
    if(imageClicked === 'img1'){
        Images.allImages[0].clicks++;
    }    
    if(imageClicked === 'img2'){
        Images.allImages[1].clicks++;
    }
    if(imageClicked === 'img3'){
        Images.allImages[2].clicks++;
    } 
    getThreeImages(); 
    if (count === 5){
        removeImages();
        document.write('<h1>The test is over now</h1>');
        console.log(Images.allImages);
    }
    putArrayInStorage();
}
mainContainer.addEventListener('click', handleClick);
console.log(Images);
getArrayFromStorage();
getThreeImages();
function graph(){
const ctx = document.getElementById('myChart');

    let imageNames = [];
    let imageClicks = [];
    let imageViews = [];

    // for(let image of Image.allImages){
    //     imageNames.push(image.name);
    //     imageClicks.push(image.clicks);
    //     imageViews.push(image.views);
    // }

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Bathroom', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Clicks',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
graph()
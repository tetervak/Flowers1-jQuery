/* Alex Tetervak, Sheridan College, Ontario */
import { Flower } from './modules/flower.mjs';

const names = ["aster", "carnation", "daffodil", "orchid", "rose"];

// mae the array of the flower objects
let flowers = [];
names.forEach(name => flowers.push(new Flower(name)));

// preload the images
let images = [];
flowers.forEach(function(flower){
  let image = new Image();
  image.src = flowerImageSrc(flower.name);
  images.push(image);
});

// called when the document is ready
$(document).ready(init);
function init(){
  // make the list of the select-option input box
  makeSelectList();
  // display the first flower
  showFlower(0);
  // update the image when the selection is changed
  setupImageChanges();
}

function flowerImageSrc(name){
  return `images/flowers/${name}_large.jpeg`;
}

// makes the list of the select-option input box
function makeSelectList() {
  let $list = $("#select_flower");
  flowers.forEach(function(flower, index){
    $list.append(`<option value='${index}'>${flower.label}</option>`)
  });
}

// display the flower image
function showFlower(index) {
  let flower = flowers[index];
  $("img.flower_image")
      .attr("src", flowerImageSrc(flower.name))
      .attr("alt", flower.label);
}

// update the image when the selection is changed
function setupImageChanges() {
  $("#select_flower").change(function(){
    let index = $(this).val();
    showFlower(index);
  });
}

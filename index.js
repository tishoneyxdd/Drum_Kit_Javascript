//alert("hehehe")

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) 
{
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    sounds(buttonInnerHTML);
    Animation(buttonInnerHTML);

  });
}
document.addEventListener("keypress", function(event)  {
  sounds(event.key);
  Animation(event.key);
});
  function sounds(key) {

    switch (key) {
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
  
      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
  
      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
  
      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
  
      case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
  
      case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
  
      case "l":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;
  
  
      default: console.log(key);
  
    }
  }
  function Animation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("daddy");
  
    setTimeout(function() {
      activeButton.classList.remove("daddy");
    }, 100);
  
  }
  // function test(name){
  //   alert(`Teri Gand Maardunga ${name}`);
  // }
  //                                            //callback function
  // function processUser(backCall){
  //   const name = prompt("Enter Your Name.");
  //   backCall(name)
  // }
  // processUser(test);



// const houseKeeper = {firstName:"BruhBruh",
// lastName:"Bruh",
// age:17,
// eyeColor:"Black",
// Fees:6900
// };
// function multiply(){
//     num1 * num2
// }
// function add(){
//  num1 + num2
// }
// function mod(){
//     num1 % num2
// }
// function sub(){
//     num1 - num2
// }
// function divide(){
//     num1 / num2
// }
// function calculate( num1, num2, operator)

// function Housekeeper (name, age, eyeColor, Price){
//     this.name= name;
//     this.age= age;
//     this.eyeColor= colour;
//     this.Price= price;

// }
//  const Housekeeper = new Housekeeper ("Sambhav","17","Black","69420");
// alert("working in progress")


// STEP 1
//console.log('hello world')


document.querySelector

//STEP 5
var message = document.querySelector('#message')



//STEP 2-ADD the movie by listing (ul) (html and css not change anything)
function addMovie(event){
event.preventDefault();
var inputField = document.querySelector("input");


const movie = document.createElement("li");


const movieTitle = document.createElement ("span");

//STEP 4
movieTitle.addEventListener("click", crossOffMovie);
//

movieTitle.textContent = inputField.value;
movie.appendChild(movieTitle);

//STEP 3
const deleteBtn = document.createElement("button");
deleteBtn.textContent = "x";
deleteBtn.addEventListener("click", deleteMovie);
movie.appendChild(deleteBtn);
//

const list = document.querySelector("ul");
list.appendChild(movie);
inputField.value = ""
}


document.querySelector("form").addEventListener("submit", addMovie);


// STEP 3
// function deleteMovie(event){

// //STEP 5
// message.textContent = 'Movie deleted!'

// event.target.parentNode.remove();

// }




//STEP 4-5
// function crossOffMovie(event){
// if(event.target.classList.toggle("checked") === true){
//   message.textContent = 'Movie watched!'
// }else{
//   message.textContent = 'Movie added back'
// }
// }



//intermediate instruction
//STEP 1
function revealMessage(){
  message.classList.remove('hide')
  setTimeout(() =>{
    message.classList.add('hide')
  }, 2000);

}


//STEP 2
function crossOffMovie(event) {
  if (event.target.classList.toggle("checked") === true) {
    event.target= `${event.target.textcontent} watched!`
  } else {
    event.target = `${event.target.textcontent} added back!`
  }
}



//STEP 3

function deleteMovie(event) {

  message.textContent = `${event.target.parentNode.childNodes[0]} deleted`
  event.target.parentNode.remove();

  revealMessage()
}

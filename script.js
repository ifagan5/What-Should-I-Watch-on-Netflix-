//DTSET ACCESSED FROM: https://github.com/b-mcavoy/datasets/tree/main
var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Culture%20%26%20Entertainment/Netflix%20Content.csv"
//making all our variables
//lists we will use in our function
var matches = [];
var matchesIds = [];
var finalMtches = [];

//what we are taking from the repository 
var titles = getColumn(url, 2);
var types = getColumn(url,1);
var ratings = getColumn(url, 6);
var genres = getColumn(url, 7);
//the the user puts into the program
var userType;
var userRating;
var userGenres = [];

var index = 0;

function getMatches(userType, userRating) {
        var matches = [];
        var matchesIds = [];
    var selectedGenres = getGenres()

    // userLifeSpan = document.getElementById("lifeSpan").value//assigns the value from the HTML element with the Id "lifespan" to my age varaible 
    // userSize = document.getElementById("size").value//assigns the value from the HTML element with the Id "size" to my size varaible 
/*if the user selected for the minimum life span to be <11 yrs
        and size to be small
        we loop through the list and add each cat name and
        cooresponding cat id to the lists that fit both .
         */
    
    if (userType == "movie" && userRating == "TV-Y"){
        for(var i = 0; i < titles.length; i++){
            if (types[i] == "Movie" && ratings[i] == "TV-Y"){
                matches.push(titles[i]);
                matchesIds.push(i);
            }
        }

    }
 
   
   else  if (userType == "tv" && userRating == "TV-Y"){
        for(var i = 0; i < titles.length; i++){
            if (types[i] == "TV Show" && ratings[i] == "TV-Y"){
                matches.push(titles[i]);
                matchesIds.push(i);
            }
        }

    }

    else if (userType == "movie" && userRating == "TV-Y7"){
        for(var i = 0; i < titles.length; i++){
            if (types[i] == "Movie" && ratings[i] == "TV-Y7"){
               matches.push(titles[i]);
                matchesIds.push(i);
            }
        }

    }
   
    else if (userType == "tv" && userRating == "TV-Y7"){
        for(var i = 0; i < titles.length; i++){
            if (types[i] == "TV Show" && atings[i] == "TV-Y7"){
                matches.push(titles[i]);
                matchesIds.push(i);
            }
        }

    }

    else if (userType == "movie" && userRating == "PG"){
        for(var i = 0; i < titles.length; i++){
            if (types[i] == "Movie" && ratings[i] == "PG"){
                matches.push(titles[i]);
                matchesIds.push(i);
            }
        }

    }

   else if (userType == "tv" && userRating == "PG"){
        for(var i = 0; i < titles.length; i++){
            if (types[i] == "TV Show" && ratings[i] == "PG" ){
                matches.push(titles[i]);
                matchesIds.push(i);
            }
        }

    }
    else if (userType == "movie" && userRating == "TV-PG"){
        for(var i = 0; i < titles.length; i++){
            if (types[i] == "Movie" && ratings[i] == "TV-PG"){
                matches.push(titles[i]);
                matchesIds.push(i);
            }
        }

    }

    else if (userType == "tv" && userRating == "TV-PG"){
        for(var i = 0; i < titles.length; i++){
            if (types[i] == "TV Show" && ratings[i] == "TV-PG" ){
                matches.push(titles[i]);
                matchesIds.push(i);
            }
        }

    }

    else if (userType == "movie" && userRating == "PG-13"){
        for(var i = 0; i < titles.length; i++){
            if (types[i] == "Movie" && ratings[i] == "PG-13" ){
                matches.push(titles[i]);
                matchesIds.push(i);
            }
        }

    }

    else if (userType == "tv" && userRating == "PG-13"){
        for(var i = 0; i < titles.length; i++){
            if (types[i] == "TV Show" && ratings[i] == "PG-13" ){
                matches.push(titles[i]);
                matchesIds.push(i);
            }
        }

    }

   else if (userType == "movie" && userRating == "TV-14"){
        for(var i = 0; i < titles.length; i++){
            if (types[i] == "Movie" && ratings[i] == "TV-14" ){
                matches.push(titles[i]);
                matchesIds.push(i);
            }
        }

    }

   else if (userType == "tv" && userRating == "TV-14"){
        for(var i = 0; i < titles.length; i++){
            if (types[i] == "TV Show" && ratings[i] == "TV-14" ){
                matches.push(titles[i]);
                matchesIds.push(i);
            }
        }

    }

   else if (userType == "movie" && userRating == "G"){
        for(var i = 0; i < titles.length; i++){
            if (types[i] == "Movie" && ratings[i] == "G" ){
                matches.push(titles[i]);
                matchesIds.push(i);
            }
        }

    }

    else if (userType == "tv" && userRating == "G"){
        for(var i = 0; i < titles.length; i++){
            if (types[i] == "TV Show" && ratings[i] == "G" ){
                matches.push(titles[i]);
                matchesIds.push(i);
            }
        }

    }

   else if (userType == "movie" && userRating == "TV-G"){
        for(var i = 0; i < titles.length; i++){
            if (types[i] == "Movie" && ratings[i] == "TV-G" ){
                matches.push(titles[i]);
                matchesIds.push(i);
            }
        }

    }

   else if (userType == "tv" && userRating == "TV-G"){
        for(var i = 0; i < titles.length; i++){
            if (types[i] == "TV Show" && ratings[i] == "TV-G" ){
                matches.push(titles[i]);
                matchesIds.push(i);
            }
        }

    }

   else if (userType == "movie" && userRating == "TV-MA"){
        for(var i = 0; i < titles.length; i++){
            if (types[i] == "Movie" && ratings[i] == "TV-MA" ){
                matches.push(titles[i]);
                matchesIds.push(i);
            }
        }

    }

    else if (userType == "tv" && userRating == "TV-MA"){
        for(var i = 0; i < titles.length; i++){
            if (types[i] == "TV Show" && ratings[i] == "TV-MA" ){
                matches.push(titles[i]);
                matchesIds.push(i);
            }
        }

    }

    else if (userType == "movie" && userRating == "R"){
        for(var i = 0; i < titles.length; i++){
            if (types[i] == "Movie" && ratings[i] == "R" ){
                matches.push(titles[i]);
                matchesIds.push(i);
            }
        }

    }

    else if (userType == "tv" && userRating == "R"){
        for(var i = 0; i < titles.length; i++){
            if (types[i] == "TV Show" && ratings[i] == "R" ){
                matches.push(titles[i]);
                matchesIds.push(i);
            }
        }

    }

   else if (userType == "movie" && userRating == "NC-17"){
        for(var i = 0; i < titles.length; i++){
            if (types[i] == "Movie" && ratings[i] == "NC-17" ){
                matches.push(titles[i]);
                matchesIds.push(i);
            }
        }

    }

    else if (userType == "tv" && userRating == "NC-17"){
        for(var i = 0; i < titles.length; i++){
            if (types[i] == "TV Show" && ratings[i] == "NC-17" ){
                matches.push(titles[i]);
                matchesIds.push(i);
            }
        }

    }
    

    console.log(matches);
    console.log(matchesIds);
   
    var selectedGenres = getGenres();
    console.log(selectedGenres)
    /*saves what is returned during the function getGenres
    to a variable so we can use it later */

    /*goes through the recommended cats
        if that cat includes one of the selected temperments
    add that cat to the finalCats list */
    finalMatches = [];
    var i = 0;
    while (i < matches.length){
        console.log(genres[matchesIds[i]]);
        for (var j = 0; j < selectedGenres.length; j++) {
            if (genres[matchesIds[i]].includes(selectedGenres[j])) {
                if (!finalMatches.includes(matches[i])){
                    finalMatches.push(matches[i]);
                }
                 
            }
        }
        
        /*if one of the selected temperments appears in temperments at the
    index saved in reccomendedCatsIdx;  push that cat to the final list */
    i++;
    }
    console.log(finalMatches);
    updateScreen();
}


function getGenres() {
    /*loops through all of the 
    genres adding the selected ones
    to a list: selectedGenres */
    var selectedGenres = [];
    for (var i =0; i < 18; i++) {
        var el = document.getElementById(i);
        if(el.checked == true){
            selectedGenres.push(el.value);
        }
    }

    return selectedGenres;
}

function rightClick(){
    //increase the current value of index by one
    if(index < finalMatches.length - 1) { //prevents froms going past the last valid index
    index++;
    
    }
    //set the number that is displayed to the index
    document.getElementById("num").innerHTML = index +1;
    
    updateScreen();
  }

function leftClick(){
    //reduce the current value of index by one 
    if(index > 0){//prevents it from going below zero
    index--;
    }
    //set the number that is displayed to the index
    document.getElementById("num").innerHTML = index +1;
    
    updateScreen();
  }



  function updateScreen(){
    //if the list is not empty
    if (finalMatches.length > 0) {
        //display the new list item on the screen
        document.getElementById("output").innerHTML = finalMatches[index];
      //and show the number of the new item in the position spot
    }
    else {//if the list is empty
      //show our text on the screen
      document.getElementById("output").innerHTML = "There is nothing that match your description! Please try again!";
    }
    
    updateScreen();
  }

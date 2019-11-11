function buttoncreate() {
    document.getElementById('paragraph').innerHTML = "Well OK, you clicked it anyway..."
}



function backgroundred() {
    document.body.style.backgroundColor = "red";

}

function backgroundblue() {
    document.body.style.backgroundColor = "blue";
    
}

function backgroundyellow() {
    document.body.style.backgroundColor = "yellow";
    
}

function backgroundwhite() {
    document.body.style.backgroundColor = "white";
    
}

function backgroundImage() {
    document.body.style.backgroundImage = "url('http://blogs.discovermagazine.com/d-brief/files/2019/02/Ocean-Blue.jpg')";
}


 /*You can't change the background to and image and then 
 turn it back to a color unless you reset the background
 with "initial" which sets it to the default way it is 
 set when you first load the page */

function removebackgroundimage() {
    document.body.style.backgroundImage = "initial"; 
}

function alertbutton() {
    alert("You have been alerted");
}
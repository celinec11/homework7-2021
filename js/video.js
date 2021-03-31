var video = document.getElementById("player1");
var play = document.querySelector("#play");
var pause = document.querySelector("#pause");
var mute = document.querySelector("#mute");
var slower = document.querySelector("#slower");
var faster = document.querySelector("#faster");
var skip = document.querySelector("#skip");
var slider = document.querySelector("#slider");
var vintage = document.querySelector("#vintage");
var orig = document.querySelector("#orig");




//Styled: Utilize the existing oldSchool class on the video element
//Original: Remove the oldSchool class from the video.






window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

play.addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	var volume = video.volume*100; 
	document.querySelector("#volume").innerHTML = volume +"%"; 
 });


pause.addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
 });

 mute.addEventListener("click", function() {
    if (video.muted === false) { 
		console.log("Mute Video");  
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Ummute";

 	}

 	else {
		console.log("Ummute Video");  
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
 	}
 });

 slower.addEventListener("click", function() {
	video.playbackRate = video.playbackRate*0.95;
	console.log("New Speed is " + video.playbackRate);
 });

faster.addEventListener("click", function() {
	video.playbackRate = video.playbackRate/0.95;
	console.log("New Speed is " + video.playbackRate);
 });
 
skip.addEventListener("click", function() {
	console.log("Original Location: " + video.currentTime);
	var num = video.currentTime + 15;

	if(num > video.duration){
		console.log("Going back to beginning");
		video.currentTime  = 0;
		console.log("New Location: " + video.currentTime);
		video.play();
	}

	else{
		video.currentTime  = video.currentTime+15;
		console.log("New Location: " + video.currentTime);
	}
	
 });
 
slider.addEventListener("change", function() {
	video.volume = slider.value/100;
	console.log(video.volume);
	var volume = video.volume*100; 
	document.querySelector("#volume").innerHTML = volume +"%"; 
}); 


vintage.addEventListener("click", function() {
	video.classList.add("oldSchool");
 });

orig.addEventListener("click", function() {
	video.classList.remove("oldSchool");
 });


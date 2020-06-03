// Selecting the nav tabs from the navigation

const nowPlayLink = document.querySelector('#NP');
// const popLink = document.querySelector('#PM');
// const topLink = document.querySelector('#TRM');
// const trendLink = document.querySelector('#TM');
// const upLink = document.querySelector('#UP');
const louFlix = document.querySelector('#louFlix');

louFlix.onclick = function () {
    window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
});
  return false
}


// popLink.onclick = function () {
//     window.scrollTo({
//   top: 1980,
//   left: 0,
//   behavior: 'smooth'
// });
//   return false
// }

// topLink.onclick = function () {
//     window.scrollTo({
//   top: 2560,
//   left: 0,
//   behavior: 'smooth'
// });
//   return false
// }

// trendLink.onclick = function () {
//     window.scrollTo({
//   top: 3120,
//   left: 0,
//   behavior: 'smooth'
// });
//  return false
// }


// upLink.onclick = function () {
//     window.scrollTo({
//   top: 3700,
//   left: 0,
//   behavior: 'smooth'
// });
//  return false
// }



// this is the play video function


var video = document.getElementById("Video");

// Get the button
var btn = document.getElementById("jumboBtn");

// Pause and play the video, and change the button text

function playVideo() {
  if (video.paused) {
    video.play();
    btn.innerHTML = '<i class="fas fa-pause fa-sm" ></i>';
  } else {
    video.pause();
    btn.innerHTML = '<i class="fas fa-play"></i>';
  }
} 

// more info display on click

// const moreInfoBtn = document.querySelector('#moreInfoBtn');
// moreInfoBtn.onclick = function () {
//     console.log('info button is clicked')

//     var x = document.getElementById("textDisplay");
//     if (x.style.display === "block") {
//         x.style.display = "none";
//     } else {
//         x.style.display = "block";
//     }
// }

// audio button 

const audioBtn = document.querySelector('#audioBtn');
const audioBtnMute = document.querySelector('#audioBtnMute');
audioBtnMute.style.display = 'none';
const mainVideo = document.getElementById('Video');


function audioOn() {
audioBtn.onclick = function () {
    console.log('audio button is clicked')
    mainVideo.muted = false;
    audioBtn.style.display = 'none';
  audioBtnMute.style.display = 'inline';
  
  $("iframe").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
});
    
}
}

audioOn();


function audioMuted() {
  audioBtnMute.onclick = function () {
    console.log('audio button is clicked')
    mainVideo.muted = true;
    audioBtn.style.display = 'inline';
    audioBtnMute.style.display = 'none' 
  }

}

audioMuted() 


// to silence main video when the small videos are clicked 

const movieDivClick = document.querySelector('#movies-container').onclick = function () {
  
  
  mainVideo.muted = true;
  audioBtnMute.style.display = 'none'
  audioBtn.style.display = 'inline';
    $("iframe").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
});

}


document.querySelector('#movies-searchable').onclick = function () {

  mainVideo.muted = true;
  audioBtnMute.style.display = 'none'
  audioBtn.style.display = 'inline';
    $("iframe").each(function() { 
        var src= $(this).attr('src');
        $(this).attr('src',src);  
});
}


// stop iframe videos on close

// $(".nav-item").on("click", function(e){
//   $("li.nav-item").removeClass("active");
//   $(this).addClass("active");
//   console.log('hello world')
// });

$(document).ready(function(){
  $('ul li a').click(function(){
    $('li a').removeClass("active");
    $(this).addClass("active");
});
});




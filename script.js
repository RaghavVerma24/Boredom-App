var i = 0;

function randomSite(){
  var i = Math.floor((Math.random() * 4) + 1);

    if (i == 1){
      window.open("TicTacToe/TicTacToe.html")
    }
    if (i == 2){
      window.open("RockPaperScissors/rock.html")
    }
    if (i == 3){
      window.open("ButtonGame/button.html")
    }
    if (i == 4){
      window.open("Connect4/Connect4.html")
    }
}


function randomVideo(){
  let arr = [
    "https://www.youtube.com/embed/Gyr9hKoD59o?autoplay=1",
    "https://www.youtube.com/embed/loI_lPLSZxY?autoplay=1",    
    "https://www.youtube.com/embed/cfiPB8omuQQ?autoplay=1",
    "https://www.youtube.com/embed/L14z1I43v50?autoplay=1",
    "https://www.youtube.com/embed/1rveFObzeX8?autoplay=1",
    "https://www.youtube.com/embed/B5zsuWDztZ8?autoplay=1",
    "https://www.youtube.com/embed/08DqYjgJuVg?autoplay=1",
    "https://www.youtube.com/embed/DksDfH6foys?autoplay=1",
    "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    "https://www.youtube.com/embed/EE-xtCF3T94?autoplay=1",
    "https://www.youtube.com/embed/nHc288IPFzk?autoplay=1",
    "https://www.youtube.com/embed/jvYPUHpZerU?autoplay=1", 
    "https://www.youtube.com/embed/uOCGomYWdG0?autoplay=1",
    "https://www.youtube.com/embed/sDj72zqZakE?autoplay=1",
    "https://www.youtube.com/embed/X4UdnWoK754?autoplay=1",
    "https://www.youtube.com/embed/QFxjM-6AStA?autoplay=1",//New Video 
    "https://www.youtube.com/embed/kCeUvxRF0JI?autoplay=1",//New Video
    "https://www.youtube.com/embed/8ujGHnVCnM8?autoplay=1",//New Video
    "https://www.youtube.com/embed/xRYJL9lTZ2s?autoplay=1",//New Video
    "https://www.youtube.com/embed/ggJueBSS_P0?autoplay=1",//New Video
    "https://www.youtube.com/embed/Z47xwzYGop8?autoplay=1",//New Video
    "https://www.youtube.com/embed/FBgLytbB-uE?autoplay=1",//New Video
    "https://www.youtube.com/embed/SvrsrP6wx2Y?autoplay=1",//New Video
    "https://www.youtube.com/embed/pFADpsmH_5U?autoplay=1",//New Video
    "https://www.youtube.com/embed/PsJvB4y4yxQ?autoplay=1"
  ];
  
  i += 1;
  if (i > arr.length - 1 ){
    i = 0; 
  }
  console.log(i)
  document.getElementById("videoPlayer").src = `${arr[i]}`;
}



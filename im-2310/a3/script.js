// var audio = document.getElementById("audio1");
//audio.play(); 

let soundSourceArray = [
    document.getElementById("audio1"),
    document.getElementById("audio2"),
    document.getElementById("audio3"),
    document.getElementById("audio4"),
    document.getElementById("audio5"),
    document.getElementById("audio6"),
    document.getElementById("audio7"),
    document.getElementById("audio8"),
]

function startAudio (){
   soundSourceArray[0].play();
   soundSourceArray[0].muted=true;
   soundSourceArray[1].play();
   soundSourceArray[1].muted=true;
   soundSourceArray[2].play();
   soundSourceArray[2].muted=true;
   soundSourceArray[3].play();
   soundSourceArray[3].muted=true;
   soundSourceArray[4].play();
   soundSourceArray[4].muted=true;
   soundSourceArray[5].play();
   soundSourceArray[5].muted=true;
   soundSourceArray[6].play();
   soundSourceArray[6].muted=true;
   soundSourceArray[7].play();
   soundSourceArray[7].muted=true;

   document.getElementById("block-1").classList.add("blockHover")
   document.getElementById("block-2").classList.add("blockHover")
   document.getElementById("block-3").classList.add("blockHover")
   document.getElementById("block-4").classList.add("blockHover")
   document.getElementById("block-5").classList.add("blockHover")
   document.getElementById("block-6").classList.add("blockHover")
   document.getElementById("block-7").classList.add("blockHover")
   document.getElementById("block-8").classList.add("blockHover")

   document.getElementById("block-1").classList.remove("blockReveal")
   document.getElementById("block-2").classList.remove("blockReveal")
   document.getElementById("block-3").classList.remove("blockReveal")
   document.getElementById("block-4").classList.remove("blockReveal")
   document.getElementById("block-5").classList.remove("blockReveal")
   document.getElementById("block-6").classList.remove("blockReveal")
   document.getElementById("block-7").classList.remove("blockReveal")
   document.getElementById("block-8").classList.remove("blockReveal")



    console.log(audio);
}

function muteAudio (e){

    soundSourceArray [e.target.dataset.audioid].muted=true;
}

function unmuteAudio (e){

    soundSourceArray [e.target.dataset.audioid].muted=false;
    console.log (e.target.dataset.audioid)
}

function unmuteAudioClick (e){

    soundSourceArray [e.target.dataset.audioid].muted=false;
    e.target.removeEventListener ("mouseleave", muteAudio)
    e.target.classList.remove("blockHover")
    e.target.classList.add("blockReveal")

}

document.getElementById("block-1").addEventListener("mouseenter", unmuteAudio)
document.getElementById("block-2").addEventListener("mouseenter", unmuteAudio)
document.getElementById("block-3").addEventListener("mouseenter", unmuteAudio)
document.getElementById("block-4").addEventListener("mouseenter", unmuteAudio)
document.getElementById("block-5").addEventListener("mouseenter", unmuteAudio)
document.getElementById("block-6").addEventListener("mouseenter", unmuteAudio)
document.getElementById("block-7").addEventListener("mouseenter", unmuteAudio)
document.getElementById("block-8").addEventListener("mouseenter", unmuteAudio)


document.getElementById("block-1").addEventListener("mouseleave", muteAudio)
document.getElementById("block-2").addEventListener("mouseleave", muteAudio)
document.getElementById("block-3").addEventListener("mouseleave", muteAudio)
document.getElementById("block-4").addEventListener("mouseleave", muteAudio)
document.getElementById("block-5").addEventListener("mouseleave", muteAudio)
document.getElementById("block-6").addEventListener("mouseleave", muteAudio)
document.getElementById("block-7").addEventListener("mouseleave", muteAudio)
document.getElementById("block-8").addEventListener("mouseleave", muteAudio)

document.getElementById("block-1").addEventListener("click", unmuteAudioClick)
document.getElementById("block-2").addEventListener("click", unmuteAudioClick)
document.getElementById("block-3").addEventListener("click", unmuteAudioClick)
document.getElementById("block-4").addEventListener("click", unmuteAudioClick)
document.getElementById("block-5").addEventListener("click", unmuteAudioClick)
document.getElementById("block-6").addEventListener("click", unmuteAudioClick)
document.getElementById("block-7").addEventListener("click", unmuteAudioClick)
document.getElementById("block-8").addEventListener("click", unmuteAudioClick)


window.addEventListener('click',() =>{
  prompt();
})
window.addEventListener('keydown', function(e){

    //select corresponding audio
    let audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    let key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio){
        return //stop the function from running all together
      }
      audio.currentTime = 0; // rewind to the start, here currentTime is an HTML property
      audio.play();           // play is also an html function which is available with audio and video tags
      key.classList.add('playing');
    })

const soundtrack=document.getElementById('soundtrack');
const soundtrackToggle=document.getElementById('soundtrackToggle');
const soundtrackLabel=document.getElementById('soundtrackLabel');
let musicStarted=false;
soundtrack.volume=0.3;
function updateMusic(){
 const playing=!soundtrack.paused;
 soundtrackToggle.setAttribute('aria-pressed',String(playing));
 soundtrackToggle.setAttribute('aria-label',playing?'Pause Solar Eclipse':'Play Solar Eclipse');
 soundtrackLabel.textContent=playing?'Solar Eclipse · pause':'Solar Eclipse · play';
}
function playMusic(){
 musicStarted=true;
 const playRequest=soundtrack.play();
 if(playRequest&&typeof playRequest.catch==='function')playRequest.catch(()=>{
  soundtrackLabel.textContent='Tap for music';
  soundtrackToggle.setAttribute('aria-label','Play Solar Eclipse');
  soundtrackToggle.setAttribute('aria-pressed','false');
 });
}
// Call play directly inside the first tap so Safari can allow sound.
document.addEventListener('click',event=>{
 if(!musicStarted&&!event.target.closest('#soundtrackToggle'))playMusic();
},true);
soundtrackToggle.addEventListener('click',()=>{
 musicStarted=true;
 if(soundtrack.paused){if(soundtrack.error)soundtrack.load();playMusic();}
 else soundtrack.pause();
});
soundtrack.addEventListener('playing',updateMusic);
soundtrack.addEventListener('pause',updateMusic);
soundtrack.addEventListener('error',()=>{
 soundtrackLabel.textContent='Retry music';
 soundtrackToggle.setAttribute('aria-label','Retry Solar Eclipse playback');
 soundtrackToggle.setAttribute('aria-pressed','false');
});

let view=0, busy=false;
const visited=new Set([0]);
const coverScene=document.getElementById('coverScene'), reader=document.getElementById('reader');
const left=document.getElementById('leftPage'),right=document.getElementById('rightPage'),spread=document.getElementById('spread');
const next=document.getElementById('next'),previous=document.getElementById('previous');
const escapeText=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const flower='<img class="flower" src="pressed-flowers.png" alt="" aria-hidden="true">';
function render(){
 left.className='paper left-page';right.className='paper right-page';
 if(view==='contents'){
  left.classList.add('dedication');right.classList.add('toc-page');
  left.innerHTML='<p class="chapter-kicker">a place to come back to</p><h1>For every<br>version of<br><em>Hiba.</em></h1><p class="handwritten margin-note">the laughing you.<br>the tired you.<br>the you I haven’t met yet.</p>'+flower+'<span class="small-heart">♡</span>';
  right.innerHTML='<h2>Read me when…</h2><div class="contents">'+chapters.slice(0,21).map((c,i)=>'<button data-chapter="'+i+'"><span class="number">'+String(i+1).padStart(2,'0')+'</span><span>Read me when '+escapeText(c.title)+'</span>'+(visited.has(i)?'<span class="check" aria-label="Opened">✓</span>':'')+'</button>').join('')+'</div>';
  right.querySelectorAll('[data-chapter]').forEach(b=>b.addEventListener('click',()=>turn(Number(b.dataset.chapter))));
  document.getElementById('chapterLabel').textContent='find your page';document.getElementById('pageNumber').textContent='a little map of the book';
  previous.disabled=false;next.disabled=false;next.textContent='Begin chapter 02';
 }else{
  visited.add(view);const c=chapters[view];
  left.innerHTML='<p class="chapter-kicker">'+(view===21?'one last folded page':'letter '+String(view+1).padStart(2,'0'))+'</p><div class="stars" aria-hidden="true">✧ · ✦</div><h1 tabindex="-1">Read me when '+escapeText(c.title)+(view===0?'.':'')+'</h1><p class="handwritten">'+escapeText(c.subtitle)+'</p><p class="handwritten '+(view===0?'birthday-note':'margin-note')+'">'+escapeText(c.note).replaceAll('\n','<br>')+'</p>'+flower+'<span class="small-heart" aria-hidden="true">♡</span>';
  right.innerHTML='<div class="letter-scroll" tabindex="0" aria-label="Letter '+(view+1)+'"><div class="letter">'+c.body.map((p,i)=>'<p'+(i===0?' class="salutation"':'')+'>'+escapeText(p)+'</p>').join('')+'</div><div class="poem">'+escapeText(c.poem)+'</div>'+(view===0?'<p class="poem-note">now stop staring at the first page and keep reading 😭♡</p>':'<p class="signature">with love, always ♡</p>')+'</div>';
  document.getElementById('chapterLabel').textContent=view===21?'a secret, just for you':view===0?'the beginning':'for this version of you';
  document.getElementById('pageNumber').textContent=view===21?'the last page ♡':String(view+1).padStart(2,'0')+' / 21';
  previous.disabled=view===0;next.disabled=false;next.textContent=view===21?'Back to the contents':view===20?'One more page':view===0?'Turn the page':'Next letter';
 }
}
function turn(target){if(busy)return;busy=true;spread.classList.add('turning');setTimeout(()=>{view=target;render();},150);setTimeout(()=>{spread.classList.remove('turning');busy=false;const heading=left.querySelector('h1');if(heading)heading.focus({preventScroll:true});if(window.innerWidth<761)reader.scrollIntoView({behavior:'smooth',block:'start'});},450);}
document.getElementById('cover').addEventListener('click',()=>{if(busy)return;busy=true;coverScene.classList.add('opening');setTimeout(()=>{coverScene.hidden=true;reader.hidden=false;view=0;render();busy=false;left.querySelector('h1').focus({preventScroll:true});},matchMedia('(prefers-reduced-motion: reduce)').matches?30:1200);});
document.getElementById('closeBook').addEventListener('click',()=>{reader.hidden=true;coverScene.hidden=false;coverScene.classList.remove('opening');document.getElementById('cover').focus();});
document.getElementById('contentsButton').addEventListener('click',()=>turn('contents'));
next.addEventListener('click',()=>turn(view==='contents'?1:view===0?'contents':view===21?'contents':view+1));
previous.addEventListener('click',()=>{if(view==='contents')turn(0);else if(view===1)turn('contents');else if(view>0)turn(view-1);});
document.addEventListener('keydown',e=>{if(reader.hidden||e.target.closest('.letter-scroll')||e.target.tagName==='BUTTON')return;if(e.key==='ArrowRight'){e.preventDefault();next.click();}if(e.key==='ArrowLeft'){e.preventDefault();previous.click();}});

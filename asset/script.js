const backClick = document.querySelector('#back')
// console.log(backClick);
const playClick = document.querySelector('#play')
// console.log(playClick);
const pauseClick = document.querySelector('#pause')
const nextClick = document.querySelector('#next')
const likeClick = document.querySelector('#like')
// console.log(likeClick);


const firstMyAudio = document.querySelector('.first')
// console.log(firstMyaudio);
const secoundMyAudio = document.querySelector('.secound')
// console.log(secoundMyAudio);

const progressBar = document.querySelector('.progressbar')
// console.log(progressBar);

const updateTime = document.querySelector('div>div>.timeup')
console.log(updateTime);

const fullTime = document.querySelector('div>div>.kamel')
console.log(fullTime);

const leftFigImg= document.querySelector('.samtechap>img')
console.log(leftFigImg);
const leftFigcaption = document.querySelector('.samtechap>figcaption')
console.log(leftFigcaption);


//////////////////////////alll musics///////////////////////
const allMyaudios = document.querySelectorAll('.myaudios')
console.log(allMyaudios);
allMyaudios.forEach(val=>{
  console.log(  val.children[0].nextElementSibling  );
  

///////////////////////////////////////////////

///////////////////////drag progress/////////////////////////
const progress = document.querySelector('div>.progress')
// console.log(progress);

flag = false
/////////////////////////////////////////////////////////////



likeClick.addEventListener('click', () => {
  likeClick.classList.toggle('like')
})







playClick.addEventListener('click', (e) => {
  e.target.style.zIndex = '-100'
  pauseClick.classList.add('z')
})
pauseClick.addEventListener('click', () => {
  pauseClick.classList.remove('z')
  playClick.style.zIndex = '100'
})

/////////////////first music////////////////////////////


const firstAudio = document.querySelector('#audio1')

firstMyAudio.addEventListener('click', () => {
  secoundAudio.pause()
  secoundAudio.currentTime=0
  firstAudio.play()
  playClick.style.zIndex = '-100'
  pauseClick.classList.add('z')
   pauseClick.addEventListener('click',()=>{
    firstAudio.pause()
   })
   playClick.addEventListener('click',()=>{
    firstAudio.play()
   })
   fullTime.innerHTML='04:09'
   firstAudio.addEventListener('timeupdate',()=>{
    // console.log(firstAudio.currentTime + 'duration');
    const min = Math.floor(firstAudio.currentTime / 60)
    const sec = Math.floor(firstAudio.currentTime % 60)
    updateTime.innerHTML=`0${min}:${sec}`
    const move = Math.floor(firstAudio.currentTime)
    console.log(move);
    progressBar.style.width=`${move*2}px`
    // console.log(firstAudio.currentTime);
    
   })


  

   /////////////////////end of audio//////////////////////////
   
////////////////////////////progressbar drag/////////////////////
progressBar.addEventListener('mousedown', (e) => {
  flag = true;
  document.addEventListener('mousemove', onDrag);
  document.addEventListener('mouseup', stopDrag);
});

// تابع درگ
function onDrag(e) {
  const rect = progress.getBoundingClientRect();
  console.log(rect);
  
  let offsetX = e.clientX - rect.left;
 
  // محدود کردن دایره داخل نوار پیشرفت
  if (offsetX < 0){
    offsetX = 0
  } 
  if (offsetX > rect.width){
      offsetX = rect.width

     }

  const search = (offsetX / rect.width) * 100;
  progressBar.style.width = `${search}%`;
}

// تابع اتمام درگ
function stopDrag(e) {
  flag = false;
  document.removeEventListener('mousemove', onDrag);
  document.removeEventListener('mouseup', stopDrag);

  const rect = progress.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const search = offsetX / rect.width;

  // تنظیم موقعیت جدید پخش آهنگ
  firstAudio.currentTime = search * firstAudio.duration;
}


////////////////////change downleft//////////////////////
leftFigImg.src='asset/img/1.jpg'

leftFigcaption.innerHTML=`amma na moein`

})

///////////////////////////////end first/////////////////////////////

const secoundAudio = document.querySelector('#audio2')
//////////////////////////////next click///////////////////////////////

nextClick.addEventListener('click',()=>{
 
})


/////////////////secound music////////////////////////////


val.children[1].addEventListener('click', () => {
  firstAudio.pause()
  firstAudio.currentTime=0
  
  secoundAudio.play()
  playClick.style.zIndex = '-100'
  pauseClick.classList.add('z')
   pauseClick.addEventListener('click',()=>{
    secoundAudio.pause()
   })
   playClick.addEventListener('click',()=>{
    secoundAudio.play()
   })
   fullTime.innerHTML='03:27'
   secoundAudio.addEventListener('timeupdate',()=>{
    // console.log(firstAudio.currentTime + 'duration');
    const min = Math.floor(secoundAudio.currentTime / 60)
    const sec = Math.floor(secoundAudio.currentTime % 60)
    updateTime.innerHTML=`0${min}:${sec}`
    const move = Math.floor(secoundAudio.currentTime)
    console.log(move);
    progressBar.style.width=`${move*2.5}px`
    // console.log(firstAudio.currentTime);
    
   })


  

   /////////////////////end of audio//////////////////////////
   
////////////////////////////progressbar drag/////////////////////
progressBar.addEventListener('mousedown', (e) => {
  flag = true;
  document.addEventListener('mousemove', onDrag);
  document.addEventListener('mouseup', stopDrag);
});

// تابع درگ
function onDrag(e) {
  const rect = progress.getBoundingClientRect();
  console.log(rect);
  
  let offsetX = e.clientX - rect.left;
 
  // محدود کردن دایره داخل نوار پیشرفت
  if (offsetX < 0){
    offsetX = 0
  } 
  if (offsetX > rect.width){
      offsetX = rect.width

     }

  const search = (offsetX / rect.width) * 100;
  progressBar.style.width = `${search}%`;
}

// تابع اتمام درگ
function stopDrag(e) {
  flag = false;
  document.removeEventListener('mousemove', onDrag);
  document.removeEventListener('mouseup', stopDrag);

  const rect = progress.getBoundingClientRect();
  const offsetX = e.clientX - rect.left;
  const search = offsetX / rect.width;

  // تنظیم موقعیت جدید پخش آهنگ
  secoundAudio.currentTime = search * secoundAudio.duration;
}

})

///////////////////////////////end secound/////////////////////////////



// nextClick.addEventListener('click',()=>{
// val.children[0].children[1].pause()  
// val.children[0].children[1].currentTime='0'
// val.children[1].children[1].play()
// })












})


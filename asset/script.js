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
const circle = document.querySelector('.circle')

const updateTime = document.querySelector('div>div>.timeup')
// console.log(updateTime);

const fullTime = document.querySelector('div>div>.kamel')
// console.log(fullTime);

const leftFigImg = document.querySelector('.samtechap>img')
// console.log(leftFigImg);
const leftFigcaption = document.querySelector('.samtechap>figcaption')
// console.log(leftFigcaption);


//////////////////////////alll musics///////////////////////











const allMyaudios = document.querySelectorAll('.myaudios')
// console.log(allMyaudios);
allMyaudios.forEach((val) => {
  // console.log(  val.children[0].nextElementSibling  );

  /////////////////////nextClick//////////////////////


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
    e.target.style.opacity = '0'
    pauseClick.classList.add('z')
  })
  pauseClick.addEventListener('click', () => {
    pauseClick.classList.remove('z')
    playClick.style.opacity = '1'
  })


  /////////////////first music////////////////////////////


  const firstAudio = document.querySelector('#audio1')

  firstMyAudio.addEventListener('click', () => {

    leftFigImg.src = 'asset/img/1.jpg'
    leftFigcaption.innerHTML = 'amma na <br> moein'
    ////////////////////////all music//////////////////////////
    secoundAudio.pause()
    secoundAudio.currentTime = 0

    thirdAudio.pause()
    thirdAudio.currentTime = 0

    fourAudio.pause()
    fourAudio.currentTime = 0

    fiveAudio.pause()
    fiveAudio.currentTime = 0

    sixAudio.pause()
    sixAudio.currentTime = 0
    ////////////////////////////////////////////////////////
    firstAudio.play()
    playClick.style.opacity = '0'
    pauseClick.classList.add('z')
    pauseClick.addEventListener('click', () => {
      firstAudio.pause()
    })
    playClick.addEventListener('click', () => {
      firstAudio.play()

      secoundAudio.pause()

      thirdAudio.pause()

      fourAudio.pause()

      fiveAudio.pause()

      sixAudio.pause()
    })
    fullTime.innerHTML = '04:09'
    firstAudio.addEventListener('timeupdate', () => {
      // console.log(firstAudio.currentTime + 'duration');
      const min = Math.floor(firstAudio.currentTime / 60)
      const sec = Math.floor(firstAudio.currentTime % 60)
      updateTime.innerHTML = `0${min}:${sec}`
      const move = Math.floor(firstAudio.currentTime)
      // console.log(move);
      progressBar.style.width = `${move * 1.9}px`
      circle.style.margin = `${move * 1.9}px`
      circle.style.opacity = '1'

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
      // console.log(rect);

      let offsetX = e.clientX - rect.left;

      // محدود کردن دایره داخل نوار پیشرفت
      if (offsetX < 0) {
        offsetX = 0
      }
      if (offsetX > rect.width) {
        offsetX = rect.width

      }

      const search = (offsetX / rect.width) * 100;
      progressBar.style.width = `${search}%`;
      circle.style.opacity = '0'
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


    // nextClick.addEventListener('click',()=>{
    //   firstAudio.pause()
    //   firstAudio.currentTime='0'
    //   secoundAudio.play()
    // })
    // backClick.addEventListener('click',()=>{
    //   firstAudio.play()
    //   secoundAudio.pause()
    //   secoundAudio.currentTime='0'
    // })

  })

  ///////////////////////////////end first/////////////////////////////

  const secoundAudio = document.querySelector('#audio2')
  //////////////////////////////next click///////////////////////////////

  nextClick.addEventListener('click', () => {

  })


  /////////////////secound music////////////////////////////


  val.children[1].addEventListener('click', () => {
    leftFigImg.src = 'asset/img/2.jpg'
    leftFigcaption.innerHTML = 'yeki dg <br>moein'
    /////////////////////////all music//////////////////////
    firstAudio.pause()
    firstAudio.currentTime = 0

    thirdAudio.pause()
    thirdAudio.currentTime = 0

    fourAudio.pause()
    fourAudio.currentTime = 0

    fiveAudio.pause()
    fiveAudio.currentTime = 0

    sixAudio.pause()
    sixAudio.currentTime = 0
    //////////////////////////////////////////////////////
    secoundAudio.play()
    playClick.style.opacity = '0'
    pauseClick.classList.add('z')
    pauseClick.addEventListener('click', () => {
      secoundAudio.pause()
    })
    playClick.addEventListener('click', () => {
      secoundAudio.play()

      firstAudio.pause()

      thirdAudio.pause()

      fourAudio.pause()

      fiveAudio.pause()

      sixAudio.pause()
    })
    fullTime.innerHTML = '03:27'
    secoundAudio.addEventListener('timeupdate', () => {
      // console.log(firstAudio.currentTime + 'duration');
      const min = Math.floor(secoundAudio.currentTime / 60)
      const sec = Math.floor(secoundAudio.currentTime % 60)
      updateTime.innerHTML = `0${min}:${sec}`
      const move = Math.floor(secoundAudio.currentTime)
      // console.log(move);
      progressBar.style.width = `${move * 2.3}px`
      circle.style.margin = `${move * 2.3}px`
      circle.style.opacity = '1'
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
      // console.log(rect);

      let offsetX = e.clientX - rect.left;

      // محدود کردن دایره داخل نوار پیشرفت
      if (offsetX < 0) {
        offsetX = 0
      }
      if (offsetX > rect.width) {
        offsetX = rect.width

      }

      const search = (offsetX / rect.width) * 100;
      progressBar.style.width = `${search}%`;
      circle.style.opacity = '0'
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








  /////////////////third music////////////////////////////
  const thirdAudio = document.querySelector('#audio3')
  // console.log(thirdAudio);

  val.children[2].addEventListener('click', () => {
    leftFigImg.src = 'asset/img/Ebi-Delpoosh.jpg'
    leftFigcaption.innerHTML = 'Delpoosh <br>Ebi'

    ///////////////////all music///////////////////////
    firstAudio.pause()
    firstAudio.currentTime = 0

    secoundAudio.pause()
    secoundAudio.currentTime = 0

    fourAudio.pause()
    fourAudio.currentTime = 0

    fiveAudio.pause()
    fiveAudio.currentTime = 0

    sixAudio.pause()
    sixAudio.currentTime = 0
    ///////////////////////////////////////////////////

    thirdAudio.play()
    playClick.style.opacity = '0'
    pauseClick.classList.add('z')
    pauseClick.addEventListener('click', () => {
      thirdAudio.pause()
    })
    playClick.addEventListener('click', () => {
      thirdAudio.play()

      firstAudio.pause()

      secoundAudio.pause()

      fourAudio.pause()

      fiveAudio.pause()

      sixAudio.pause()
    })
    fullTime.innerHTML = '04:42'
    thirdAudio.addEventListener('timeupdate', () => {
      // console.log(firstAudio.currentTime + 'duration');
      const min = Math.floor(thirdAudio.currentTime / 60)
      const sec = Math.floor(thirdAudio.currentTime % 60)
      updateTime.innerHTML = `0${min}:${sec}`
      const move = Math.floor(thirdAudio.currentTime)
      // console.log(move);
      progressBar.style.width = `${move * 1.7}px`
      circle.style.margin = `${move * 1.7}px`
      circle.style.opacity = '1'
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
      // console.log(rect);

      let offsetX = e.clientX - rect.left;

      // محدود کردن دایره داخل نوار پیشرفت
      if (offsetX < 0) {
        offsetX = 0
      }
      if (offsetX > rect.width) {
        offsetX = rect.width

      }

      const search = (offsetX / rect.width) * 100;
      progressBar.style.width = `${search}%`;

      circle.style.opacity = '0'
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
      thirdAudio.currentTime = search * thirdAudio.duration;
    }

  })

  ///////////////////////////////end third/////////////////////////////






  /////////////////four music////////////////////////////
  const fourAudio = document.querySelector('#audio4')

  val.children[3].addEventListener('click', () => {
    leftFigImg.src = 'asset/img/darush.jpg'
    leftFigcaption.innerHTML = 'Dobare baz khaham gasht <br>darush'

    ///////////////////all music///////////////////////
    firstAudio.pause()
    firstAudio.currentTime = 0

    secoundAudio.pause()
    secoundAudio.currentTime = 0

    thirdAudio.pause()
    thirdAudio.currentTime = 0

    fiveAudio.pause()
    fiveAudio.currentTime = 0

    sixAudio.pause()
    sixAudio.currentTime = 0
    ///////////////////////////////////////////////////

    fourAudio.play()
    playClick.style.opacity = '0'
    pauseClick.classList.add('z')
    pauseClick.addEventListener('click', () => {
      fourAudio.pause()
    })
    playClick.addEventListener('click', () => {
      fourAudio.play()

      firstAudio.pause()

      secoundAudio.pause()

      thirdAudio.pause()


      fiveAudio.pause()

      sixAudio.pause()
    })
    fullTime.innerHTML = '03:58'
    fourAudio.addEventListener('timeupdate', () => {
      // console.log(firstAudio.currentTime + 'duration');
      const min = Math.floor(fourAudio.currentTime / 60)
      const sec = Math.floor(fourAudio.currentTime % 60)
      updateTime.innerHTML = `0${min}:${sec}`
      const move = Math.floor(fourAudio.currentTime)
      // console.log(move);
      progressBar.style.width = `${move * 1.9}px`
      circle.style.margin = `${move * 1.9}px`
      circle.style.opacity = '1'
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
      // console.log(rect);

      let offsetX = e.clientX - rect.left;

      // محدود کردن دایره داخل نوار پیشرفت
      if (offsetX < 0) {
        offsetX = 0
      }
      if (offsetX > rect.width) {
        offsetX = rect.width

      }

      const search = (offsetX / rect.width) * 100;
      progressBar.style.width = `${search}%`;

      circle.style.opacity = '0'
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
      fourAudio.currentTime = search * fourAudio.duration;
    }

  })

  ///////////////////////////////end four/////////////////////////////



  /////////////////five music////////////////////////////
  const fiveAudio = document.querySelector('#audio5')

  val.children[4].addEventListener('click', () => {
    leftFigImg.src = 'asset/img/Googoosh.jpg'
    leftFigcaption.innerHTML = 'makhloogh <br>Googoosh'

    ///////////////////all music///////////////////////
    firstAudio.pause()
    firstAudio.currentTime = 0

    secoundAudio.pause()
    secoundAudio.currentTime = 0

    thirdAudio.pause()
    thirdAudio.currentTime = 0

    fourAudio.pause()
    fourAudio.currentTime = 0

    sixAudio.pause()
    sixAudio.currentTime = 0
    ///////////////////////////////////////////////////

    fiveAudio.play()
    playClick.style.opacity = '0'
    pauseClick.classList.add('z')
    pauseClick.addEventListener('click', () => {
      fiveAudio.pause()
    })
    playClick.addEventListener('click', () => {
      fiveAudio.play()
      firstAudio.pause()

      secoundAudio.pause()

      thirdAudio.pause()

      fourAudio.pause()

      sixAudio.pause()
    })
    fullTime.innerHTML = '03:52'
    fiveAudio.addEventListener('timeupdate', () => {
      // console.log(firstAudio.currentTime + 'duration');
      const min = Math.floor(fiveAudio.currentTime / 60)
      const sec = Math.floor(fiveAudio.currentTime % 60)
      updateTime.innerHTML = `0${min}:${sec}`
      const move = Math.floor(fiveAudio.currentTime)
      // console.log(move);
      progressBar.style.width = `${move * 2}px`
      circle.style.margin = `${move * 2}px`
      circle.style.opacity = '1'
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
      // console.log(rect);

      let offsetX = e.clientX - rect.left;

      // محدود کردن دایره داخل نوار پیشرفت
      if (offsetX < 0) {
        offsetX = 0
      }
      if (offsetX > rect.width) {
        offsetX = rect.width

      }

      const search = (offsetX / rect.width) * 100;
      progressBar.style.width = `${search}%`;

      circle.style.opacity = '0'
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
      fiveAudio.currentTime = search * fiveAudio.duration;
    }

  })

  ///////////////////////////////end five/////////////////////////////



  /////////////////six music////////////////////////////
  const sixAudio = document.querySelector('#audio6')

  val.children[5].addEventListener('click', () => {
    leftFigImg.src = 'asset/img/shadmehr-hadis.jpg'
    leftFigcaption.innerHTML = 'shadmehr<br>hadis-mehrabooni'

    ///////////////////all music///////////////////////
    firstAudio.pause()
    firstAudio.currentTime = 0

    secoundAudio.pause()
    secoundAudio.currentTime = 0

    thirdAudio.pause()
    thirdAudio.currentTime = 0

    fourAudio.pause()
    fourAudio.currentTime = 0

    fiveAudio.pause()
    fiveAudio.currentTime = 0
    ///////////////////////////////////////////////////

    sixAudio.play()
    playClick.style.opacity = '0'
    pauseClick.classList.add('z')
    pauseClick.addEventListener('click', () => {
      sixAudio.pause()
    })
    playClick.addEventListener('click', () => {
      firstAudio.pause()

      secoundAudio.pause()

      thirdAudio.pause()

      fourAudio.pause()

      fiveAudio.pause()

      sixAudio.play()
    })
    fullTime.innerHTML = '05:42'
    sixAudio.addEventListener('timeupdate', () => {
      // console.log(firstAudio.currentTime + 'duration');
      const min = Math.floor(sixAudio.currentTime / 60)
      const sec = Math.floor(sixAudio.currentTime % 60)
      updateTime.innerHTML = `0${min}:${sec}`
      const move = Math.floor(sixAudio.currentTime)
      // console.log(move);
      progressBar.style.width = `${move * 1.35}px`
      circle.style.margin = `${move * 1.35}px`
      circle.style.opacity = '1'
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
      // console.log(rect);

      let offsetX = e.clientX - rect.left;

      // محدود کردن دایره داخل نوار پیشرفت
      if (offsetX < 0) {
        offsetX = 0
      }
      if (offsetX > rect.width) {
        offsetX = rect.width

      }

      const search = (offsetX / rect.width) * 100;
      progressBar.style.width = `${search}%`;

      circle.style.opacity = '0'
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
      sixAudio.currentTime = search * sixAudio.duration;
    }

  })

  ///////////////////////////////end six/////////////////////////////


})

//////////////////////////edit/////////////////////////////
const text = document.querySelector('.edit')
// console.log(text);
const strText = text.textContent
// console.log(strText);
const splitText = strText.split('');
// console.log(splitText);
text.textContent = ''
setTimeout(() => {
  for (let s = 0; s < splitText.length; s++) {
    text.innerHTML += '<h4>' + splitText[s] + '</h4>';
  }

  let char = 0;
  let timer = setInterval(onTick, 50);

  function onTick() {
    const span = text.querySelectorAll('h4')[char];
    // console.log(span);
    span.classList.add('fade')
    char++
    if (char === splitText.length) {
      clearInterval(timer)
      timer = null
    }
  }
}, 1000);

//////////////////////////back && nest click/////////////////

const songs = document.querySelectorAll("audio");
let currentSongIndex = 0;


function playSong() {
  songs[currentSongIndex].play();
}

function stopSong() {
  songs[currentSongIndex].pause();
  songs[currentSongIndex].currentTime = 0;
}

nextClick.addEventListener("click", () => {
  stopSong();
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  playSong();

});

backClick.addEventListener('click', () => {
  stopSong();
  currentSongIndex = (currentSongIndex - 1) % songs.length;
  playSong();
})

////////////////////////////dark mode with localstorage///////////////////////////////





const main = document.querySelector('main')
const right = document.querySelector('.right')
const dark = document.querySelector('.dark')
const downMenu = document.querySelector('.downmenu')
const span = document.querySelectorAll('span')
// console.log(span);
const li = document.querySelectorAll('li')
const i = document.querySelectorAll('i')
// console.log(dark);
const p = document.querySelectorAll('p')
// console.log(p);
const span2 = document.querySelectorAll('p>br>span')
// console.log(span2);
const h1 = document.querySelector('h1')



function whiteModeToggle() {
  const isWhiteMode = dark.classList.toggle('whitemode')


  main.classList.toggle('bg')
  right.classList.toggle('bg')
  leftFigcaption.classList.toggle('black')
  downMenu.classList.toggle('dbg')
  playClick.classList.toggle('black')
  backClick.classList.toggle('black')
  likeClick.classList.toggle('black')
  pauseClick.classList.toggle('black')
  nextClick.classList.toggle('black')
  fullTime.classList.toggle('black')
  updateTime.classList.toggle('black')
  span.forEach(val => {
    val.classList.toggle('black')
  })
  li.forEach(val => {
    val.classList.toggle('black')

  })
  i.forEach(e => {
    e.classList.toggle('black')

  })
  p.forEach(e => {
    e.classList.toggle('black')

  })
  span2.forEach(e => {
    e.classList.toggle('black')

  })
  h1.classList.toggle('black')

  localStorage.setItem('data', isWhiteMode ? 'ture':'false')

}

if(localStorage.getItem('data') === 'true'){
  whiteModeToggle()
}

dark.addEventListener('click',whiteModeToggle);

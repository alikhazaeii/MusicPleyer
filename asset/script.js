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
    leftFigImg.src = 'asset/img/1.jpg'
    leftFigcaption.innerHTML = 'amma na'
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
    playClick.style.zIndex = '-100'
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
      progressBar.style.width = `${move * 2}px`
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
    playClick.style.zIndex = '-100'
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
      progressBar.style.width = `${move * 2.5}px`
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
  console.log(thirdAudio);

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
    playClick.style.zIndex = '-100'
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
      progressBar.style.width = `${move * 1.8}px`
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
    playClick.style.zIndex = '-100'
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
      progressBar.style.width = `${move * 2.1}px`
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
    playClick.style.zIndex = '-100'
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
      progressBar.style.width = `${move * 2.2}px`
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
    playClick.style.zIndex = '-100'
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
      progressBar.style.width = `${move * 1.5}px`
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

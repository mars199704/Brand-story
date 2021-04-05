
const navButton = document.querySelector('.nav-button')
const navOpen = document.querySelector('.nav-opened')
const learn = document.querySelector('.learn')
const title = document.querySelector('.container h1')
const back = document.querySelector('.backIcon')


const tl = new TimelineLite({ paused: true, reversed: true })
tl.to('.cover', 1, {
  width: '60%',
  ease: Power2.easeOut,
})
.to('nav', 1, {
  height: '100%',
  ease: Power2.easeOut,
}, '-= .5')
.fromTo('.nav-opened', 0.5, {
  opacity: 0,
  x: 50,
  ease: Power2.easeOut,
},{
  opacity: 1,
  x: 0,
  inComplete: function(){
    navOpen.style.pointerEvents = 'auto'
  }
})

navButton.addEventListener('click', (e) => {
  if(tl.isActive()){
    e.preventDefault()
    e.stopImmediatePropagation()
    return false
  }
  toggleTween(tl)

  learn.classList.add('remove')
  title.classList.add('remove')
})

back.addEventListener('click', (e) => {
  console.log('text')
  if(tl.isActive()){
    e.preventDefault()
    e.stopImmediatePropagation()
    return false
  }
  toggleTween(tl)

  learn.classList.remove('remove')
  title.classList.remove('remove')
})

function toggleTween(tween){
  tween.reversed() ? tween.play() : tween.reverse();
}
let nameIntro = document.querySelector('.intro')
// nameIntro.style.textDecoration = "none"
let line = document.querySelector('.line')
window.onload = function () {
  setTimeout(function () {
    line.style.transform = "scaleX(1)"
    line.style.visibility = "visible"
  }, 800)
}
// You need to include your resume as well

new fullpage('#fullpage', {
  sectionsColor: ['#000000', 'none', '#F2AE72', '#5C832F', '#B8B89F'],
  autoScrolling: true,
  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: ['Me', 'About', 'Projects', 'Contact'],
  anchors: ['firstPage', 'secondPage', 'thirdPage', 'lastPage'], 
  menu: '#myMenu'
});


let nameIntro = document.querySelector('.intro')
// nameIntro.style.textDecoration = "none"
let line = document.querySelector('.line')
window.onload = function () {
  setTimeout(function () {
    line.style.transform = "scaleX(1)"
    line.style.visibility = "visible"
  }, 1000)
}


new fullpage('#fullpage', {
  sectionsColor: ['#000000', '#348899', '#F2AE72', '#5C832F', '#B8B89F'],
  autoScrolling: true,
  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: ['First page', 'Second page', 'Third page', 'Last page'],
  anchors: ['firstPage', 'secondPage', 'thirdPage', 'lastPage'], 
  menu: '#myMenu'
});


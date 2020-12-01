let nameIntro = document.querySelector('.intro')
let nameForPage = "Gerand McDowell"
let printedName = ""
// nameIntro.style.textDecoration = "none"
let line = document.querySelector('.line')
window.onload = function () {
  console.log('hey')
  setTimeout(function () {
    line.style.transform = "scaleX(1)"
    line.style.visibility = "visible"
  }, 4000)
  let i = 0
  let animation = setInterval(function () {
    if (printedName.length < nameForPage.length) {
      printedName = printedName + nameForPage[i]
      nameIntro.innerHTML = printedName
    }
    i += 1
  }, 250)
  setTimeout(function () {
    clearInterval(animation)
    console.log('hello world')
  }, 6000)
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


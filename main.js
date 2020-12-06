let nameIntro = document.querySelector('.intro')
let nameForPage = "Gerand McDowell"
let printedName = ""

let line = document.querySelector('.line')
window.onload = function () {
  setTimeout(function () {
    line.style.transform = "scaleX(1)"
    line.style.visibility = "visible"
  }, 4700)
  let i = 0
  setTimeout(function () {
    let animation = setInterval(function () {
      if (printedName.length < nameForPage.length) {
        printedName = printedName + nameForPage[i]
        nameIntro.innerHTML = printedName
      }
      i += 1
    }, 250)
    setTimeout(function () {
      console.log('hello world')
      clearInterval(animation)
    }, 6000)
  }, 800)
}



// You need to include your resume as well

new fullpage('#fullpage', {
  // sectionsColor: ['#000000', 'none', '#F2AE72', '#5C832F', '#B8B89F'],
  // sectionsColor: ['#000000', 'none', '#0a1573', '#5C832F', '#B8B89F'],
  // sectionsColor: ['#000000', 'none', '#01272D', '#000000'],
  sectionsColor: ['#000000', 'none', '#01272D'],
  autoScrolling: true,
  navigation: true,
  navigationPosition: 'right',
  navigationTooltips: ['Me', 'About', 'Projects', 'Contact'],
  anchors: ['firstPage', 'secondPage', 'thirdPage', 'lastPage'], 
  menu: '#myMenu'
});


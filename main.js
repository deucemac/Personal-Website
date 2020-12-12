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
      clearInterval(animation)
    }, 6000)
  }, 300)
}

window.addEventListener("DOMContentLoaded", function() {

  // get the form elements defined in your form HTML above
  
  let form = document.getElementById("my-form");
  let status = document.getElementById("status");

  // Success and Error functions for after the form is submitted
  
  function success() {
    form.reset();
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    let data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}




// You need to include your resume as well

// new fullpage('#fullpage', {
//   licenseKey: '',
//   sectionsColor: ['#000000', 'none', '#01272D'],
//   autoScrolling: true,
//   navigation: true,
//   navigationPosition: 'right',
//   navigationTooltips: ['Me', 'About', 'Projects', 'Contact'],
//   anchors: ['firstPage', 'secondPage', 'thirdPage', 'lastPage'], 
//   menu: '#myMenu'
// });


function highlight() {
  const strongHtmlElements = document.querySelectorAll('strong');

  strongHtmlElements.forEach((ele) => {
    ele.style.color = 'rgb(0, 128, 0)'
  })

}

function return_normal() {
  const strongHtmlElements = document.querySelectorAll('strong');

  strongHtmlElements.forEach((ele) => {
    ele.style.color = 'rgb(0, 0, 0)'
  })
}

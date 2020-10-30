// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
const newDiv = document.createElement('div')

function Header () {
    
    const newSpan = document.createElement('span')
    const newH1 = document.createElement('h1')
    const newSpan2 = document.createElement('span')

    newDiv.classList.add('header')
    newSpan.classList.add('date')
    newSpan2.classList.add('temp')

    newSpan.textContent = 'MARCH 28, 2020'
    newH1.textContent = 'Lambda Time'
    newSpan2.textContent = '98'

    newDiv.appendChild(newSpan)
    newDiv.appendChild(newH1)
    newDiv.appendChild(newSpan2)

    return newDiv
}

console.log(Header())
const headerContainer = document.querySelector('.header-container')
headerContainer.appendChild(newDiv)

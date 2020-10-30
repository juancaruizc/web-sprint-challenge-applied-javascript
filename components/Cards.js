// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const articleMaker2 = (article) => {
    const divCard = document.createElement('div')
    divCard.classList.add('card')

    const divHeadline = document.createElement('div')
    divHeadline.classList.add('headline')
    divHeadline.textContent = article.headline

    const divAuthor = document.createElement('div')
    divAuthor.classList.add('author')

    const divImgContainer = document.createElement('div')
    divImgContainer.classList.add('img-container')

    const newImg = document.createElement('img')
    newImg.src = article.authorPhoto

    const newSpan = document.createElement('span')
    newSpan.textContent = article.authorName

    divCard.appendChild(divHeadline)
    divCard.appendChild(divAuthor)
    divAuthor.appendChild(divImgContainer)
    divImgContainer.appendChild(newImg)
    divAuthor.appendChild(newSpan)

    return divCard
}

axios.get('https://lambda-times-api.herokuapp.com/articles')
.then((res) => {
    const articles = res.data.articles
    const values = Object.values(articles)
    const mergedArr = [].concat.apply([], values)
    console.log(mergedArr)
    mergedArr.forEach((article) => {
        const newArticle = articleMaker2(article)
        console.log(newArticle)

    const cardsContainer = document.querySelector('.cards-container')

    cardsContainer.appendChild(newArticle)
    })
})
.catch((err) => {
    console.log(err)
})


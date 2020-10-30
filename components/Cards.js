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

import axios from 'axios';

const cardMaker = (article) => {
  const cardDiv = document.createElement('div');
  const headlineDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const imgContainerDiv = document.createElement('div');
  const img = document.createElement('img');
  const byDiv = document.createElement('span');

  cardDiv.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imgContainerDiv.classList.add('img-container');

  headlineDiv.textContent = article.headline;
  img.src = article.authorPhoto;
  byDiv.textContent = `By: ${article.authorName}`;

  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgContainerDiv);
  imgContainerDiv.appendChild(img);
  authorDiv.appendChild(byDiv);

  return cardDiv;
};
axios
  .get('https://lambda-times-api.herokuapp.com/articles')
  .then((res) => {
    const articles = res.data.articles;
    const values = Object.values(articles);
    const mergedArr = [].concat.apply([], values);
    console.log(mergedArr);
    mergedArr.forEach((article) => {
      const newArticle = cardMaker(article);
      console.log(newArticle);

      const cardsContainer = document.querySelector('.cards-container');

      cardsContainer.appendChild(newArticle);

      newArticle.addEventListener('click', () => {
        console.log(article.headline);
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });

// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

import axios from 'axios';

axios
  .get('https://lambda-times-api.herokuapp.com/topics')
  .then((res) => {
    const topics = res.data.topics;
    topics.forEach((topics) => {
      const newTopics = topicMaker(topics);
      divTopics.appendChild(newTopics);
    });
  })
  .catch((err) => {
    return err;
  });

const title = document.querySelector('.title');
const divTopics = document.querySelector('.topics');

function topicMaker({ topics }) {
  const topicOne = document.createElement('div');
  const topicTwo = document.createElement('div');
  const topicThree = document.createElement('div');
  const topicFour = document.createElement('div');
  const topicFive = document.createElement('div');

  topicOne.classList.add('tab');
  topicTwo.classList.add('tab');
  topicThree.classList.add('tab');
  topicFour.classList.add('tab');
  topicFive.classList.add('tab');

  topicOne.textContent = topics;
  topicTwo.textContent = topics;
  topicThree.textContent = topics;
  topicFour.textContent = topics;
  topicFive.textContent = topics;

  topicOne.appendChild(topicTwo);
  topicOne.appendChild(topicThree);
  topicOne.appendChild(topicFour);
  topicOne.appendChild(topicFive);

  return topicOne;
}

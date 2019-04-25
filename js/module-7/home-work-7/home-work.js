'use strict';


function createTxtElem({ tag, className = "", text = "" }) {
  const elem = document.createElement(tag);
  elem.classList.add(className);
  elem.textContent = text;
  
  return elem;
}

function createPostCard ({ img, title, text, link }) {
  const movie = document.createElement('div');
  movie.classList.add('movie');
  
  const image = document.createElement('img');
  image.classList.add('movie__image');
  image.setAttribute('src', img);
  
  movie.appendChild(image);
  
  const movieBody = document.createElement('div');
  movieBody.classList.add('movie__body');
  movie.appendChild(movieBody);
  
  const movieTitle = createTxtElem({ tag: 'h2', className: 'movie__title', text : title });
  movieBody.appendChild(movieTitle);
  
  const movieDescription = createTxtElem({ tag: 'p',className:'movie__description', text: text });
  
  movieBody.appendChild(movieDescription);
  
  const movieLink = createTxtElem({ tag:'a', className:'movie__link', text: link});
  movieLink.setAttribute('href', link);
  movieBody.appendChild(movieLink);
  
  return movie;
}

function createCards(posts) {
  return posts.map(post => createPostCard(post))
}

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
];

const domElements = createCards(posts);
const body = document.querySelector('body');
domElements.forEach(domElement => body.appendChild(domElement));






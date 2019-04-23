

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
  
  const movieTitle = document.createElement('h2');
  movieTitle.classList.add('movie__title');
  movieTitle.textContent = title;
  
  movieBody.appendChild(movieTitle);
  
  const movieDescription = document.createElement('p');
  movieDescription.classList.add('movie__description');
  movieDescription.textContent = text;
  
  movieBody.appendChild(movieDescription);
  
  const movieLink = document.createElement('a');
  movieLink.classList.add('movie__link');
  movieLink.setAttribute('href', link);
  movieLink.textContent = link;
  
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

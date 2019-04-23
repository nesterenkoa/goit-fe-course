/*
  Создайте функцию createMovieCard(), которая
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.headline, description, data, rating
*/

function createMovieCard ({ image, headline, description, data, rating }) {
  const movie = document.createElement('div');
  movie.classList.add('movie');
  
  const img = document.createElement('img');
  img.classList.add('movie__image');
  img.setAttribute('src', image);
  
  movie.appendChild(img);
  
  const movieBody = document.createElement('div');
  movieBody.classList.add('movie__body');
  movie.appendChild(movieBody);
  
  const movieTitle = document.createElement('h2');
  movieTitle.classList.add('movie__title');
  movieTitle.textContent = headline;
  
  movieBody.appendChild(movieTitle);
  
  const movieDescription = document.createElement('p');
  movieDescription.classList.add('movie__description');
  movieDescription.textContent = description;
  
  movieBody.appendChild(movieDescription);
  
  const movieDate = document.createElement('p');
  movieDate.classList.add('movie__date');
  movieDate.textContent = `Released:${data}`;
  
movieBody.appendChild(movieDate);

const movieRating = document.createElement('p');
movieRating.classList.add('movie__rating');
movieRating.textContent = `Rating: ${rating}`;

movieBody.appendChild(movieRating);
  
  const body = document.querySelector('body');
  body.appendChild(movie);
}

createMovieCard({
  image: 'http://wordyou.ru/upkeep/uploads/2019/04/hype-ru-nBVBdW-LD1JzGbhBO6RI54fPNDBjB-755x390.jpeg',
  headline: "Игра престолов",
  description: "«Игра́ престо́лов» (англ. Game of Thrones) — американский телесериал в жанре фэнтези, основанный на цикле романов «Песнь Льда и Огня» Джорджа Р. Р. Мартина. ... Действие «Игры престолов» происходит в вымышленном мире, напоминающем средневековую Европу.",
  data: "2007-01-12",
  rating: "9.9"
});

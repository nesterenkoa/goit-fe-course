'use strict';

function Gallery({items, parentNode, defaultActiveItem}) {
  parentNode.classList.add('gallery');
  
  const fullview = document.createElement('div');
  fullview.classList.add('fullview');
  
  const img = document.createElement('img');
  img.setAttribute("src", items[defaultActiveItem].fullview);
  
  fullview.appendChild(img);
  
  const list = document.createElement('ul');
  list.classList.add('preview');
  
  items.forEach((el, index) => {
   const listItem = document.createElement('li');
   if (index === defaultActiveItem) {
     listItem.classList.add('active')
   }
   const listImg = document.createElement('img');
   listImg.setAttribute('src', el.preview );
   listImg.setAttribute('data-fullview', el.fullview );
   listImg.setAttribute('alt', el.alt);
   listItem.appendChild(listImg);
   list.appendChild(listItem);
  });
  
  list.addEventListener('click', event => {
    const bigImageSrc = event.target.getAttribute('data-fullview');
    if (bigImageSrc) {
      const fullviewImg = document.querySelector('.fullview img');
      fullviewImg.setAttribute('src', bigImageSrc);
      
      const previews = document.querySelectorAll('.preview li');
      previews.forEach(preview => preview.classList.remove('active'));
      event.target.parentNode.classList.add('active');
    }
  });
  parentNode.appendChild(fullview);
  parentNode.appendChild(list);
}

const galleryItems = [
  { preview: 'http://lorempixel.com/400/200/animals/1/', fullview: 'http://lorempixel.com/1200/600/animals/1/', alt: "alt text 1" },
  { preview: 'http://lorempixel.com/400/200/animals/2/', fullview: 'http://lorempixel.com/1200/600/animals/2/', alt: "alt text 2" },
  { preview: 'http://lorempixel.com/400/200/animals/3/', fullview: 'http://lorempixel.com/1200/600/animals/3/', alt: "alt text 3" },
  { preview: 'http://lorempixel.com/400/200/animals/9/', fullview: 'http://lorempixel.com/1200/600/animals/9/', alt: "alt text 4" },
  { preview: 'http://lorempixel.com/400/200/animals/8', fullview: 'http://lorempixel.com/1200/600/animals/8/', alt: "alt text 5" },
  { preview: 'http://lorempixel.com/400/200/animals/6/', fullview: 'http://lorempixel.com/1200/600/animals/6/', alt: "alt text 6" },
  { preview: 'http://lorempixel.com/400/200/animals/10/', fullview: 'http://lorempixel.com/1200/600/animals/10/', alt: "alt text 10" },
  { preview: 'http://lorempixel.com/400/200/animals/7/', fullview: 'http://lorempixel.com/1200/600/animals/7/', alt: "alt text 7" },
  
];


new Gallery({
  items: galleryItems,
  parentNode: document.querySelector('.image-gallery'),
  defaultActiveItem: 0,
});

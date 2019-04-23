let  btnLeft = document.querySelector('.left');
console.log(btnLeft);

let  btnrig = document.querySelector('.rig');
console.log(btnrig);

let images =document.querySelector("img");
console.log(images);

let i = 0;

btnrig.onclick = function () {
  images[i].classHame= '';
  i++
  if (i > images.length -1){
    i = 0
  }
  
  images[i].classHame ="showed";
}


btnLeft.onclick = function () {
  images[i].style.display = 'none';
  i--
  if (i < 0){
    i = images.length -1
  }
  
  images[i].style.display ='block';
}


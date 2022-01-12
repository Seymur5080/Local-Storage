let opacity = document.querySelector('#opacity');
let border = document.querySelector('#border');
let img = document.querySelectorAll('img');

let mouseOpacity = opacity.addEventListener('mousemove', changeOpacity);
let mouseBorder = border.addEventListener('mousemove', changeBorder);

function changeOpacity() {
   function localSet() {
      localStorage.setItem('opacity', opacity.value);
   }

   localSet();

   function localGet() {
      let opacityLocalGet = JSON.parse(localStorage.getItem('opacity'));

      img.forEach(element => {
         element.style.opacity = `${opacityLocalGet}`;
      });
   }

   localGet();
}

function changeBorder() {
   function localSet() {
      localStorage.setItem('border', border.value);
   }

   localSet();

   function localGet() {
      let borderLocalGet = JSON.parse(localStorage.getItem('border'));

      img.forEach(element => {
         element.style.borderRadius = borderLocalGet + 'px';
      });
   }

   localGet();
}


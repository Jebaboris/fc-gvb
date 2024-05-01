let btns = document.querySelectorAll('.BTNS')
btns.forEach((b)=>{
    b.addEventListener('click', function(e){
        render(e.target.id);
    });
});

function render(name){
    name=name + '.html';
    $(function(){
        $("#load").load(name); 
        });    
}

const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
      star.addEventListener('click', e => {
        const rating = e.target.dataset.rating;
        stars.forEach(s => {
          if (parseInt(s.dataset.rating) <= parseInt(rating)) {
            s.classList.add('star');
          } else {
            s.classList.remove('star');
          }
        });
      });
    });

    
function otziv() {

    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;

      if (!name || !tel) {
        alert("Введите имя и почту ");
      } else {
        alert("Отзыв оставлен");
      }
    });
  };

  function Clear() {
    var name, fam, tel, voz;
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
  }

  function sale() {

    const form = document.querySelector('form');

    form.addEventListener('submit', (event) => {

      const name = document.getElementById('name').value;
      const fam = document.getElementById('fam').value;
      const tel = document.getElementById('email').value;
      const voz = document.getElementById('voz').value;
      let chislo = Math.ceil(Math.random()*99999999);

      if (!name || !fam || !email || !voz) {
        alert("Заполните все данные в анкете");
      } else {
        alert("Имя: " + name.toUpperCase() + " " +  fam.toUpperCase() + " \n" +  "Почтовый адресс: " + email.toUpperCase() + " \n" + "Номер карты: " + chislo + " \n");
      }
    });
  };
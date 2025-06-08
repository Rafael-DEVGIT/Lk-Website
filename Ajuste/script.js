  
// jS. NAVBAR //
  function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
  }

document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const duration = 3000; // Duração da animação em milissegundos
    let current = 0;
    const increment = target / (duration / 100);

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.innerText = Math.ceil(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target;
      }
    };

    setTimeout(() => {
      updateCounter();
    }, 500); // Atraso antes de iniciar a animação
  });
});


const listaALL = document.querySelectorAll('.projects_armazenamento ul li');
const buttonGeral = document.querySelectorAll('.project_navegacao li');
const buttonALL = document.querySelector('.project_models .all');

listaALL.forEach((item)=>{
    item.classList.add('ativo');
})

function removeClick(index){
    buttonGeral.forEach((item)=>{
        item.classList.remove('ativo');
    })
    buttonGeral[index].classList.add('ativo')
}

buttonGeral.forEach((event,index)=>{
    event.addEventListener('click', ()=>{
        removeClick(index)
    })
})

function showLista(lista, buttom = "all"){
    lista.forEach((item)=>{
        item.classList.remove('ativo');
    });

    if(buttom == 'medio'){
        lista[0].classList.add('ativo');
        lista[1].classList.add('ativo');
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
    }
    if(buttom == 'alto'){
        lista[8].classList.add('ativo');
        lista[9].classList.add('ativo');
        lista[10].classList.add('ativo');
        lista[11].classList.add('ativo');
        lista[12].classList.add('ativo');
        lista[13].classList.add('ativo');
        lista[14].classList.add('ativo');
        lista[15].classList.add('ativo');
    }

    if(buttom == 'construcao'){
        lista[16].classList.add('ativo');
        lista[17].classList.add('ativo');
        lista[18].classList.add('ativo');
        lista[19].classList.add('ativo');
    }

    if(buttom == 'all'){
        lista[0].classList.add('ativo');
        lista[1].classList.add('ativo');
        lista[2].classList.add('ativo');
        lista[3].classList.add('ativo');
        lista[4].classList.add('ativo');
        lista[5].classList.add('ativo');
        lista[6].classList.add('ativo');
        lista[7].classList.add('ativo');
        lista[8].classList.add('ativo');
        lista[9].classList.add('ativo');
        lista[10].classList.add('ativo');
        lista[11].classList.add('ativo');
        lista[12].classList.add('ativo');
        lista[13].classList.add('ativo');
        lista[14].classList.add('ativo');
        lista[15].classList.add('ativo');
        lista[16].classList.add('ativo');
        lista[17].classList.add('ativo');
        lista[18].classList.add('ativo');
        lista[19].classList.add('ativo');
    }
}

buttonGeral.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let currentButton = e.target;
        if(currentButton.classList.contains('all')){
            showLista(listaALL);
        } if(currentButton.classList.contains('medio')){
            showLista(listaALL, "medio")
        }

        if(currentButton.classList.contains('alto')){
            showLista(listaALL, "alto")
        }

        if(currentButton.classList.contains('construcao')){
            showLista(listaALL, "construcao")
        }

        if(currentButton.classList.contains('all')){
            showLista(listaALL, "all")
        }
    });
});

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  });
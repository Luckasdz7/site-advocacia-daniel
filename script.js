
const formulario = document.querySelector('.contato-form form');


formulario.addEventListener('submit', function(event) {
  
    event.preventDefault();

    
    const nome = document.getElementById('nome').value;
    const sobrenome = document.getElementById('sobrenome').value;
    const mensagemUsuario = document.getElementById('mensagem').value;

   
    const textoFinal = `Olá, sou ${nome} ${sobrenome} e gostaria de falar sobre: ${mensagemUsuario}`;

    
    const emailDestino = "danielrosaadvogado@hotmail.com";
    const assunto = "Contato pelo Site";
    
    window.location.href = `mailto:${emailDestino}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(textoFinal)}`;
});


const slider = document.querySelector('.grade-servicos');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; 
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; 
    slider.scrollLeft = scrollLeft - walk;
});

function lerMais() {
    var textoExtra = document.getElementById("texto-extra");
    var btn = document.getElementById("btn-ler-mais");
    // Pega a seção inteira para aplicar o efeito de layout
    var secaoPrincipal = document.getElementById("quem-somos"); 

    // Se já estiver aberto (vamos fechar)
    if (textoExtra.classList.contains("mostrar")) {
        textoExtra.classList.remove("mostrar");
        secaoPrincipal.classList.remove("modo-expandido"); // Remove a classe que esconde a foto
        btn.innerHTML = "SAIBA MAIS";
        
        // Opcional: rola a tela suavemente de volta para o topo da seção
        secaoPrincipal.scrollIntoView({ behavior: 'smooth' });
    } 
    // Se estiver fechado (vamos abrir)
    else {
        textoExtra.classList.add("mostrar");
        secaoPrincipal.classList.add("modo-expandido"); // Adiciona a classe que esconde a foto
        btn.innerHTML = "LER MENOS";
    }
}
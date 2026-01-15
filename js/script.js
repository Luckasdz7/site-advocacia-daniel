

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

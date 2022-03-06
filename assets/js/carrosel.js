//Cards Portifólio

const principalItens = document.querySelector('#principal');

const info = [

    { 'titulo': 'Dunamis - Graf', 'descricao': 'Neste projeto, o cliente pediu para que fosse desenvolvido um site, onde deveria conter informações sobre seus produtos.<br><br> Site com finalidade de divulgação dos produtos fabricados, contendo informações básicas de confecções e contatos para venda.<br><br> Projeto realizado em dupla.', 'image': './assets/img/jpg/dunamis.jpg', 'tec': 'Html &nbsp;|&nbsp; Materialize &nbsp;|&nbsp; Javascript', 'linkGitProjeto': 'https://github.com/danielandradedasilva/novo-Site_Dunamis', 'linkGit': 'https://github.com/danielandradedasilva', 'linkLinkedin': 'https://www.linkedin.com/in/daniel-andrade-da-silva/' },

    { 'titulo': 'Calculadora', 'descricao': 'Esta calculadora foi desenvolvida para fins de estudo com HTML, CSS e JAVASCRIPT.<br><br> Nela podemos realizar contas básicas que uma calculadora possui.<br><br> Projeto realizado apenas por mim.', 'image': './assets/img/jpg/calculator.jpg', 'tec': 'Html &nbsp;|&nbsp; Css &nbsp;|&nbsp; Javascript', 'linkGitProjeto': 'https://github.com/danielandradedasilva/calculadora-Js', 'linkGit': 'https://github.com/danielandradedasilva', 'linkLinkedin': 'https://www.linkedin.com/in/daniel-andrade-da-silva/' },

    { 'titulo': 'Finans', 'descricao': 'App desenvolvido para gerenciar gastos, onde podemos adicionar, excluir e até mesmo fazer uma busca especifica.<br><br> Com este projeto pude aprender, como salvar dados no próprio navegador como se fosse um Banco de dados.<br><br> Projeto realizado apenas por mim.', 'image': './assets/img/jpg/cofrinho.jpg', 'tec': 'Html &nbsp;|&nbsp; Css &nbsp;|&nbsp; Javascript', 'linkGitProjeto': 'https://github.com/danielandradedasilva/App-Financa', 'linkGit': 'https://github.com/danielandradedasilva', 'linkLinkedin': 'https://www.linkedin.com/in/daniel-andrade-da-silva/' },

    { 'titulo': 'Guardians - Pensão Alimentícia', 'descricao': 'App desenvolvido no curso de Desenvolvimento de Sistemas na ETEC como TCC.<br><br> O aplicativo consiste em auxiliar e estabelecer um relacionamento amigavel, entre pais e mães separados ou quem tem a posse legal da criança.<br><br> Projeto realizado em grupo.', 'image': './assets/img/jpg/guardians.webp', 'tec': 'Ionic &nbsp;|&nbsp; TypeScript &nbsp;|&nbsp; Firebase', 'linkGitProjeto': 'https://github.com/danielandradedasilva/Guardians', 'linkGit': 'https://github.com/danielandradedasilva', 'linkLinkedin': 'https://www.linkedin.com/in/daniel-andrade-da-silva/' }
]


const loadCards = (container) => {

    info.forEach((info) => {

        container.innerHTML += `
            <div class='content'>
                <div class='content-img'>
                    <img src='${info.image}' alt="imagens portifólio">
                    <div class='link'>
                        <button class='btn-link' onclick="window.open('${info.linkGit}')">Github</button>
                        <button class='btn-link' onclick="window.open('${info.linkLinkedin}')">Linkedin</button>
                    </div>
                </div>  
                <div class='informacoes'>
                    <span class='titulo-cards'>
                        ${info.titulo}
                    </span>
                    <hr class='hr-cards-port'>
                    <p class='descricao'>
                        ${info.descricao}
                    </p>
                    <hr class='hr-cards-port'>
                    <p class='tecnologias'>
                    Tecnologias usadas:<br><br>
                        ${info.tec}
                    </p>
                    <div class='btn-git-especifico'>
                        <button class='btn-link' onclick="window.open('${info.linkGitProjeto}')">Github</button>
                    <div>
                </div>
            </div>

        `
    });
}

loadCards(principalItens);

let items = document.querySelectorAll('.content');

const previous = () => {
    const lestItem = items[items.length - 1];
    principalItens.insertBefore(lestItem, items[0]);
    items = document.querySelectorAll('.content');
}
const nextt = () => {
    principalItens.appendChild(items[0]);
    items = document.querySelectorAll('.content');

}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#nextt').addEventListener('click', nextt);

////////////////////////////////////////////////////////////
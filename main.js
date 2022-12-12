/*--- menu mobile ---*/
const MENU = document.querySelector('#menu-mobile')
const ICONE_MENU = document.querySelector('.icone-menu')
const EXIT = document.querySelector('#menu-exit')

function abrirMenuMobile() {
    MENU.classList.remove('display-menu')
}

function fecharMenuMobile() {
    MENU.classList.add('display-menu')
}

ICONE_MENU.onclick = abrirMenuMobile
EXIT.onclick = fecharMenuMobile

/*--- habilidades ---*/
const LISTA_HABILIDADES = document.querySelectorAll('.skills-habilidades')

for(let i = 0; i < LISTA_HABILIDADES.length; i++) {
    const HABILIDADE = LISTA_HABILIDADES[i]
    let idHabilidade = HABILIDADE.id
    
    HABILIDADE.onclick = function() {
        mostraTexto(idHabilidade)
    }
}

const descricoesHabilidades = {
    'habilidade-html5': 'Apredendi através da Alura e comecei a conhecer quando criei o Tumblr!',
    'habilidade-css3': 'Que bonita sua roupa, aprendi com a Alura também!',
    'habilidade-js': 'Fiz alguns joguinhos clássicos com a Alura.',
    'habilidade-github': 'Poderia ser mais simples, mas é o jeitinho dele, ainda vou me acostumar',
    'habilidade-git': 'git add ., git commit -m "mensagem de commit", git log, git clone link-do-repositorio, git restore, git push origin suaBranch, git remote add origin servidorRemoto',
    'habilidade-cad': 'Usava bastante para os projetos 2d de Arquitetura e Urbanismo e agora estou migrando para o Revit',
    'habilidade-sketchup': 'Usava bastante para os projetos 3d de Arquitetura e Urbanismo e agora estou migrando para o Revit',
    'habilidade-lumion': 'Renderizador para cenas e vídeos',
    'habilidade-office': 'Pacote Office',
    'habilidade-python': 'Aprendendo',
    'habilidade-revit': 'Migrando para o Revit!',
}

function mostraTexto (idHabilidade) {
    let texto = document.querySelector('#texto-habilidade')
    let caixaDisplay = document.querySelector('#caixa-texto-habilidades')

    caixaDisplay.classList.remove('display-informacoes-habilidades')

    texto.innerHTML = descricoesHabilidades[idHabilidade] || ''
}


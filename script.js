
function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let formAno = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (formAno.value.length == 0 || formAno.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(formAno.value)
        let gênero = ''
        let img = document.createElement('img') // CRIANDO UMA IMAGEM DINÂMICAMENTE NO JS
        img.setAttribute('id', 'foto')// CRIANDO UMA IMAGEM DINÂMICAMENTE NO JS
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 6) {
                //CRIANÇA
                img.setAttribute('src', './imagens/bebe_menino.png')
            } else if (idade < 18) {
                //JOVEM
                img.setAttribute('src', './imagens/menino_jovem.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', './imagens/adulto_homem.png')
            } else {
                //IDOSO
                img.setAttribute('src', './imagens/velho_homem.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 6) {
                //CRIANÇA
                img.setAttribute('src', './imagens/bebe_menina.png')
            } else if (idade < 18) {
                //JOVEM
                img.setAttribute('src', './imagens/jovem_mulher.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', './imagens/adulta_mulher.png')
            } else {
                //IDOSO
                img.setAttribute('src', './imagens/velha_mulher.png')
            }
        }
        res.computedStyleMap.textAlign = 'center' // CENTRALIZAR EM JS
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img) // PARA ADICIONAR A IMAGEM 
    }
}



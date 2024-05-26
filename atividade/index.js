const novoCard = document.querySelectorAll('#card');

novoCard.forEach(cards => {
    cards.setAttribute('id', 'cardLaranja')
});

const novoTitulo = document.querySelectorAll('#titulo-card');

novoTitulo.forEach(titulo =>{
    titulo.setAttribute('id', 'estilizarTitulo')
    titulo.innerText = "Meu Card"
});

const novaDescricao = document.querySelectorAll('#descricao-card');

novaDescricao.forEach(descricao =>{
    descricao.setAttribute('id', 'estilizarDescricao')
    descricao.innerText = "Descrição modificada pelo JavaScript."
});

const novoBotaoEditar = document.querySelectorAll('#botao-editar');

novoBotaoEditar.forEach(botaoEditar =>{
    botaoEditar.setAttribute('id', 'botaoEditar')
});

const novoBotaoDeletar = document.querySelectorAll('#botao-apagar');

novoBotaoDeletar.forEach(botaoDeletar =>{
    botaoDeletar.setAttribute('id', 'botaoDeletar')
});

function editarCard(){
    alert("Clicou em Editar!")
    return;
};

function apagarCard(){
    const confirmar = confirm("Deseja excluir o card selecionado?");

    if(confirmar){
        alert("Confirmado!")
        return;
    }else{
        alert("Cancelou!")
    }
};


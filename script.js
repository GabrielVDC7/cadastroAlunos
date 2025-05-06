const alunos = [];
let lista = null;

function addObjeto(){
    let aluno = {
        nome: document.getElementById('nome').value,
        idade: document.getElementById('idade').value,
        curso: document.getElementById('curso').value 
    }
    alunos.push(aluno);
    console.log(alunos);
    lista = JSON.stringify({alunos}, null, 5); 

    document.getElementById('resultado').innerHTML = lista; 
}

function exportJSON(){
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(lista));
    element.setAttribute('download', 'data.json');

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
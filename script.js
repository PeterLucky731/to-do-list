// const tarefa = document.querySelector(".tarefa");
// const btnTarefa = tarefa.querySelector(".btnTarefa");

// btnTarefa.addEventListener("click", ()=>{
//     alterarStatus(tarefa)});

// function alterarStatus(tarefa){
//     const statusTarefa = ['default', 'feito', 'nao-feito', 'incompleto'];
//     let valorInput = tarefa.querySelector('input');
//     let statusAtual = statusTarefa.indexOf(valorInput.value);

//     let proximoStatus = (statusAtual + 1) % statusTarefa.length;
//     valorInput.value = statusTarefa[proximoStatus];

//     statusTarefa.forEach(statusAtual => {
//         tarefa.classList.remove(statusAtual)
//     })
    
//     tarefa.classList.add(statusTarefa[proximoStatus])
// }

class Tarefa{
    constructor(element) {
        this.elemento = element;
        this.statusTarefa = ['default', 'feito', 'nao-feito', 'incompleto'];
        this.valorInput = this.elemento.querySelector('input');
        this.btnTarefa = this.elemento.querySelector('.btnTarefa');

        this.btnTarefa.addEventListener("click", () => {
            this.alterarStatus();
        });
    }

    alterarStatus() {
        let statusAtual = this.statusTarefa.indexOf(this.valorInput.value);
        let proximoStatus = (statusAtual + 1) % this.statusTarefa.length;
        this.valorInput.value = this.statusTarefa[proximoStatus];

        this.statusTarefa.forEach(status => {
            this.elemento.classList.remove(status);
        });

        this.elemento.classList.add(this.statusTarefa[proximoStatus]);
    }
}

const tarefas = document.querySelectorAll(".tarefa");
tarefas.forEach(tarefaElement => {
    new Tarefa(tarefaElement);
});


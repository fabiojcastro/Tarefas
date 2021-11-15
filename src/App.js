import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [tarefas, setarTarefas] = useState([
    // {
    // id:0,
    // tarefa:'MInha tarefa do dia',
    // finalizada: false
    // },
    // {
    // id:0,
    // tarefa: 'Minha tarefa 2',
    // finalizada:true
    // },
  ]);

  const [modal, setModal] = useState(false);

  const salvarTarefa = () => {
    //alert('tarefa salva');
    //to do salvar a tarefa.
    var tarefa = document.getElementById('content-tarefa');
  
    setarTarefas([
      ... tarefas,
      {
        id: new Date().getTime(),
        tarefa: tarefa.value,
        finalizada:false
      }
    ]);

    setModal(false);
  }

  const abrirModal = () => {
    setModal(!modal);
  }

  const marcarConcluida = (id) =>{
    let novasTarefas = tarefas.filter(function(val){
      if(val.id == id)
      {
        val.finalizada = true;
      }
      return val;
    })
    setarTarefas(novasTarefas);
  }

  useEffect(() => {
    //Fazer uma chamada para API e preencher os estado de tarefas.
  }, [])

  return (
    <div className="App">
      {
        modal ?
          <div className="modal">
            <div className="modalContent">
              <h3>Adicionar sua tarefa</h3>
              <input id="content-tarefa" type="text" />
              <button onClick={() => salvarTarefa()}>Save</button>
            </div>
          </div>
          :
          <div></div>
      }
      <div onClick={() => abrirModal()} className="addTarefa">+</div>
      <div className="boxTarefas">
        <h2>Minhas tarefas do dia.</h2>
        {
          tarefas.map((val) => {
            if (!val.finalizada) {
              return (
                <p onClick={()=>marcarConcluida(val.id)}>{val.tarefa}</p>
              );
            }
            else {
              return (
                <p style={{ textDecoration: "line-through" }}>
                  {val.tarefa}
                </p>
              );
            }
          }
          )
        }
      </div>
    </div>
  );
}

export default App;

import {potencia, Greetings} from 'poc-lib-shared-pow';
/* import {Greetings}from 'poc-lib-shared-pow'; */

function App() {

  let resultado = potencia(5, 4);
  return (
    <div className="App">

     <Greetings />
     <h2>{resultado}</h2>
      
    </div>
  );
}

export default App;

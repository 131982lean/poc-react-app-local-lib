import {potencia, Greetings} from 'poc-lib-shared-pow';

function App() {

  let resultado = potencia(3, 4);
  return (
    <div className="App">

     <Greetings />

     <h2>{resultado}</h2>

    </div>
  );
}

export default App;

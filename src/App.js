import {potencia, Greetings} from 'poc-lib-shared-pow';

function App() {

  let resultado = potencia(3, 3);
  return (
    <div className="App">

     <Greetings />
     <h2>{resultado}</h2>
      
    </div>
  );
}
console.log("hola")

export default App;

import {potencia, Greetings} from 'poc-lib-shared-pow';
import { Mantine } from '@mantine/core';

function App() {

  let resultado = potencia(2, 4);
  console.log(Greetings);
  return (
    <div className="App">

     <Greetings />

     <h2>{resultado}</h2>

    </div>
  );
}

export default App;

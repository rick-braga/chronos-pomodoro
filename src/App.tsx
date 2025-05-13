import Home from './pages/Home';
import { TaskStateModel } from './models/TaskStateModel';
import { useState } from 'react';

import './styles/theme.css';
import './styles/global.css';

const initialState: TaskStateModel = {
  tasks: [],
  secondsRemaining: 0,
  formattedSecondsRemaining: '00:00',
  activeTask: null,
  currentCycle: 0,
  config: {
    workTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
  },
};

function App() {
  //criamos o state aqui pq vamos jogar em componentes filhos do App
  const [state, setState] = useState(initialState);

  return <Home state={state} setState={setState} />;
}

export default App;

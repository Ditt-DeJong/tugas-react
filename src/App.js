import './App.css';
import Gue from './asset/gue.js';
import Yoi from './component/Yoi';
import Greeting from './component/greeting';
import Rifqi from './component/Rifqi';
import Follow from './component/Follow'

function App() {
  return (
    <div className="App">
      <Gue src={Gue}></Gue>
      <Yoi></Yoi>
      <Greeting></Greeting>
      <Rifqi info="Aditya Rachman"></Rifqi>
      <Rifqi info="Dari Blok M"></Rifqi>
      <Rifqi info="Sudah Punya"></Rifqi>
      <Follow></Follow>
    </div>
  );
}

export default App;

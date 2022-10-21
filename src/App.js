import Tabs from './components/Tabs';
import './App.css';
import alligator from './images/alligator.jpg';
import nile_crocodile from './images/nile_crocodile.jpg';
import sarcosuchus from './images/sarcosuchus.jpg';

function App() {
  return (
    <div>
      <h1>Tabs Demo</h1>
      <Tabs>
        <div label="Gator">
          See ya later, <em>Alligator</em>!
          <img src={alligator} alt="alligator"/>
        </div>
        <div label="Croc">
          After 'while, <em>Crocodile</em>!
          <img src={nile_crocodile} alt="crocodile"/>
        </div>
        <div label="Sarcosuchus">
          Nothing to see here, this tab is <em>extinct</em>!
          <img src={sarcosuchus} alt="sarcosuchus"/>
        </div>
      </Tabs>
    </div> 
  );
}

export default App;

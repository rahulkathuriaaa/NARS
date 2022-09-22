import './App.css';
import Body from './component/Body';
import Navbar from './component/Navbar';
import Sec from './component/Sec';
// import photo from './img/body.jpg'

function App() {
  return (
    <>
    <div className="img">
      <Navbar />
     <Body/>
    </div>
     <Sec/>
    </>
  );
}

export default App;

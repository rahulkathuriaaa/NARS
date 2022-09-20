import './App.css';
import Navbar from './component/Navbar';
import photo from './img/body.jpg'

function App() {
  return (
    <>
      <Navbar />
      <div  className = "container-fluid" style={{ height: '100vh', width:'100%',color: 'white',backgroundImage: `url(${photo})` ,backgroundRepeat:'no-repeat', backgroundSize: '1270px 608px'}}>
       <h1 style={{fontSize: '90px'}}>Powerful</h1>
       <h1 style={{fontSize: '90px'}}>for developers. </h1>
       <h1 style={{fontSize: '90px'}}> Fast for everyone.</h1>
       </div>
      {/* <img src={photo} alt="body" style={{ width: '100vw' }} /> */}
    </>
  );
}

export default App;

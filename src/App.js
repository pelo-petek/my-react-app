import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Card from './components/Card';
function App() {
  return (
    <div>
    <Header/>
    <div className='cards'>
    <Card/>
    </div>
    <Footer></Footer>
    </div>
  );
}


export default App;

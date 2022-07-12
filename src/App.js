import Upperhalf from './components/upperhalf';
import Navbar from './components/navbar';
import Lowerhalf from './components/lowerhalf';
import './App.css';
import Footer from './components/footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <Upperhalf />
      <Lowerhalf />

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;

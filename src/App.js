import './main.css';
import InputForm from './components/Form';
import Hero from './components/Hero';
import MyNav from './components/Nav';

function App() {
  return (
    <div className='App'>
      <MyNav />
      <Hero />
      <InputForm />
    </div>
  );
}

export default App;

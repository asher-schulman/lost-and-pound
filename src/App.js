import './App.css';
import ButtonBox from './components/ButtonBox';
import Header from './components/Header';
import PetCard from './components/PetCard';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header/>
      <ButtonBox/>
      <SearchBar/>
      <PetCard/>
      <Footer/>
    </div>
  );
}

export default App;

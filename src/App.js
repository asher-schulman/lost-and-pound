import './App.css';
import Header from './components/Header';
import PetCard from './components/PetCard';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import LostForm from './components/form/LostForm';
import { useState } from 'react';
import {Button} from 'react-bootstrap'

function App() {

  const [renderForm, setRenderForm] = useState('')

  const renderTrue = () => {
    setRenderForm(true)
  }

  const renderFalse = () => {
    setRenderForm(false)
  }

  return (
    <div className="App">
      <Header/>

      {
        renderForm === '' ?
        <>
          <Button className='circleButton m-2' variant="outline-dark" size="lg" onClick={renderTrue}>LOST</Button>
          <Button className='circleButton m-2' variant="outline-dark" size="lg" onClick={renderFalse}>FOUND</Button>
        </>
          : renderForm ? <LostForm />
          : <><SearchBar/> <PetCard/></>
      }

      <Footer/>
    </div>
  );
}

export default App;

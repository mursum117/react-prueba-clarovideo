import { useState } from 'react'
import { useGetEGP } from './hooks/useGetEGP';
import EPG from './components/EGP';
import ReactModal from 'react-modal'
import './css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const {channels, getChannels} = useGetEGP()
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = async() => {
    setIsModalOpen(true)
    getChannels()
  }

  return (
    <div className='container-fluid'>
      <div className="row">
        <button onClick={handleClick}>
          Mostrar EGP
        </button>
      </div>
      <ReactModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} ariaHideApp={false}>
        <button className='close-modal' onClick={() => setIsModalOpen(false)}>X</button>
        <EPG channels={channels}/>
      </ReactModal>
    </div>
  );
}

export default App

import { useState } from 'react'
import { useGetEGP } from './hooks/useGetEGP';
import EPG from './components/EGP';
import './css/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

function App() {
  const {channels, getChannels} = useGetEGP()
  const [show, setShow] = useState(false)
  
  const handleClose = () => setShow(false)
  const handleShow= async() => {
    setShow(true)
    getChannels()
  }

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col'>
          <button className='btn-EPG' onClick={handleShow}>
            Mostrar EGP
          </button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} fullscreen={true}>
        <Modal.Header className='modal-header' closeButton>
        </Modal.Header>
        <Modal.Body className='p-0'>
          <EPG channels={channels}/>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App

import pizza from '../assets/PizzaCategoria.png'
import { Modal } from './styles'

const Gallery = () => {
  return (
    <>
      <Modal>
        <div>
          <img src={pizza} alt="" />
          <p>aaaa</p>
          <div className="overlay"></div>
        </div>
      </Modal>
    </>
  )
}

export default Gallery

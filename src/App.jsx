import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import shoesImage from './assets/shoes.jpg'
import ProductDetail from './components/ProductDetail';
import Modal from './components/Modal';
import Toast from './components/Toast';
import Footer from './components/Footer';

function App() {
  //장바구니에 담긴 상품 갯수
  const [cartCount, setCartCount] = useState(0);

  //이미지 확대 모달
  const [modalOpen, setModalOpen] = useState(false);

  //장바구니 알림
  const [toastOpen, setToastOpen] = useState(false);

  const addCart = () => {
    setCartCount(cartCount + 1);
    setToastOpen(true);
    setTimeout(() => {
      setToastOpen(false)
    }, 2000);
  }

  const openModal = () => {
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  }

  return (
    <div className='app'>
      <Header cartCount={cartCount} />

      <main className="container">
        <ProductDetail image={shoesImage} onAddCart={addCart} onOpenModal={openModal} />
      </main>

      {
        modalOpen && (
          <Modal image={shoesImage} onClose={closeModal} />
        )
      }

      {
        toastOpen && <Toast />
      }

      <Footer />
    </div>
  )
}

export default App

import Banner from './components/Banner/Banner';
import Header from './components/Header/navigation/Header';
import style from './App.module.css'
import Content1 from './components/Content-1/Content1';
import Footer from './components/Footer/Footer';
import Content2 from './components/Content-2/Content2';

function App() {
  return (
    <div className = {style.container}>
      <Header/>
      <Banner/>
      <Content1/>
      <Content2/>
      <Footer/>
    </div>
  )
}

export default App;

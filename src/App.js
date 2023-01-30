import './App.css';
import Header from  '../src/component/Header';
import ManSection from './component/ManSection'
import './All_sections_css/Global.css';
import WomenSection from './component/WomenSection'
import BeautySection from './component/BeautySection'
import BrandsSection from './component/BrandsSection'
import KidsSection from './component/KidsSection'
import HomePage from './component/HomePage';
import Footer from './component/Footer';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/man' element={<ManSection />} />
        <Route path='/women' element={<WomenSection />} />
        <Route path='/beauty' element={<BeautySection />} />
        <Route path='/brands' element={<BrandsSection />} />
        <Route path='/kids' element={<KidsSection />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
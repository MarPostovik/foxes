import './App.css'
import './Adaptive.css'
import Header from './components/Header';
import Footer from "./components/Footer";
import News from './components/News';
import {items} from './components/News/newsItems';

const App = () => {
  return <>
    <Header />
    <News items = {items}/>
    <Footer />
  </>
}
export default App
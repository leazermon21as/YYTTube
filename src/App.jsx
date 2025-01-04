import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header'
import Libary from './Libary/Libary'
import Category from './category/Category'

// PAGE ==============
import Setting from './Setting/Setting';


export default function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/setting' element={<Setting />}/>
        </Routes>
      </Router>
    </>
  )
}
function Home () {
  return (
    <>
      <Header />
      <Category />
      <Libary />
    </>
  )
}


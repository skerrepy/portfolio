import React, { Suspense } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
const Layout = React.lazy(()=>import ('./Components/layout/Layout'));
const Navbar = React.lazy(()=>import ('./Components/navbar/Navbar'));
const Landing = React.lazy(()=>import  ('./Components/landing/Landing'));
const Work = React.lazy(()=>import ('./Components/work/Work'));
const Contact = React.lazy(()=>import ('./Components/contact/Contact'));


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Router>
      <Layout>
        <Navbar/>
        <Route path="/" exact component={Landing} />
        <Route path="/showcase" exact component={Work} />
        <Route path="/contact" exact component={Contact} />

      </Layout>
    </Router></Suspense>
  );
}

export default App;

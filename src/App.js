import React, { Suspense } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Loading from './Components/loading/Loading'

const Layout = React.lazy(()=>import ('./Components/layout/Layout'));
const Navbar = React.lazy(()=>import ('./Components/navbar/Navbar'));
const Landing = React.lazy(()=>import  ('./Components/landing/Landing'));
const Work = React.lazy(()=>import ('./Components/work/Work'));
const Contact = React.lazy(()=>import ('./Components/contact/Contact'));
const Skills = React.lazy(()=>import ('./Components/skills/Skills'));
const About = React.lazy(()=>import ('./Components/about/About'));

function App() {
  return (
    <Suspense fallback={<Loading/>}>
    <Router>
      <Layout>
        <Navbar/>
        <Route path="/" exact component={Landing} />
        <Route path="/showcase" exact component={Work} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/about" exact component={About} />

    <Route path="/test" exact component={Loading}/>
      </Layout>
    </Router></Suspense>
  );
}

export default App;

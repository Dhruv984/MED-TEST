import React,{useEffect,useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navigation/Navbar'
import Products from './components/products/Products';
import Feedback from './components/feedback/Feedback'
import Subscribe from './components/subscribe/Subscribe';
import Social from './components/social/Social';
import Footer from './components/footer/Footer';
import Authentication from './components/authentication/Authentication';
import SignUp from './components/authentication/SignUp';
//firebase
import {auth} from './firebase'

function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const state = auth.onAuthStateChanged(userAuth => {
      const user = {
        uid: userAuth?.uid,
        email: userAuth?.email
      }
      if (userAuth) {
        console.log(userAuth)
        setUser(user)
      } else {
        setUser(null)
      }
    })
    return state
  }, [])
  return (
    <div className="container">

      <Router>
        {!user?<Switch>
        
        <Route path='/' exact>
              <Navbar user={user}/>
          <div className='inner__container'>
              <Header />
              <Products />
              <Feedback />
              <Subscribe />
              <Social />
              <Footer />
          </div>
          </Route>
          <Route path='/signIn' exact>
              <Authentication />
          </Route>
          <Route path='/signUp' exact>
              <SignUp/>
          </Route>
        </Switch>:
        <>
         <Navbar user={user}/>
         <div className='inner__container'>
         <Header />
         <Feedback />
         <Subscribe />
         <Social />
         <Footer />
         </div>
         </>
         }
      </Router>
    </div>
  );
}

export default App;

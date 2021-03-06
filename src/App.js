import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser: null
    }

  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }



  render(){
    return (
      <div>
        <Header currentUser = {this.state.currentUser} />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="signin" element={<SignInSignUp />} />
      </Routes>
      </div>
    );
  }
  
}

export default App;
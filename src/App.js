import React from 'react';
import Nav from './components/Nav';
import Characters from './components/Characters';
import Post from './components/Post';
import Header from './components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Episodes from './components/Episodes';
import Quotes from './components/Quotes';
import Deaths from './components/Deaths';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Header />
        <Switch>
          <Route exact path="/" component={Characters}/>
          <Route path="/episodes" component={Episodes} />
          <Route path="/quotes" component={Quotes} />
          <Route path="/deaths" component={Deaths} />
          <Route path="/:char_id" component={Post }/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;

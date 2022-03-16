import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.scss'
import SingleCountry from './pages/Country'
import Home from './pages/Home'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import FavNations from './pages/FavCountries'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' component={Home} exact></Route>
          <Route path='/favourites' component={FavNations}></Route>
          <Route path='/country/:countryName' component={SingleCountry}></Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App

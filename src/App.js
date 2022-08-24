import logo from './logo.svg';
import './App.css';
import {Collection, Zomato} from './compnents/zomato';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className='container'>
          <section className="header-wrapper">
            < section className='logo'>
            <a href='#'>Get app</a>
            </section>
            <section className='navi'>
              <a className='navi1' href='#'>Investor Relations</a>
              <a className='navi1' href='#'>Add restaurant</a>
              <a className='navi1' href='#'>Log in</a>
              <a className='navi1' href='#'>Sign up</a>
            </section>
          </section>
        </section>
        <section className='banner'>
          <section className='container'>
            <h2>ZOMATO</h2>
            <p className='class'>Discover the best food & drinks in Tirunelveli</p>
            <form>
              <label for="foods">Choose location</label>
              <select id="foods" name="foods">
                <option value="city">New bustand</option>
                <option value="city">Junction</option>
                <option value="city">Vannarpettai</option>
                <option value="city">KTC nagar</option>
              </select>
              <input type="submit" value="Submit"></input>
            </form>
          </section>
        </section>
      </header>

      <Collection/>
      <Zomato/>
    </div>
  );
}

export default App;

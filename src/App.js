// Components
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer";

import BadlyPlacedComponent from "./BadlyPlacedComponent";
import GoodlyPlacedComponent from "./components/GoodlyPlacedComponent/GoodlyPlacedComponent";

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="#/">top</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>Titl top</h1>
        <p>Some later changes</p>
      </main>

      <Footer />
    </>
  )
}

export default App;
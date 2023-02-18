import { BrowserRouter as Router, Route } from "react-router-dom";
import CardsProducer from "./components/public/CardsProducer";
import Details from "./components/public/Details";
import Footer from "./components/public/Footer";
import Header from "./components/public/Header";
import { Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div className="principal">
          <Routes>
            <Route exact path="/peliculas-react" element={<Header />}></Route>
            <Route exact path="/:busq" element={<Header />}></Route>
            <Route exact path="/details/:busq/:id" element={<Details />}></Route>
          </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;

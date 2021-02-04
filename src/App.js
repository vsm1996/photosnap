import "./App.css";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/common/navigation/Nav";
import Home from "./pages/home/Home";
import Stories from "./pages/stories/Stories";
import Features from "./pages/features/Features";
import Pricing from "./pages/pricing/Pricing";
import Footer from "./components/common/footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/stories" component={Stories} />
        X<Route exact path="/features" component={Features} />
        X<Route exact path="/pricing" component={Pricing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

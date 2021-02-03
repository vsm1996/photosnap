import "./App.css";
import { Switch, Route } from "react-router-dom";
import Nav from "./components/common/navigation/Nav";
import Home from "./pages/home/Home";
import Stories from "./pages/stories/Stories";
import Footer from "./components/common/footer/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/stories" component={Stories} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import List from "./components/List";
import Intro from "./components/Intro";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <List />
    </div>
  );
}

export default App;

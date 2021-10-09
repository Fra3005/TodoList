import logo from "./logo.svg";
import "./App.css";
import SearchAppBar from "./Components/AppBar/Bar";
import InsertItem from "./Components/InsertBox/InsertBox";
function App() {
  return (
    <>
      <div className="container">
        <SearchAppBar />
      </div>
      <div className="container">
        <InsertItem />
      </div>
    </>
  );
}

export default App;

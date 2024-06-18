import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import Post from "./components/Post";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Post />
      <ClassCounter />
    </div>
  );
}

export default App;

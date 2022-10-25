import "./App.css";
import Header from "./Components/Header";
import Todo from "./Components/Todo";
import Todos from "./Todos";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header title="My Todo List" searchbar={true} />
      <Footer />
      <Todo />
      <Todos />
    </>
  );
}

export default App;

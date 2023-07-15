import Footer from "./components/Footer";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import "./styles.css";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <div className="h-15">
        <Header />
      </div>
      <div className="flex-1 overflow-y-auto  ">
        <Home />
      </div>
      <div className="flex-none overflow-y-auto">
        <Footer />
      </div>
    </div>
  );
}

export default App;

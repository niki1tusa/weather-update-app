import "./App.css";
import LeftSidebar from "./components/sidebar/LeftSidebar";
import SideRIghtBar from "./components/SideRIghtBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex gap-10">
      <LeftSidebar />
      <Home />
      <SideRIghtBar />
    </div>
  );
}

export default App;

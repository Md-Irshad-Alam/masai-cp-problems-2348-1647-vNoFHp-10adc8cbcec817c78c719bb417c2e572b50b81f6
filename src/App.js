import "./App.css";
import { BrowserRouter } from "react-router-dom";
import BillPage from "./Components/BillPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        {/* Add title here in h1 tag */}
        <h1>SPLITTER</h1>
        <div>
          {/* Add BillPage component */}
          <BillPage />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

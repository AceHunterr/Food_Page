import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import FoodCardsPage from "./Pages/FoodCardsPage/FoodCardsPage";
import FoodDetailsPage from "./Pages/FoodDetailsPage/FoodDetailsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<FoodCardsPage />}></Route>
          <Route
            path="/food-details"
            exact
            element={<FoodDetailsPage />}
          ></Route>
        </Routes>
      </BrowserRouter>
      {/* <FoodCardsPage />
      <FoodDetailsPage /> */}
    </div>
  );
}

export default App;

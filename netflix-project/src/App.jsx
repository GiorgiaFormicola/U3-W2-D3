import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import HomePage from "./components/HomePage";
import AccountPage from "./components/AccountPage";
import TVShowsPage from "./components/TVShowsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/tv-shows" element={<TVShowsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

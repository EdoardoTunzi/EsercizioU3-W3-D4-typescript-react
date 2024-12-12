import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNav from "./components/MyNav";
import MainArticle from "./components/MainArticles";
import Details from "./components/Details";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<MainArticle />} />
          <Route path="/details/:artId" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

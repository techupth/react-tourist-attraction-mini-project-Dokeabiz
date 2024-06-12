import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ArticleList from "./components/ArticleList";
import { useState, useEffect } from "react";


function App() {
  const [searchData, setSearch] = useState("");
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:4001/trips?keywords=${searchData}`);
      setArticles(response.data.data);
      //console.log(response.data.data);
    } catch (error) {
      console.error("Error Fetching", error);
    }
  };
  getData();
  }, [searchData]);


  return (
    <div className="App">
      <Header />
      <SearchBar setSearch={setSearch} />
      <ArticleList articles={articles} />
    </div>
  );
}

export default App;

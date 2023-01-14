// import logo from './logo.svg';
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Logo from "./components/Logo/logo";
import Header from "./components/Header/Header";
import Definations from "./components/Definations/Definations";

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      console.log(data);
      setMeanings(data.data);
      // console.log(meanings);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    dictionaryApi();
    // eslint-disable-next-line
  }, [category, word]);

  return (
    <div
      className="App"
      style={{
        height: "100vh",      
        transition: "all 0.5s linear",
      }}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
    
        <Logo></Logo>
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
        {meanings && (
          <Definations
            category={category}
            word={word}
            meanings={meanings}
          />
        )}
      </Container>
    </div>
  );
}

export default App;

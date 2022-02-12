import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

function App() {
  const initialState = ["Hacker"];
  const [Gitf, setGitf] = useState(initialState);
  return (
    <div className="App">
      <h1>Gif App Custom By Retr0</h1>
      <hr />
      <AddCategory setGitf={setGitf} />
      <div className="container-gif">
        <ol>
          {Gitf.map((Gif, key) => (
            <GifGrid key={key} Gif={Gif} />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;

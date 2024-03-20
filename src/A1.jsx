import React, { useState, useEffect } from "react";

const App = () => {
  const [word, setWord] = useState("");
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      const newWord = Math.random() > 0.5 ? "Deve" : "Cüce";
      setWord(newWord);
      setTime(2);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (time === 0) {
        setScore((prevScore) => prevScore - 1);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [time]);

  const handleButtonClick = (guess) => {
    if (guess === word) {
      setScore((prevScore) => prevScore + 1);
    } else {
      setScore((prevScore) => prevScore - 1);
    }
    setTime(0);
  };

  return (
    <div>
      <h1>Deve-Cüce Oyunu</h1>
      <div className="p-3 mb-1 bg-primary text-white">
        Ekrandaki kelimeyi doğru tahmin et ve puan kazan!
        <br />
        Kelime: {word} <br />
        puan: {score} <br />
        Kalan Süre: {time} <br />       
      </div>
      <button
          type="button" 
          className="btn btn-primary"
          onClick={() => handleButtonClick("Deve")} 
        > Deve 
        </button> 
        &nbsp;<button
          type="button"
          className="btn btn-primary"
          onClick={() => handleButtonClick("Cüce")}
        > Cüce 
        </button> 
    </div>
  );
};

export default App;

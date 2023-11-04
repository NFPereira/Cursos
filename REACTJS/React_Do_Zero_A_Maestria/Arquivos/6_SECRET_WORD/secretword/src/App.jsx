//React
import React, { useCallback, useEffect, useState } from 'react'

//Css
import './App.css'

//data
import { wordList } from './data/word';

// Components
import StartScreen from './components/StartScreen'
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' },
]

const guessesQtd = 3

const App = () => {

  //fase do jogo
  const [gameStage, setGameStage] = useState(stages[0].name);

  //palavras
  const [words] = useState(wordList);

  //palavra escolhida
  const [pickedWord, setPickedWord] = useState("");

  //categoria escolhida
  const [pickedCategory, setPickedCategory] = useState("");

  //letras
  const [letters, setLetters] = useState([]);

  //letras adivinhadas
  const [guessedLetters, setGuessedLetters] = useState([]);

  //letras erradas
  const [wrongLetters, setWrongLetters] = useState([]);

  //suposições
  const [guesses, setGuesses] = useState(guessesQtd);

  //pontuação
  const [score, setScore] = useState(0)

  // escolha palavra e categoria
  const pickWordAndCategory = () => {

    //categoris
    const categories = Object.keys(words);

    //categoria
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    //palavra
    const word = words[category][Math.floor(Math.random() * words[category].length)]


    return { word, category };
  }



  // starts the secret word game
  const startGame = useCallback(() => {
    clearLetterState();

    //pick word and pick category
    const { word, category } = pickWordAndCategory();

    //create an array of letters
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((l) => l.toLowerCase());

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    console.log(word, category);
    console.log(wordLetters);

    setGameStage(stages[1].name);
  })
  // process the letter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    // push guessed letter or remove as guess

    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters, normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);
      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  function clearLetterState() {
    setGuessedLetters([]);
    setWrongLetters([]);

  }

  useEffect(() => {
    if (guesses <= 0) {

      clearLetterState();

      setGameStage(stages[2].name)
    }
  }, [guesses]);

  useEffect(() => {

    const unniqueLetters = [...new Set(letters)];

    if(guessedLetters.length === unniqueLetters.length){
      setScore((actualScore) => actualScore += 100);

      startGame();
    }



  },[guessedLetters, letters, startGame]);

  // restarts the game
  const retry = () => {
    setScore(0);
    setGuesses(guessesQtd);
    setGameStage(stages[0].name);
  }


  return (
    <div className='App'>
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters} guessedLetters={guessedLetters} wrongLetters={wrongLetters} guesses={guesses} score={score} />}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  )
}

export default App
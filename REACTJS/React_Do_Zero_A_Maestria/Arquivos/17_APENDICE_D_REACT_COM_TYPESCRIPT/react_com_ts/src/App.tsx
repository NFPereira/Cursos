//4  importação de componentes
import { createContext } from "react";
import Destructuring, { Category } from "./components/Destructuring";
import FirstComponents from "./components/FirstComponents";

// 5 desesturturando props
import SecoundComponents from "./components/SecoundComponents";

// 6 - useState
import State from "./components/State";
import Context from "./components/Context";

// 9 - type
type textOrNull = string | null;

type fixed = "Isso" | "Ou" | "Aquilo";

// 10 - context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - variáveis
  const name: string = "Nilson";
  const age: number = 30;
  const isWorking: boolean = true;

  //2 - funções
  const userGreeting = (name: string): string => {
    return `Olá ${name}!`;
  };

  // 9 - type
  const myText: textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;

  // mySecondText = "opa";

  const textandoFixed: fixed = "Isso";

  // 10 - context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>React com TypeScript</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && (
          <div>
            <p>Está trabalhando</p>
          </div>
        )}
        <h3>{userGreeting(name)}</h3>
        <FirstComponents />
        <SecoundComponents name="Segundo" />
        <Destructuring
          category={Category.TS}
          title="Primeiro post"
          content="Algum conteúdo"
          commentsQty={10}
          tags={["JavaScript", "Css", "TypeScript"]}
        />
        <Destructuring
          category={Category.P}
          title="Segundo post"
          content="Mais outro conteúdo"
          commentsQty={5}
          tags={["JavaScript", "Css", "TypeScript"]}
        />
        <State />
        {myText && <p>Tem texto na variável</p>}
        {mySecondText && <p>Tem texto na variável</p>}
        {textandoFixed && <p>{textandoFixed}</p>}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;

import "./App.css";
import CustomClassComponent from "./CustomClassComponent";
import CustomEventComponent from "./CustomEventComponent";
import CustomFirstComponent from "./CustomFirstComponent";
import CustomFunctionalComponent from "./CustomFunctionalComponent";
import CustomKeysComponent from "./CustomKeysComponent";
import CustomRefComponent from "./CustomRefComponent";
import UseEffectComponent from "./UseEffectComponent";
import UseStateComponent from "./UseStateComponent";

function App() {
  const appName = "My React Application";
  
  return (
    <div className="App">
      <h1>Welcome to {appName}</h1>
      <UseEffectComponent/>
      <UseStateComponent/>
      <CustomKeysComponent />
      <CustomRefComponent />
      <CustomEventComponent />
      <CustomFunctionalComponent name={appName} age={44}>
        Hello
      </CustomFunctionalComponent>
      <CustomClassComponent name={appName} age={44}>
        Hello there
      </CustomClassComponent>
      <CustomFirstComponent />
    </div>
  );
}

export default App;

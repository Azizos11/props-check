import "./App.css";
import Child from "./Profile/Child";

function App() {
  const getName = (name) => alert(name);
  const callbackFn = (a) => alert(a);
  return (
    <div className="App">
      <Child
        name="Azizos"
        age={21}
        isStudent={true}
        skills="html, css, js"
        lang={{ english: "excelent", french: "good", german: "excelent" }}
        getName={getName}
        callbackFn={callbackFn}
        selfie="https://i.imgur.com/pbgWEF6.jpeg"
      />
    </div>
  );
}

export default App;

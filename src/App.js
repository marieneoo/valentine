import { useState } from "react";
import "./App.css";

function App() {
  const [NoCount, setNoCount] = useState(0);
  const [YesPressed, setYesPressed] = useState(false);
  const ButtonSize = NoCount * 10 + 16;

  function handleNoClick() {
    setNoCount(NoCount + 1);
  }

  function getPhrases() {
    return phrases[Math.min(NoCount, phrases.length - 1)];
  }

  const phrases = [
    "Ոչ",
    "Վստա՞հ ես",
    "Հաստատ վստա՞հ ես",
    "Շաատ եմ խնդրում",
    "Մի վարվիր էսպես",
    "Հեսա կլացեմ",
    "Դու կոտրում ես իմ սիրտը",
  ];

  return (
    <div className="container">
      {YesPressed ? (
        <div className="yes_pressed">
          <img
            className="yes_pressed_pic"
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
          ></img>
          <h3>Դզեցցց!!!</h3>
        </div>
      ) : (
        <div className="no_pressed">
          <img
            className="no_pressed_pic"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          ></img>
          <h2>Կլինե՞ս իմ վալենտինը</h2>

          <div className="buttons">
            <button
              className="yes_button"
              style={{ fontSize: ButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Այո
            </button>

            <button className="no_button" onClick={handleNoClick}>
              {getPhrases()}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

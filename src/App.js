import { useState } from "react";
import "./App.css";

function App() {
  const [NoCount, setNoCount] = useState(0); //stexcum enq state no-i button- click anelu qanaky hashvelu hamar
  const [YesPressed, setYesPressed] = useState(false); // stexcum enq state, vor henc yes- vra sxmenq value-n poxvi true u ejy poxenq
  const ButtonSize = NoCount * 10 + 16; // button-i size-i voroshum, no-i button-i vra click aracneri het matematikakan hashvark

  function handleNoClick() {
    setNoCount(NoCount + 1);
  } // funkcian stexcvac a no-i clickeri qanaky avelacnelu hamar

  function getPhrases() {
    return phrases[Math.min(NoCount, phrases.length - 1)];
  } // tpum e phrase-eri no count-erord index-i tak gtnvox arjeqy erb vor hasnum e verjin tpum a anyndhat amenaverjin popoxakany

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
              style={{ fontSize: ButtonSize }} // font size-y talis enq buttonsize-i arjeqy
              onClick={() => setYesPressed(true)} // mer state-y,vori anuny yespressed-a poxum enq true
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

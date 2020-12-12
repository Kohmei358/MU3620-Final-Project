import './Main.css';
import { useState, useEffect } from 'react';
import AudioPlayer from "./AudioPlayer";

function Main(props) {

  const audioPlayer = AudioPlayer();

  useEffect(() => {
    audioPlayer.setInstrument("acoustic_grand_piano");
  }, []);


  const qPress = useKeyPress('q');
  const aPress = useKeyPress('a');
  const sPress = useKeyPress('s');
  const dPress = useKeyPress('d');
  const zPress = useKeyPress('z');
  const xPress = useKeyPress('x');
  const cPress = useKeyPress('c');

  const bPress = useKeyPress('b');
  const nPress = useKeyPress('n');
  const mPress = useKeyPress('m');
  const hPress = useKeyPress('h');
  const jPress = useKeyPress('j');
  const kPress = useKeyPress('k');
  const yPress = useKeyPress('y');
  const uPress = useKeyPress('u');
  const iPress = useKeyPress('i');

  const handleKeyDown = e => {
     if (!e.repeat) {
       const note = getNoteFromKeyboardKey(e.key);
       if (note) {
         // setState({ ...state, notesPlaying: [...state.notesPlaying, note] });
         audioPlayer.playNote(note);
       }
     }
   };


  useEffect(() => {
     window.addEventListener("keydown", handleKeyDown);
   }, []);



   const getNoteFromKeyboardKey = key => {
    switch (key) {
      case 'y':
        return "B5"
        break;
      case 'u':
        return "C6"
        break;
      case 'i':
        return "D6"
        break;
      case 'h':
        return "F5"
        break;
      case 'j':
        return "G5"
        break;
      case 'k':
        return "A5"
        break;
      case 'b':
        return "C5"
        break;
      case 'n':
        return "D5"
        break;
      case 'm':
        return "E5"
        break;

    }
  }

  if(props.type == "Major"){
    return (
      <>

      <div className="leftBox">
        <div className="container">
          <div className={`letter_special ${qPress && "pressed"}`}>
            vii(dim) (q)
          </div>
          <div>

          </div>
          <div>

          </div>
        </div>
        <div className="container">
          <div className={`letter ${aPress && "pressed"}`}>
            IV (a)
          </div>
          <div className={`letter ${sPress && "pressed"}`}>
            V (s)
          </div>
          <div className={`letter ${dPress && "pressed"}`}>
            vi (d)
          </div>
        </div>
        <div className="container">
          <div className={`letter ${zPress && "pressed"}`}>
            I    (z)
          </div>
          <div className={`letter ${xPress && "pressed"}`}>
            ii (x)
          </div>
          <div className={`letter ${cPress && "pressed"}`}>
            iii (c)
          </div>
        </div>
      </div>
      <div className="bpm">
      </div>
      <div className="rightBox">
        <div className="container">
          <div className={`letter ${yPress && "pressed"}`}>
            B (y)
          </div>
          <div className={`letter ${uPress && "pressed"}`}>
            C4 (u)
          </div>
          <div className={`letter ${iPress && "pressed"}`}>
            D4 (i)
          </div>
        </div>
        <div className="container">
          <div className={`letter ${hPress && "pressed"}`}>
            F (h)
          </div>
          <div className={`letter ${jPress && "pressed"}`}>
            G (j)
          </div>
          <div className={`letter ${kPress && "pressed"}`}>
            A (k)
          </div>
        </div>
        <div className="container">
          <div className={`letter ${bPress && "pressed"}`}>
            C   (b)
          </div>
          <div className={`letter ${nPress && "pressed"}`}>
            D (n)
          </div>
          <div className={`letter ${mPress && "pressed"}`}>
            E (m)
          </div>
        </div>
      </div>
      </>
    );
  }else{
    return (
      <>
      <div className="leftBox">
        <div className="container">
          <div className={`letter_special ${qPress && "pressed"}`}>
            VII (q)
          </div>
          <div>

          </div>
          <div>

          </div>
        </div>
        <div className="container">
          <div className={`letter ${aPress && "pressed"}`}>
            IV (a)
          </div>
          <div className={`letter ${sPress && "pressed"}`}>
            v (s)
          </div>
          <div className={`letter ${dPress && "pressed"}`}>
            vi(dim) (d)
          </div>
        </div>
        <div className="container">
          <div className={`letter ${zPress && "pressed"}`}>
            i    (z)
          </div>
          <div className={`letter ${xPress && "pressed"}`}>
            ii (x)
          </div>
          <div className={`letter ${cPress && "pressed"}`}>
            III (c)
          </div>
        </div>
      </div>
      <div className="bpm">
      </div>
      <div className="rightBox">
        <div className="container">
          <div className={`letter ${yPress && "pressed"}`}>
            B (y)
          </div>
          <div className={`letter ${uPress && "pressed"}`}>
            C4 (u)
          </div>
          <div className={`letter ${iPress && "pressed"}`}>
            D4 (i)
          </div>
        </div>
        <div className="container">
          <div className={`letter ${hPress && "pressed"}`}>
            F (h)
          </div>
          <div className={`letter ${jPress && "pressed"}`}>
            G (j)
          </div>
          <div className={`letter ${kPress && "pressed"}`}>
            A (k)
          </div>
        </div>
        <div className="container">
          <div className={`letter ${bPress && "pressed"}`}>
            C   (b)
          </div>
          <div className={`letter ${nPress && "pressed"}`}>
            D (n)
          </div>
          <div className={`letter ${mPress && "pressed"}`}>
            E (m)
          </div>
        </div>
      </div>
      </>
    );
  }

}


export default Main;


// Hook
function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);

  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }

  // If released key is our target key then set to false
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return keyPressed;
}

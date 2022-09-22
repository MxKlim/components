import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import CremFace from "./Page/CreamFace";
import CremBody from "./Page/CreamBoby";
import Clearing from "./Page/Clearing";
import Scrabs from "./Page/Scrabs";
import Mask from "./Page/Mask";
import Help from "./Page/Help";
import Child from "./Page/Child";
import Hair from "./Page/Hair";
import Hands from "./Page/Hands";
import Lips from "./Page/Lips";
import Stap from "./Page/Stap";
import Summer from "./Page/Summer";
import Milo from "./Page/Milo";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<CremFace />} />
        <Route path='creamsBody' element={<CremBody />} />
        <Route path='clearing' element={<Clearing />} />
        <Route path='scrabs' element={<Scrabs />} />
        <Route path='mask' element={<Mask />} />
        <Route path='help' element={<Help />} />
        <Route path='child' element={<Child />} />
        <Route path='hair' element={<Hair />} />
        <Route path='hands' element={<Hands />} />
        <Route path='lips' element={<Lips />} />
        <Route path='stap' element={<Stap />} />
        <Route path='summer' element={<Summer />} />
        <Route path='milo' element={<Milo />} />
      </Routes>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import A1 from "./A1";


function App() {

  const [a1Kapali, a1AcKapa]=useState(false)

  function a1Kapat() {
    a1AcKapa( eskiDeger=> !eskiDeger)
  }

  return (
    <>
      <div className="container my-5 bg-info-subtle p-5">
          <button type="button"  className="btn btn-primary" onClick={a1Kapat} > Oyuna Başla 🎀</button>
        { a1Kapali && <A1 />}
      
      </div>
    </>
  );
}

export default App;

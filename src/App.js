import Main from "./Component/Main";
import Header from "./Component/Header";
import Footer from "./Component/Footer/Footer";
import { useRef } from "react";

function App() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const onRef1Click = () => {
    ref1.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onRef2Click = () => {
    ref2.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Header onMenu1Click={onRef1Click} onMenu2Click={onRef2Click} />
      <Main ref={ref1} />
      <Footer />
    </>
  );
}

export default App;

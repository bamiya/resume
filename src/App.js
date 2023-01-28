import Main from "./Component/Main";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { useMediaQuery } from "react-responsive";

function App() {
  const isPc = useMediaQuery({
    query: "(min-width: 769px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

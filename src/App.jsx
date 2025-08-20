import NavBar from "./components/NavBar";
import AnimatedRoutes from "./AnimatedRoutes";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <NavBar />
        <AnimatedRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;

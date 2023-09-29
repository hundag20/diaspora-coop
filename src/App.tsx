import { ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

interface BodyeRouteProps { // TODO: move to types
  children: ReactNode;
}

const BodyRoute = ({ children }: BodyeRouteProps) =>
  <div className='app'>
    <header>
      <Header />
    </header>
    <body>
      {children}
    </body>
    <footer>
      <Footer />
    </footer>
  </div>

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={
          <BodyRoute>
            <Home />
          </BodyRoute>
        } />
      </Routes>
    </div>
  );
}
export default App;
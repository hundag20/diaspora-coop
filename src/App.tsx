import { ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import './styles/app.scss'

interface BodyeRouteProps { // TODO: move to types
  children: ReactNode;
}

const BodyRoute = ({ children }: BodyeRouteProps) =>
  <div className='app'>
    <body>
      <Header />
      {children}
      <Footer />
    </body>
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
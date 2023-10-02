import { ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import './styles/app.scss'
import { MoneyTransfer } from "./pages/MoneyTransfer";

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
        <Route path="/money-transfer-service" element={
          <BodyRoute>
            <MoneyTransfer />
          </BodyRoute>
        } />
      </Routes>
    </div>
  );
}
export default App;
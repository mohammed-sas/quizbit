import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider, QuizboardProvider, QuizProvider } from "./context";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <AuthProvider>
      <QuizProvider>
        <QuizboardProvider>
          <App />
        </QuizboardProvider>
      </QuizProvider>
    </AuthProvider>
  </BrowserRouter>
);

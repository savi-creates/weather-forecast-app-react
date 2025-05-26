import "./App.css";
import "./index.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App d-flex flex-column align-items-center">
      <div className="container">
        <Weather defaultCity="Berlin" />
      </div>

      <footer className="footer text-center text-muted small mt-3 mb-3">
        Coded by{" "}
        <a
          href="https://github.com/savi-creates"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Savannah Andresson
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/savi-creates/weather-forecast-app-react"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}

import { useAppStore } from "../../state-management/app-store";
import "./Layouts.css";

function Header({ children }) {
  return <header className="container">{children}</header>;
}

function Main({ children }) {
  return <main className="container">{children}</main>;
}

function Footer({ children }) {
  const clicked = useAppStore((state) => state.clicked);

  return (
    <footer className="container" id={clicked ? "footer" : null}>
      {children}
    </footer>
  );
}

export { Header, Main, Footer };

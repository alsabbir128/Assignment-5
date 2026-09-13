import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StackBuilder from "../components/stack-builder";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StackBuilder />
  </StrictMode>,
);

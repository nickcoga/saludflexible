import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

function App() {
  return <h1>Hola mundo</h1>;
}

describe("App", () => {
  it("renderiza componente", () => {
    render(<App />);
    expect(screen.getByText("Hola mundo")).toBeInTheDocument();
  });
});

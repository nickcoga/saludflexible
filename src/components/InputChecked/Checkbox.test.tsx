import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  it("debe renderizar correctamente con children", () => {
    render(
      <Checkbox id="check1" checked={false} onChange={() => {}}>
        Acepto los términos
      </Checkbox>
    );

    expect(screen.getByLabelText("Acepto los términos")).toBeInTheDocument();
  });

  it("debe llamar a onChange cuando se hace clic", () => {
    const handleChange = vi.fn();

    render(
      <Checkbox id="check2" checked={false} onChange={handleChange}>
        Acepto la política
      </Checkbox>
    );

    const checkbox = screen.getByLabelText("Acepto la política");
    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});

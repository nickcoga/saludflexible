import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import InputText from "./InputText";

describe("InputText", () => {
  it("debe renderizar el input con label", () => {
    render(
      <InputText
        label="Celular"
        name="phone"
        value=""
        onChange={() => {}}
        required
        placeholder="Tu celular"
      />
    );

    expect(screen.getByLabelText("Celular")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Tu celular")).toBeInTheDocument();
  });

  it("debe permitir ingresar solo números", () => {
    const handleChange = vi.fn();

    render(<InputText name="phone" value="" onChange={handleChange} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "abc1234567" } });

    // Asegura que solo se envíen números
    expect(handleChange).toHaveBeenCalled();
    const arg = handleChange.mock.calls[0][0];
    expect(arg.target.value).toBe("1234567");
  });
});

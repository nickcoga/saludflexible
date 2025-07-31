// src/components/Form/UserForm.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // si usas React Router
import { fetchUser } from "../../services/api";
import type { User } from "../../types/user";

interface Props {
  onUserLoaded: (user: User) => void;
}

const UserForm = ({ onUserLoaded }: Props) => {
  const navigate = useNavigate();
  const [documentType, setDocumentType] = useState("DNI");
  const [documentNumber, setDocumentNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!documentNumber || !phone) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    try {
      const user = await fetchUser(); // Aquí podrías pasarle documentNumber si lo requiere
      onUserLoaded(user);
      navigate("/plans");
    } catch (err) {
      setError("Error al cargar los datos del usuario.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Creado para ti y tu familia</h2>
      <p>
        Tú eliges cuánto pagar, ingresa tus datos, cotiza y recibe nuestra
        asesoría. 100% online.
      </p>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <label>
        Tipo de documento
        <select
          value={documentType}
          onChange={(e) => setDocumentType(e.target.value)}
        >
          <option value="DNI">DNI</option>
          <option value="CE">Carnet de extranjería</option>
        </select>
      </label>

      <label>
        Nro de documento
        <input
          type="text"
          value={documentNumber}
          onChange={(e) => setDocumentNumber(e.target.value)}
        />
      </label>

      <label>
        Celular
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>

      <label>
        <input type="checkbox" required /> Acepto la Política de Privacidad
      </label>

      <label>
        <input type="checkbox" /> Acepto las comunicaciones comerciales
      </label>

      <button type="submit">Cotiza aquí</button>
    </form>
  );
};

export default UserForm;

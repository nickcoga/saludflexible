// src/components/Form/UserForm.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUser } from "../../services/api";
import type { User } from "../../types/user";
import styles from "./Form.module.scss";
import InputTextSelect from "../InputTextSelect/InputTextSelect";
import typeDocs from "../../constants/typeDocs";
import InputText from "../InputText/InputText";

interface Props {
  onUserLoaded: (user: User) => void;
}

const UserForm = ({ onUserLoaded }: Props) => {
  const navigate = useNavigate();
  const [documentType, setDocumentType] = useState("DNI");
  const [documentNumber, setDocumentNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [acceptPrivacy, setAcceptPrivacy] = useState(false);
  const [acceptMarketing, setAcceptMarketing] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!documentNumber || !phone || !acceptPrivacy) {
      setError("Todos los campos obligatorios deben completarse.");
      return;
    }

    try {
      const user = await fetchUser();
      onUserLoaded(user);
      navigate("/plans");
    } catch (err) {
      setError("Error al cargar los datos del usuario.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.userForm}>
      <p className={styles.userForm__text}>
        Tú eliges cuánto pagar, ingresa tus datos, cotiza y recibe nuestra
        asesoría. 100% online.
      </p>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <InputTextSelect
        required
        options={typeDocs}
        placeholderInput="Nro. de Documento"
        placeholderSelect="Tipo de documento"
        valueInput={documentNumber}
        valueSelect={documentType}
        nameInput="documentNumber"
        nameSelect="documentType"
        onChangeInput={(e) => setDocumentNumber(e.target.value)}
        onChangeSelect={(e) => setDocumentType(e.target.value)}
        showDefaultOption
      />

      <InputText
        required
        type="number"
        label=""
        placeholder="Celular"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <label className={styles.userForm__checkbox}>
        <input
          type="checkbox"
          checked={acceptPrivacy}
          onChange={(e) => setAcceptPrivacy(e.target.checked)}
          required
        />
        Acepto la Política de Privacidad
      </label>

      <label className={styles.userForm__checkbox}>
        <input
          type="checkbox"
          checked={acceptMarketing}
          onChange={(e) => setAcceptMarketing(e.target.checked)}
        />
        Acepto las comunicaciones comerciales
      </label>

      <button type="submit">Cotiza aquí</button>
    </form>
  );
};

export default UserForm;

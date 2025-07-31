import { useUser } from "../../contexts/UserContext";
import UserForm from "../../components/Form/UserForm";
import styles from "./Form.module.scss";

const FormPage = () => {
  const { setUser } = useUser();

  return (
    <div className={styles.container}>
      <h1>Creado para ti y tu familia</h1>
      <UserForm onUserLoaded={setUser} />
    </div>
  );
};

export default FormPage;

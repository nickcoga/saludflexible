import UserForm from '../../components/Form/UserForm';
import styles from './Form.module.scss';

const FormPage = () => {
  return (
    <div className={styles.container}>
      <h1>Creado para ti y tu familia</h1>
      <p>
        Tú eliges cuánto pagar, ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.
      </p>
      <UserForm onUserLoaded={(user) => console.log('Usuario cargado:', user)} />
    </div>
  );
};

export default FormPage;

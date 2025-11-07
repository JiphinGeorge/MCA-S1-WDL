import { useParams } from 'react-router-dom';
import styles from './UserProfile.module.css';

export default function UserProfile() {
  const { id } = useParams();

  return (
    <div className={styles.container}>
      <h2>User Profile</h2>
      <p>Viewing details for user ID: {id}</p>
    </div>
  );
}

import { Link, Outlet } from 'react-router-dom';
import styles from './Users.module.css';

export default function Users() {
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
  ];

  return (
    <div className={styles.container}>
      <h1>Users Page</h1>
      <ul className={styles.list}>
        {users.map(user => (
          <li key={user.id}>
            <Link className={styles.link} to={`${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}

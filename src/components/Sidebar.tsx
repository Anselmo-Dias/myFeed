import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";
import destaquePng from '../assets/destaques.png'
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <img
          className={styles.cover}
          src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
          alt=""
        />
        <div className={styles.profile}>
          <Avatar src="https://avatars.githubusercontent.com/u/96529532?s=400&u=78faee6d76286461b848ab25a32c94bcc84f3025&v=4" />
          <strong>Anselmo Dias</strong>
          <span>Web developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </div>
  );
}

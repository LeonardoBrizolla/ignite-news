import { Header } from "./components/Header";
import { Post } from "./Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Leonardo Brizolla"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta minus ipsa quisquam sed praesentium labore distinctio similique earum molestias iste quidem commodi quia tempore ad consectetur itaque vero, aliquid eligendi!"
          />
          <Post
            author="Leonardo Brizolla"
            content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta minus ipsa quisquam sed praesentium labore distinctio similique earum molestias iste quidem commodi quia tempore ad consectetur itaque vero, aliquid eligendi!"
          />
        </main>
      </div>
    </div>
  );
}

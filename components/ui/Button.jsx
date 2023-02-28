import Link from "next/link";
import styles from "./Button.module.css";

export default function Button(props) {
  if (props.link) {
    return (
      <Link className={styles.btn} href={props.link}>
        {props.children}
      </Link>
    );
  } else {
    return <button className={styles.btn}>{props.children}</button>;
  }
}

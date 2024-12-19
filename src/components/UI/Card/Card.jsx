import styles from "./Card.module.css";

function Card({className, children}) {
  return (
    <div className={`${styles.card} ${className}`}>{children}</div>
  );
}

export default Card;
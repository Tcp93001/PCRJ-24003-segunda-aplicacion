import Card from "../UI/Card/Card";
import Clock from "../UI/Clock/Clock";
import styles from './Public.module.css';

const Public = () => {
  return (
    <>
      <Card className={styles.public}>
        <h1>Página pública</h1>
        <Clock />
      </Card>
    </>
  )
}

export default Public;
import PropTypes from "prop-types";
import styles from "./Btn.module.css";

function Btn ({text}) {
    return <button className={styles.btn}>{text}</button>
}

Btn.propTypes = {
    text : PropTypes.string.isRequired,
};

export default Btn;
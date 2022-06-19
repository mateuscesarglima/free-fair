import { Link } from 'react-scroll'
import styles from "./LinkButton.module.css"


const LinkButton = ({ children, to, customClass }) => {
    return (
        <Link 
            className={`${styles[customClass]}`}
            to={to}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={600}>{children}
            </Link>
    )
}

export default LinkButton
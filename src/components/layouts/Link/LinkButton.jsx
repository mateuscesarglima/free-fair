import {Link, animateScroll as scroll} from 'react-scroll'

const LinkButton = ({ children, to }) => {
    return (
        <Link 
            style={{padding: "5px"}}
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
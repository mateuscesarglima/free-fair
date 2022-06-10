
const Link = ({ children, to }) => {
    return (
        <Link to={to}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={600}>{children}</Link>
    )
}

export default Link
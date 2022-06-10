
import Link from '../Link/Link'
import './Nav.css'

const Nav = () => {
  return (
    <nav className='navigation'>
      <div className="logo-box">
        <span className='logo-box-title'>Feira Livre</span>
      </div>
      <ul className='list-box'>
        <li className='list-box-item'>
          <Link to='produtos-section'>Produto</Link>
        </li>
        <li className='list-box-item'>
          <Link to='localização-section'>localização</Link>
        </li>
        <li className='list-box-item'>
          <Link to='feirantes-section'>Feirantes</Link>
        </li>
        <li className='list-box-item'>
          <Link to='depoimentos-section'>Depoimentos</Link>
        </li>
        <li className='list-box-item'>
          <Link to='sobre-mim-section'>Sobre mim</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
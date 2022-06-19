import iconImg from "../../../img/logos/carrinho.png"
import Link from '../Link/LinkButton'
import './Nav.css'

const Nav = () => {
  return (
    <nav className='navigation'>
      <div className="logo-box">
        <img src={iconImg} className="logoImg" alt="logo carrinho de compras" />
      </div>
      <ul className='list-box'>
        <li className='list-box-item'>
          <Link customClass="nav-btn" to='produtos-section'>Produtos</Link>
        </li>
        <li className='list-box-item'>
          <Link customClass="nav-btn" to='localização-section'>localização</Link>
        </li>
        <li className='list-box-item'>
          <Link customClass="nav-btn" to='feirantes-section'>Feirantes</Link>
        </li>
        <li className='list-box-item'>
          <Link customClass="nav-btn" to='depoimentos-section'>Depoimentos</Link>
        </li>
        <li className='list-box-item'>
          <Link customClass="nav-btn" to='sobre-mim-section'>Sobre mim</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
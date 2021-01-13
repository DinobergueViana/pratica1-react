import './Header.css'
import burgerButton from '../../assets/Vector.svg';

const Header = () => {
  return (
    <header>
      <div className="headerContent">
        <div>
          <span className="logo">LOVT</span>
        </div>
        <div className="logoText">
          <span>You Love,</span>
          <span> your loft!</span>
        </div>
      </div>
      <div>
        <img src={burgerButton} alt=""/>
      </div>
    </header>
  )
}

export default Header;
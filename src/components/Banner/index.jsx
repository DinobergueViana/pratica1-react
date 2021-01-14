import './Banner.css'
import arrowLeft from '../../assets/arrow-left.svg'
import arrowRight from '../../assets/arrow-right.svg'

const Banner = () => {
  return (
    <section className="banner">
      <div className="arrow">
        <img src={arrowLeft} alt=""/> 
      </div>
      {/* <img src="https://images.homify.com/c_fill,f_auto,h_500,q_auto,w_1280/v1508253587/p/photo/image/2275988/rf_interiores-7861.jpg" alt="Banner"/> */}
      <div className="arrow">
        <img src={arrowRight} alt=""/>
      </div> 
    </section>
  )
}

export default Banner;
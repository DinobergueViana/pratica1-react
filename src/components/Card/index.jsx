import './Card.css'
import Button from '../Button'

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-img">
        <img src="https://static.quizur.com/i/b/592f2baa2f94b7.84769124592f2baa0a9d62.02871434.jpg" alt=""/>
      </div>
      <div className="info">
        <div className="valor-new">
          <h3>${props.valor}</h3>
          <Button/>
        </div>
        <div className="descricao">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quibusdam error dignissimos fuga sapiente eaque fugiat saepe voluptate, laboriosam enim nemo a, soluta debitis alias voluptates et blanditiis commodi porro.
          </p>
        </div>
      </div>        
    </div> 
  )
}

export default Card;
import Banner from '../Banner'
import Card from '../Card'
import './Body.css'

const Body = () => {

  let produtos = [
    {
      id: 1,
      img: "https://www.ideiasdecor.com/wp-content/uploads/2019/02/sala-de-estar-moderna-60.jpg",
      valor: "1,200"
    },
    {
      id: 2,
      img: "https://static.quizur.com/i/b/592f2baa2f94b7.84769124592f2baa0a9d62.02871434.jpg",
      valor: "2,000"
    },
  ]
  
  function getCard(){
    return produtos.map(produto => 
      <Card key={produto.id} img={produto.img} valor={produto.valor}/>
    )
    
  }  

  return (
    <section>
      <Banner/>
      <div className="main">
        {getCard()}
      </div>
    </section>
    
  )
}

export default Body;
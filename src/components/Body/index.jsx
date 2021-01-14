import Banner from '../Banner'
import Card from '../Card'
import './Body.css'

const Body = () => {
  return (
    <section>
      <Banner/>
      <div className="main">
        <Card valor={1200}/>
        <Card valor={1200}/>
      </div>
    </section>
    
  )
}

export default Body;
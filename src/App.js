import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Items from './Components/Items'
import './index.css'
class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      orders:[],
      items: [
        {
          id: 1,
          title: 'Kakashi cup',
          img: 'kakashi.jpg',
          desc: "It is a cup of Kakshi from Naruto",
          category: 'cup',
          price: "49.90"
        },
        {
          id: 2,
          title: 'Tangiro',
          img: 'tangiro.jpg',
          desc: "It is a cup from The Demon Slayer",
          category: 'cup',
          price: "25"
        },
        {
          id: 3,
          title: 'Naruto',
          img: 'Naruto.jpg',
          desc: "It is a cup from Naruto",
          category: 'cup',
          price: "44.50"
        },
        {
          id: 4,
          title: 'Akatsuki',
          img: 'Akatsuki.jpg',
          desc: "It is a cup from Naruto",
          category: 'cup',
          price: "36.66"
        },
        {
          id: 5,
          title: 'Itachi',
          img: 'Itachi.jpg',
          desc: "It is a cup from Naruto",
          category: 'cup',
          price: "28"
        },
      ]
    }
    this.addOrder = this.addOrder.bind(this);
    this.deleteOrder=this.deleteOrder.bind(this);
  }
  render(){
  return (
    <div className='wrapper'>
         <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
         <Items items={this.state.items} onAdd={this.addOrder}/>
         <Footer />
    </div>
  )
}
deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
}
addOrder(item){
  let isInArray = false;
  this.state.orders.forEach(el =>{
    if(el.id === item.id)
    isInArray = true
})
  if(!isInArray)
this.setState({orders: [...this.state.orders, item]})
}
}
export default App;
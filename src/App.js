import React from 'react'
import Categories from './Components/Categories'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Items from './Components/Items'
import ShowFullItem from './Components/ShowFullItem'
import './index.css'
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Kakashi cup',
          img: 'kakashi.jpg',
          desc: "It is a cup of Kakshi from Naruto",
          category: 'Naruto',
          price: "49.90"
        },
        {
          id: 2,
          title: 'Tangiro',
          img: 'tangiro.jpg',
          desc: "It is a cup from The Demon Slayer",
          category: 'DS',
          price: "25"
        },
        {
          id: 3,
          title: 'Naruto',
          img: 'Naruto.jpg',
          desc: "It is a cup from Naruto",
          category: 'Naruto',
          price: "44.50"
        },
        {
          id: 4,
          title: 'Akatsuki',
          img: 'Akatsuki.jpg',
          desc: "It is a cup from Naruto",
          category: 'Naruto',
          price: "36.66"
        },
        {
          id: 5,
          title: 'Itachi',
          img: 'Itachi.jpg',
          desc: "It is a cup from Naruto",
          category: 'Naruto',
          price: "28"
        },
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items;
    this.addOrder = this.addOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }
  render() {
    return (
      <div className='wrapper'>
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory = {this.chooseCategory}/> 
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addOrder} />
        {this.state.showFullItem && <ShowFullItem onAdd={this.addOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Footer />
      </div>
    )
  }
  onShowItem(item){
    this.setState({fullItem: item})
    this.setState({
      showFullItem: !this.state.showFullItem
    })
  }
  chooseCategory(category){
    if(category==='all'){
      this.setState({currentItems:this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }
  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }
  addOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, item] })
  }
}
export default App;
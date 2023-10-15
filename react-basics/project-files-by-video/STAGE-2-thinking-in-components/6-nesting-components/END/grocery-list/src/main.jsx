import { createRoot } from 'react-dom/client';

const Header = () => {
  return (
    <header>
      <h1>Grocery List</h1>
      <span className='total-items'>Items: 1</span>
    </header>
  )
}

const Item = () => {
  return (
    <div className='item'>
      <button className='remove-item' />
      <span className='item-name'>Apples</span>
      <Counter />
    </div>
  )
}

const Counter = () => {
  return (
    <div className='quantity'>
      <span className='qty-label'>QTY</span>
      <button className='increment'>+</button>
      <button className='decrement'>-</button>
      <span className='quantity-amount'>15</span>
    </div>
  )
}

const App = () => {
  return (
    <div className='grocery-list'>
      <Header />

      {/* Grocery List */}
      <Item />
    </div>
  )
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
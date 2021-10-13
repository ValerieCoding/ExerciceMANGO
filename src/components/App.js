import Header from "./Header";
import Items from "./Items";
import { useState , useEffect} from "react"
import AddItem from "./AddItem";
import Footer from "./Footer";

const App = () => {
  const [showAddItem, setShowAddItem] = useState(false)
  const [items, setItems] = useState([])
  useEffect(()=> {
    const getItems = async () => {
      const itemsFromServer = await fetchItems()
      setItems(itemsFromServer)
    }

    getItems()
  }, [])

  const fetchItems = async () => {
    const res = await fetch('http://localhost:5000/items')
    const data = await res.json()

    return data
  }

  const addItem = async(item) => {
    const res = await fetch('http://localhost:5000/items',
    {method : 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(item),})

    const data = await res.json()

    setItems([...items, data])
  }

  return (
      <div className="container">
        <Header />
        {items.length > 0 ? (<Items items = {items}/>): 'No items to show.'}
        {showAddItem && <AddItem onAdd={addItem}/>}
        <Footer onAdd={() => setShowAddItem(!showAddItem)} showAddItem={showAddItem} />
      </div>
    
  );
}

export default App;

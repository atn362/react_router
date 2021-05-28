import React, {useState, useEffect} from 'react';
import './App.css';

function Shop() {

    useEffect(() => {
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('https://www.anapioficeandfire.com/api/books');

        const items = await data.json();
        console.log(items.items);
        setItems(items);
    }
  return (
    <div>
        <h1>Book Titles</h1>
        {items.map(item => (
            <h3>{item.name}</h3>
        ))}
     
    </div>
  );
}

export default Shop;

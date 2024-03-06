import { useState } from 'react';
import Swal from 'sweetalert2';
import Form from './Form';
import Logo from './Logo';
import PackingList from './PackingList';
import Stats from './Stats';

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearItems() {
    // Show SweetAlert confirmation dialog
    Swal.fire({
      title: 'Are you sure?',
      text: 'This action will clear all items. Do you want to continue?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, clear all items',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      // If user confirms, clear the items
      if (result.isConfirmed) {
        setItems([]); // Assuming setItems is a function to update items state
        Swal.fire('Cleared!', 'All items have been cleared.', 'success');
      }
    });
  }

  return (
    <div className='app'>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItem={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}

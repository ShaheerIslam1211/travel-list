export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className='stats'>
        <em>Start adding items on your packet list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const itemPacked = items.filter((items) => items.packed).length;
  const percentage = Math.round((itemPacked / numItems) * 100);

  return (
    <footer className='stats'>
      <em>
        {percentage === 100
          ? 'You got everything! Ready to go ✈️'
          : ` You have ${numItems} items on your list, and you already packed
        ${itemPacked} (${percentage}%) items `}
      </em>
    </footer>
  );
}

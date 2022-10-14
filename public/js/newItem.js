const newItemHandler = async (event) => {
  event.preventDefault();

  const itemName = document.querySelector('#item-name').value.trim();
  const itemDescription = document.querySelector('#item-descr').value.trim();
  console.log(itemName, itemDescription);

  const response = await fetch('/api/item', {
    method: 'POST',
    body: JSON.stringify({ name: itemName, description: itemDescription }),
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(response);

  // This will allow window to automatically refresh when we post new item
  window.location.reload();
}

document.getElementById('new-post-submit')
  .addEventListener('click' , newItemHandler);
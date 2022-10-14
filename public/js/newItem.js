const newItemHandler = async (event) => {
  event.preventDefault();

  const itemName = document.querySelector('#item-name').value.trim();
  const itemDescription = document.querySelector('#item-descr').value.trim();
  console.log(itemName, itemDescription);

  alert("Hello");
  const response = await fetch('/api/item', {
    method: 'POST',
    body: JSON.stringify({ name: itemName, description: itemDescription }),
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(response);

  
}

document.getElementById('new-post-submit')
  .addEventListener('click' , newItemHandler);
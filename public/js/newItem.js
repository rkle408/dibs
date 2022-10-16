
const newItemHandler = async (event) => {
  event.preventDefault();

  const itemName = document.querySelector('#item-name').value.trim();
  const itemDescription = document.querySelector('#item-descr').value.trim();
  const itemImage = document.querySelector('#image-upload')
  // alert("hi")
 
  

  async function fetchItems() {
    const response = await fetch('/api/item');
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    const items = await response.json();
    console.log(items)
    return items.length;
  }
 var itemCount = await fetchItems();
 itemCount++;
  // console.log("This is the number of items")
  // fetchItems().then(function (result){
  //   console.log(result)
  //   itemCount=result
  // });
  console.log(itemCount);
  // console.log(event.target.files); 
  console.log(itemName, itemDescription);
  console.log(itemImage.files[0])
  let formData = new FormData();
  formData.append('file',itemImage.files[0]);
  const response = await fetch('/api/item', {
    method: 'POST',
    body: JSON.stringify({ name: itemName, description: itemDescription }),
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(response);
  const response2 = await fetch(`/upload/${itemCount}`, {
    method: 'POST',
    body: formData
  });
  
  console.log("hit second response")

  // This will allow window to automatically refresh when we post new item
  window.location.reload();
}

document.getElementById('new-post-submit')
  .addEventListener('click' , newItemHandler);
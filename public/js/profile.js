
document.addEventListener("click", async (event)=>{
  let clicked = event.target;
  console.log("this is what i clicked");
  console.log(clicked.getAttribute("class"));
  console.log(clicked.getAttribute("id"));

  if (clicked.getAttribute("class")==="picked-up"){

      if(confirm("are you sure the item was picked up? proceeding will delete the item!")){
          const response = await fetch(`/api/item/${clicked.getAttribute("id")}`, {
          method: 'DELETE',
          body: JSON.stringify({
              id: clicked.getAttribute("id")
          }),
          headers: {
              'Content-Type': 'application/json'
                   }
                 });
    console.log("fetch test");
    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    } 
  }
}
})

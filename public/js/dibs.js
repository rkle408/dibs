document.addEventListener("click", async (event)=>{
    let clicked = event.target;
    
    console.log("this is what i clicked");
    console.log(clicked.getAttribute("class"));
    console.log(clicked.getAttribute("id"));
  
    if (clicked.getAttribute("class")==="octo-cursor mt-auto"){
  
        if(confirm("are you sure you want this item? you have one hour to pick it up!")){
            const response = await fetch(`/api/item/${clicked.getAttribute("id")}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: clicked.getAttribute("id"),
                is_dibbed: true
            }),
            headers: {
                'Content-Type': 'application/json'
                     }
                   });
      console.log("fetch test");
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        
        document.location.replace('/');
      } else {
        alert(response.statusText);
      } 
    }
  }
  })

  
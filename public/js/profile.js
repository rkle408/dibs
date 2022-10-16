let deleteBtns = document.getElementsByClassName("delete-btn");

for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener("click", async (e) => {


    //     const response = await fetch(`/api/item/${id}`, {
    //         method: 'DELETE',
    //         body: JSON.stringify({
    //             item_id: id
    //         }),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });
    //   console.log("fetch test");
    //   if (response.ok) {
    //     // If successful, redirect the browser to the profile page
    //     document.location.replace('/profile');
    //   } else {
    //     alert(response.statusText);
    //   }
    });
}
 

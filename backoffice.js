const url = "https://striveschool-api.herokuapp.com/api/movies/"

//LOAD TABLE MOVIES

function listOfFilms(films) {
    const tbody = document.querySelector(tbody);
    tbody.innerHTML = ""
    
    
        films.forEach((film) => {
          const tr = document.createElement('tr');
          
          col.innerHTML = `
                            <th scope="row">${film._id}</th>
                            <td>${film.name}</td>
                            <td>${film.description}</td>
                            <td>${film.category}</td>
                            <td><a href="${film.imageUrl}">${film.imageUrl}</a></td>
                            <td><a href="" title="${film._id}">Edit</a><br><a href="" title="${film._id}">Delete</a></td>
                      `;
          tbody.appendChild(tr);
        });
  }

//LOAD TABLE MOVIES

const getmovies = async () => {
    try{
     const response = await fetch(url + "drama", {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU5ZjRjZmY1ZjAwMTU5MGJkYjAiLCJpYXQiOjE2Mzg5Njg5OTIsImV4cCI6MTY0MDE3ODU5Mn0.GCy-MTuNh6IsfcfFG90Jt2Hw_g4dGbNBBfCDM3D9MQ0"
           
        },
    }
    );
         if (response.ok) { 
        const movies = await response.json()
        console.log(movies)
        listOfFilms(movies);
         } 
    }

        catch (err) { 
        console.error(err)
        }    
}



window.onload = async () => {
    await getmovies()
    
 };


//DELETE LINK TABLE

 const deleteMovie = async (event) => {
    
    const id = event.target.title 
    const hasAccepted = confirm("Do you really want to delete this product?")

    if (hasAccepted) {
        try {
            const response = await fetch(url + id, {
    method: 'DELETE',   
    headers:  {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU5ZjRjZmY1ZjAwMTU5MGJkYjAiLCJpYXQiOjE2Mzg5Njg5OTIsImV4cCI6MTY0MDE3ODU5Mn0.GCy-MTuNh6IsfcfFG90Jt2Hw_g4dGbNBBfCDM3D9MQ0",
            } 
    })
            if (response.ok) {
                const deletedMovie = await response.json()
                alert("Movie " + deletedMovie.name + " got deleted successfully")
                setTimeout(() => { window.location.assign("backoffice.html") }, 1000)
            }
            if (!response.ok) throw new Error("Error")
        } 
        
        
        
        catch (err) {
            alert(err)
        }
    }
}

//POST BUTTON

const postMovie = async (event) => {
    event.preventDefault()
    
    try {
    const response = await fetch(url, {
    method: 'POST',   
    body: JSON.stringify({
            name: document.getElementById("name-input").value,
            description: document.getElementById("description-input").value,
            category: document.getElementById("category-input").value,
            imageUrl: document.getElementById("image-input").value
        }),
    
    headers:  {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU5ZjRjZmY1ZjAwMTU5MGJkYjAiLCJpYXQiOjE2Mzg5Njg5OTIsImV4cCI6MTY0MDE3ODU5Mn0.GCy-MTuNh6IsfcfFG90Jt2Hw_g4dGbNBBfCDM3D9MQ0",
        "Content-Type": "application/json"
    } 
    })
    if (response.ok) {
        const serverResp = await response.json()
        alert("Product posted successfully with an id of: " + serverResp._id)
        setTimeout(() => { window.location.assign("backoffice.html") }, 1000)
    }   
    if (!response.ok) throw new Error("User Generated Error")
    } catch (err) {
        alert(err)
    }   
}


//EDIT BUTTON 

const editbutton = async (event) => {
    
    

    const id = docuemnt.getElementById("#table-id").innerHTML // split with : and 2º array 
    
    
    try {
    const response = await fetch(url + id, {
    method: 'PUT',   
    body: JSON.stringify({
            name: document.getElementById("name-input").value,
            description: document.getElementById("description-input").value,
            category: document.getElementById("category-input").value,
            imageUrl: document.getElementById("image-input").value
        }),
    
    headers:  {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU5ZjRjZmY1ZjAwMTU5MGJkYjAiLCJpYXQiOjE2Mzg5Njg5OTIsImV4cCI6MTY0MDE3ODU5Mn0.GCy-MTuNh6IsfcfFG90Jt2Hw_g4dGbNBBfCDM3D9MQ0",
        "Content-Type": "application/json"
    } 
    })
    if (response.ok) {
        const serverResp = await response.json()
        alert("Edit done successfully")
        setTimeout(() => { window.location.assign("backoffice.html") }, 1000)
    }   
    if (!response.ok) throw new Error("User Generated Error")
    } catch (err) {
        alert(err)
    }   
}

//EDIT LINK TABLE

const editMovie = async (event) => {
    const id = event.target.title 
    const response = await fetch(url + id, {
        headers:  {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU5ZjRjZmY1ZjAwMTU5MGJkYjAiLCJpYXQiOjE2Mzg5Njg5OTIsImV4cCI6MTY0MDE3ODU5Mn0.GCy-MTuNh6IsfcfFG90Jt2Hw_g4dGbNBBfCDM3D9MQ0",
            
        }
    }) 
    
     
    const productDetails = getElementById("#product-details")
        //FILM HAS TO BE THE ONE ON THE ROW 
        if (response.ok) {
        const film = await response.json()
        
        
        productDetails.innerHTML= `
        <div class="input-box">
                <span class="details">Name</span>
                <input id="name-input" type="text" placeholder="name..."  value="${film.name}" required>
              </div>
              <div class="input-box">
                <span class="details">Description</span>
                <input id="description-input" type="text" placeholder="description..."  value="${film.description}" required>
              </div>
              <div class="input-box">
                <span class="details">Category</span>
                <input id="category-input" type="text" placeholder="category..." value="${film.category}" required>
              </div>
              <div class="input-box">
                <span class="details">Image</span>
                <input id="image-input" type="text" placeholder="image url..." value="${film.imageUrl}" required>
              </div>
              <div class="input-box">
                <p id="movie-id">Id:<span id="table-id">${id}</span></p>
              </div>
              `
        
        }
        console.log(url + id)
}
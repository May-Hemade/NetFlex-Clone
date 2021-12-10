function displayDramaMovies(movies) {
    const row = document.querySelector("#first-row");
    row.innerHTML = ""
    const title = document.querySelector("#first-movie-category")
    title.innerHTML = "DRAMA"
        movies.forEach((movie) => {
          const col = document.createElement("div");
          col.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-2", "px-1", "mb-1", "mb-lg-0")
          
          col.innerHTML = `
                        <img src="${movie.imageUrl}" class="img-fluid w-70">
                        <span class="badge badge-danger" id="badge">&nbsp;&nbsp;&nbsp;${movie.name}&nbsp;&nbsp;&nbsp;</span>
                      `;
          row.appendChild(col);
        });
  }


  function displayActionMovies(movies) {
    const row = document.querySelector("#second-row");
    row.innerHTML = ""
    const title = document.querySelector("#second-movie-category")
    title.innerHTML = "ACTION"
        movies.forEach((movie) => {
          const col = document.createElement("div");
          col.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-2", "px-1", "mb-1", "mb-lg-0")
          col.innerHTML = `
                        <img src="${movie.imageUrl}" class="img-fluid w-70">
                        <span class="badge badge-danger" id="badge">&nbsp;&nbsp;&nbsp;${movie.name}&nbsp;&nbsp;&nbsp;</span>
                      `;
          row.appendChild(col);
        });
  }

  function displayComedyMovies(movies) {
    const row = document.querySelector("#third-row");
    row.innerHTML = ""
    const title = document.querySelector("#third-movie-category")
    title.innerHTML = "COMEDY"
        movies.forEach((movie) => {
          const col = document.createElement("div");
          col.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-2", "px-1", "mb-1", "mb-lg-0")
          col.innerHTML = `
                        <img src="${movie.imageUrl}" class="img-fluid w-70">
                        <span class="badge badge-danger" id="badge">&nbsp;&nbsp;&nbsp;${movie.name}&nbsp;&nbsp;&nbsp;</span>
                      `;
          row.appendChild(col);
        });
  }





const getmovies = async () => {
    try{
     const response = await fetch("https://striveschool-api.herokuapp.com/api/movies/drama", {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU5ZjRjZmY1ZjAwMTU5MGJkYjAiLCJpYXQiOjE2Mzg5Njg5OTIsImV4cCI6MTY0MDE3ODU5Mn0.GCy-MTuNh6IsfcfFG90Jt2Hw_g4dGbNBBfCDM3D9MQ0"
           
        },
    }
    );
         if (response.ok) { 
        const movies = await response.json()
        console.log(movies)
        displayDramaMovies(movies);
         } 
    }
      catch (err) { 
        console.error(err)
    }
    try{
        const response = await fetch("https://striveschool-api.herokuapp.com/api/movies/action", {
           headers: {
               "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU5ZjRjZmY1ZjAwMTU5MGJkYjAiLCJpYXQiOjE2Mzg5Njg5OTIsImV4cCI6MTY0MDE3ODU5Mn0.GCy-MTuNh6IsfcfFG90Jt2Hw_g4dGbNBBfCDM3D9MQ0"
              
           },
       }
       );
            if (response.ok) { 
           const movies = await response.json()
           console.log(movies)
           displayActionMovies(movies);
            } 
       }
         catch (err) { 
           console.error(err)
       }
       try{
        const response = await fetch("https://striveschool-api.herokuapp.com/api/movies/comedy", {
           headers: {
               "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYWU5ZjRjZmY1ZjAwMTU5MGJkYjAiLCJpYXQiOjE2Mzg5Njg5OTIsImV4cCI6MTY0MDE3ODU5Mn0.GCy-MTuNh6IsfcfFG90Jt2Hw_g4dGbNBBfCDM3D9MQ0"
              
           },
       }
       );
            if (response.ok) { 
           const movies = await response.json()
           console.log(movies)
           displayComedyMovies(movies);
            } 
       }
         catch (err) { 
           console.error(err)
       }
}
  
  
window.onload = async () => {
   await getmovies()
   
};


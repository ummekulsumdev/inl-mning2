
let movies = [
    {
        title: "The Avengers",
        category: "Action",
        year: 2012,
        image: "avengers.jpg"
    },
    {
        title: "Interstellar",
        category: "Sci-fi",
        year: 2014,
        image: "Interstellar.jpg"
    },
    {
        title: "Mr. Bean's Holiday",
        category: "Comedy",
        year: 2007,
        image: "holiday.jpg"
    },
    {
        title: "The Notebook",
        category: "Drama",
        year: 2004,
        image: "notebook.jpg"
    },
    {
        title: "The Dark Knight",
        category: "Action",
        year: 2008,
        image: "dark knight action.jpg"
    },
    {
        title: "The Martian",
        category: "Sci-fi",
        year: 2015,
        image: "martian.jpg"
    }
];







// Filtrerar filmer efter kategori

let movieList = document.querySelector("#movie-list");

let categoryFilter = document.querySelector("#category-filter");




let getCategoryFilter = () => {


    let categoryInfo = movies.filter(m => categoryFilter.value === "all" || m.category.toLocaleLowerCase().includes(categoryFilter.value.toLocaleLowerCase()));


    movieList.innerHTML = "";




    // Visar "No movies available" om inga filmer finns


    if (categoryInfo.length === 0) {

        movieList.innerHTML = "<p>No movies available.</p>";

        return;
    };





    // Visar varje filtrerad films titel, kategori, bild och år


    categoryInfo.forEach(c => {


        let card = document.createElement("div");

        card.innerHTML = ` 
        
        <img src = "${c.image}">
        
        <h3>${c.title}</h3> 
        
        <p>${c.category}</p>
        
        <p>${c.year}</p>
        
        `;


        

        // Lägger till en ta bort-knapp här...


        let deleteBtn = document.createElement("button");
        
        deleteBtn.textContent = "Remove";

        deleteBtn.addEventListener("click", () => {



            // Tar bort filmen och uppdaterar listan


            movies = movies.filter(m => m != c);


            getCategoryFilter()

            
        })




        card.append(deleteBtn);

        movieList.append(card);


    })

}


categoryFilter.addEventListener("change", () => {


    getCategoryFilter();


})


getCategoryFilter();










// Jobbar med formulärets submit


let movieForm = document.querySelector("#movie-form");

let movieTitle = document.querySelector("#movie-title");

let movieCategory = document.getElementById("movie-category");

let movieYear = document.querySelector("#movie-year");



let getMovieForm = () => {


    let title = movieTitle.value;
    let category = movieCategory.value;
    let year = Number(movieYear.value);


    let newMovie = {


        title: title,
        category: category,
        year: year,
        image: "addNewMovie.jpg"


    }


    movies.push(newMovie);



    // Tömmer formuläret och uppdaterar listan

    movieForm.reset();

    getCategoryFilter();

}


movieForm.addEventListener("submit", (event) => {

    event.preventDefault();

    getMovieForm();

});








// Öppnar och stänger menyn i mobil

let menuToggle = document.querySelector("#menu-toggle");

let navMenu = document.querySelector("#nav-menu");

menuToggle.addEventListener("click", () => {


    // När man trycker på menu-toggle visas eller döljs nav-menu

    navMenu.classList.toggle("show");

    
});
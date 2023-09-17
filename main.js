document.getElementById("form").addEventListener("submit",getSearchInput);

function getSearchInput(event){
    event.preventDefault();
    let apiKey = document.getElementById("api-search").value ;
    let movieName = document.getElementById("movie-search").value;
    fetchMovie(apiKey,movieName);
}

async function fetchMovie(apiKey,movieName){
    let url = `https://www.omdbapi.com/?s=${movieName}&apikey=${apiKey}`
    let loader = document.getElementsByClassName("loader")[0];
    loader.style.display="block";
    try{
        const response = await fetch(url);
        const result = await response.json();

        if(result.Response){
            let arr = result.Search;
            let movieContainer= document.getElementsByClassName("movie-container")[0];
            movieContainer.innerHTML="";
            arr.forEach(element => {
            let movieCart = document.createElement("div");

            movieCart.className="movie-cart";
            movieCart.innerHTML=`<img src="${element.Poster}" alt="poster">
            <h3 class="title">${element.Title}</h3>
            <p class="year">${element.Year}</p>
            <a href="https://www.imdb.com/title/${element.imdbID}" class="more-details" target="_blank">More details...</a>`;
            movieContainer.appendChild(movieCart);
            });
            loader.style.display="none";
        }else{
            loader.style.display="block";
            alert("No results Found!!");
        }


    }
    catch(error){
        console.log("Error fetching data: ",error);
    }
}
    
















// https://www.omdbapi.com/?s=sonu&apikey=7d66ba66

// {
//     "Search": [
//         {
//             "Title": "Sonu Ke Titu Ki Sweety",
//             "Year": "2018",
//             "imdbID": "tt7581902",
//             "Type": "movie",
//             "Poster": "https://m.media-amazon.com/images/M/MV5BYTYxNGE5MTgtN2YxYS00ODYyLWE1YzQtYzNlMzAyMTBlMWZhXkEyXkFqcGdeQXVyMzcwOTk0MzU@._V1_SX300.jpg"
//         },
//         {
//             "Title": "Sonu Tane Mara Par Bharoso Nai Ke",
//             "Year": "2022",
//             "imdbID": "tt20204672",
//             "Type": "movie",
//             "Poster": "https://m.media-amazon.com/images/M/MV5BYmE4YjdmZjctYmE3OC00NzYzLTliYzMtMzZiNzAzNTUxMDM1XkEyXkFqcGdeQXVyMjMwODI3NDE@._V1_SX300.jpg"
//         },
//         {
//             "Title": "Gecenin Sonu",
//             "Year": "1983",
//             "imdbID": "tt2177559",
//             "Type": "movie",
//             "Poster": "https://m.media-amazon.com/images/M/MV5BNzY5NmJmNjgtYWFlYi00YmUwLTg5NjctNTMwMWJkMDIxMTVlXkEyXkFqcGdeQXVyNjYxNTg2NjE@._V1_SX300.jpg"
//         },
//         {
//             "Title": "Söhretin Sonu",
//             "Year": "1981",
//             "imdbID": "tt0489881",
//             "Type": "movie",
//             "Poster": "https://m.media-amazon.com/images/M/MV5BYjQxMDA4ZjYtMzA5ZC00ZjEzLTliMWUtZGI3OWZiOTViZDBhXkEyXkFqcGdeQXVyNDM2MzgwMTA@._V1_SX300.jpg"
//         },
//         {
//             "Title": "Kabadayinin Sonu",
//             "Year": "1973",
//             "imdbID": "tt1808222",
//             "Type": "movie",
//             "Poster": "https://m.media-amazon.com/images/M/MV5BYTQ0NzMzNjEtOTFkMS00ZmQwLThmYjUtYTAxNWYwYWJiNGY3L2ltYWdlXkEyXkFqcGdeQXVyNjkzNDQ5MTg@._V1_SX300.jpg"
//         },
//         {
//             "Title": "Evren'in Sonu",
//             "Year": "2012",
//             "imdbID": "tt2391032",
//             "Type": "movie",
//             "Poster": "https://m.media-amazon.com/images/M/MV5BODE4NzczYzYtM2FjMy00MGRhLWE4ZDMtZGYzN2M2MmVmZTgwXkEyXkFqcGdeQXVyNTE3NDg0Njk@._V1_SX300.jpg"
//         },
//         {
//             "Title": "Hafta sonu tatili",
//             "Year": "2014",
//             "imdbID": "tt4057454",
//             "Type": "movie",
//             "Poster": "N/A"
//         },
//         {
//             "Title": "Filmin Sonu Guzel Bitecek",
//             "Year": "2015",
//             "imdbID": "tt7306908",
//             "Type": "movie",
//             "Poster": "https://m.media-amazon.com/images/M/MV5BNGY0NTMzMjQtNzhiOS00MDRkLWE1MDMtNjE0MzQ4Mjk3NDE4XkEyXkFqcGdeQXVyNzA0NDgxNjQ@._V1_SX300.jpg"
//         },
//         {
//             "Title": "Harman Sonu",
//             "Year": "1974",
//             "imdbID": "tt7509000",
//             "Type": "movie",
//             "Poster": "N/A"
//         },
//         {
//             "Title": "Harman sonu",
//             "Year": "1981",
//             "imdbID": "tt0490593",
//             "Type": "movie",
//             "Poster": "N/A"
//         }
//     ],
//     "totalResults": "21",
//     "Response": "True"
// }





// http://www.omdbapi.com/?i=tt3896198&apikey=7d66ba66

// {
//     "Title": "Guardians of the Galaxy Vol. 2",
//     "Year": "2017",
//     "Rated": "PG-13",
//     "Released": "05 May 2017",
//     "Runtime": "136 min",
//     "Genre": "Action, Adventure, Comedy",
//     "Director": "James Gunn",
//     "Writer": "James Gunn, Dan Abnett, Andy Lanning",
//     "Actors": "Chris Pratt, Zoe Saldana, Dave Bautista",
//     "Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
//     "Language": "English",
//     "Country": "United States",
//     "Awards": "Nominated for 1 Oscar. 15 wins & 60 nominations total",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
//     "Ratings": [
//         {
//             "Source": "Internet Movie Database",
//             "Value": "7.6/10"
//         },
//         {
//             "Source": "Rotten Tomatoes",
//             "Value": "85%"
//         },
//         {
//             "Source": "Metacritic",
//             "Value": "67/100"
//         }
//     ],
//     "Metascore": "67",
//     "imdbRating": "7.6",
//     "imdbVotes": "732,300",
//     "imdbID": "tt3896198",
//     "Type": "movie",
//     "DVD": "10 Jul 2017",
//     "BoxOffice": "$389,813,101",
//     "Production": "N/A",
//     "Website": "N/A",
//     "Response": "True"
// }
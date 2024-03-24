import { useEffect, useState } from "react"
const Movies = () => {

    const[movies, setMoviesData] = useState([]);
    useEffect(() => {
        let API_key = "7722ae9b";
        fetch(`http://localhost:8082/loadMoviesBySearch?searchTerm=${searchTerm}&apiKey=${API_Key}`)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error while loading Movies from WebService:', error))

    },[])

    return(
        <div></div>
    )
}
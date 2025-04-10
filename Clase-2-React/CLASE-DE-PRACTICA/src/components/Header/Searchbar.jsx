import { Link } from "react-router-dom";

export function Searchbar () {

    return(
        <div className="contain">
            <input
                type="text"
                placeholder="Search"
                className="searchbar-input"
            />
            <Link to={"/content/hola"}>Ir al Contenido</Link>
        </div>
    )
}
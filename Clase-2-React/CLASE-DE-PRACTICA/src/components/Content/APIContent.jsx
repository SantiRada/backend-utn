import { useState, useEffect } from 'react';

export function APIContent () {

    let url = "https://pokeapi.co/api/v2/pokemon/1";

    let [data, setData] = useState({});
    let [loading, setLoading] = useState(true);

    let CallAPI = async () => {
        try{
            setLoading(true);
            
            let response = await fetch(url);
            let data = await response.json();

            setData(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
            
    }

    useEffect(() => CallAPI(), []);

    return (
        <>
        { loading ? <h1>Cargando...</h1> :
            Object.keys(data).length > 0 &&
            <div>
                <h1>{data.forms[0].name}</h1>
            </div>
        }
        </>
    )
}
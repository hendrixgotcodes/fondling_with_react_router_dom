import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

function Index(){

    useEffect(()=>{

        fetchApi();

    },[])

    const [cosmetics, setCosmetics] = useState({
        data: {
            items: []
        }
    });

    const fetchApi = async ()=>{

        const apis = await fetch("https://fortnite-api.com/v2/cosmetics/br/new");

        const items = await apis.json();

        console.log(items);
        
        setCosmetics(items);
    }

    return(

        <div className="mainBody">
           
           {
             cosmetics.data.items.map(item=>(
               <h1 key={item.id}>
                    <Link to={`/${item.id}`}>
                        {item.name}
                    </Link>
                </h1>
             ))
            }

        </div>

    )

}

export default Index;
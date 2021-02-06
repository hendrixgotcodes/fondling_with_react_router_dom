import {useState, useEffect} from 'react';

function ItemDetail({match}){

    useEffect(()=>{

        fetchApi();

        console.log(match);

    },[])

    const [cosmetic, setCosmetic] = useState({
        data: {
            images: {}
        }
    });

    const fetchApi = async ()=>{

        const apis = await fetch(`https://fortnite-api.com/v2/cosmetics/br/${match.params.id}`);

        const items = await apis.json();

        console.log(items);
        
        setCosmetic(items);
    }

    return(

        <div className="mainBody">
           
           {
             <h1 key={cosmetic.data.id}>{cosmetic.data.name}</h1>
            }
            {
             <img src={cosmetic.data.images.icon}/>
            }

        </div>

    )

}
export default ItemDetail;

export const getGifs = async(category)=>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=20&api_key=nUCOohIeMKR87Z08fqzx3E01vSnwE7Qk`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) =>{        
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    
    return gifs;
}
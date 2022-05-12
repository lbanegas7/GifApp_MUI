import React from 'react';
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = (category) => {

    const [state, setState] = React.useState({
        data: [],
        loading: true
    })

    
    React.useEffect(() => {
        setState({data:[],loading:true})
        
        getGifs(category).then(imgs => {
            setTimeout(() => {
                setState({
                    data: imgs,
                    loading: false
                })
            }, 2000)
        })

    }, [category])

    return state;
}
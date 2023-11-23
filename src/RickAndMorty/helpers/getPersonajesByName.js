import { useFetch } from "../../hooks/useFetch";

export const getPersonajesByName = (name = '') => {
    // console.log(name);
    const {data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/?name=${name}`);

    name = name.toLocaleLowerCase().trim();
    if(name.length === 0) return [];

    console.log(name);
    if(!!data == false) return [];
    if(!!data.results == false) return [];
    
    // console.log(!!data.results);
    if(data.results[0].name.toLocaleLowerCase().includes(name) == false) return [];
    
    // console.log(data.results[0]);
    // console.log(data.results[0].name.toLocaleLowerCase().includes(name));
    return data.results

}

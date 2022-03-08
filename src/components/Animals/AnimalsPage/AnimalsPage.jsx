// Function imports
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// React components
import AnimalCard from '../AnimalCard/AnimalCard';
import SearchBar from '../../SearchBar/SearchBar'

function AnimalsPage() {

    // Dispatch hook, store access
    const dispatch = useDispatch();
    const animals = useSelector(store => store.animals);

    useEffect(() => {
        dispatch({ type: 'FETCH_ANIMALS' });
    }, []);


    return(
        <>
        <SearchBar />
        {Array.isArray(animals) ?
            animals.map( animal => (
            <AnimalCard animal={animal} />
        )) : <p>Loading...</p>}
        </>
    )
}

export default AnimalsPage;
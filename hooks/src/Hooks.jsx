import React from 'react'
import { useFetch } from './hooks/useFetch'
import { useCounter } from './hooks/useCounter';

export const Hooks = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, error } = useFetch(`https://anapioficeandfire.com/api/houses/${counter}`);
    return (
        <>
            <h1>Universe of Ice and Fire</h1>
            <h3>API test</h3>
            <hr />
            {
                isLoading
                    ? (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>
                    ) : (
                        <>
                            < div className='alert alert-primary text-center'>
                                {data.name}
                            </div >

                            < div className='alert alert-success text-center'>
                                {data.coatOfArms}
                            </div >

                        </>
                    )
            }

            <button
                className='btn btn-primary'
                onClick={() => increment(1)}
            >
                Next
            </button>

        </>
    )
}

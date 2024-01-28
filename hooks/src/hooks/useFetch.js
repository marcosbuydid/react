import { useState, useEffect } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null,
    })

    const fetchURL = async () => {
        setState({
            ...state,
            isLoading: true,
        });

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        setState({
            data,
            isLoading: false,
            error: null
        });
    }

    useEffect(() => {
        fetchURL();
    }, [url])

    return {
        data: state.data,
        isLoading: state.isLoading,
        error: state.error,
    }
}

import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();


    //when clicked all text writed 
    //on the input form is selected
    const onClick = () => {
        inputRef.current.select();
    }
    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={inputRef}
                type="text"
                placeholder="Insert your name"
                className="form-control"
            />

            <button
                className="btn btn-primary mt-2"
                onClick={onClick}
            >
                Set Focus
            </button>
        </>
    )
}

import { memo } from "react"

//memo only render the component when any
//of its properties change.
//(value is one property in this example)

export const Small = memo(({ value }) => {
    console.log('Small component rendered again');
    return (
        <small>{value}</small>
    )
})

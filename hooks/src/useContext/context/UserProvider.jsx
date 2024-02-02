import { UserContext } from "./UserContext"

const sampleUser = {
    id: 364757,
    name: 'Marcos Buydid',
    email: 'sample@marcos.com'
}

export const UserProvider = ({ children }) => {
    return (

        /*Any component could get the information
        * of this sample user, consume it or use
        *in any page provided by the context
        */
        <UserContext.Provider value={{ user: sampleUser }}>
            {children}
        </UserContext.Provider>
    )
}

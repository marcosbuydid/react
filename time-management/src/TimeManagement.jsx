import { BrowserRouter } from "react-router-dom"
import { RouteManager } from "./router/RouteManager"
import { Provider } from "react-redux"
import { store } from "./store/store"

export const TimeManagement = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <RouteManager />
            </BrowserRouter>
        </Provider>

    )
}

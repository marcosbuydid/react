import { useDispatch, useSelector } from "react-redux"
import managementApi from "../api/managementApi";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/auth/authSlice";

export const useAuthStore = () => {

    const { loginStatus, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const login = async ({ email, password }) => {
        dispatch(onChecking());
        try {
            const { data } = await managementApi.post('/auth/login', { email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('tokenIssueDate', new Date().getTime());
            localStorage.setItem('loggedUser', data.name);
            dispatch(onLogin({ name: data.name, uid: data.uid }));
        } catch (error) {
            dispatch(onLogout('Invalid Credentials'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }

    const register = async ({ name, email, password }) => {
        dispatch(onChecking());
        try {
            const { data } = await managementApi.post('/auth/signup', { name, email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('tokenIssueDate', new Date().getTime());
            localStorage.setItem('loggedUser', data.name);
            dispatch(onLogin({ name: data.name, uid: data.uid }));
        } catch (error) {
            dispatch(onLogout(error.response.data?.msg || 'Invalid data or missing fields'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }

    const checkAuthToken = async () => {

        const token = localStorage.getItem('token');

        if (token === null) {
            return dispatch(onLogout());
        }

        try {
            const tokenIssueDate = localStorage.getItem('tokenIssueDate');
            const actualDateTime = new Date().getTime();
            const difference = Math.abs(actualDateTime - tokenIssueDate);
            const differenceInMinutes = (difference / (1000 * 60)).toFixed(1);

            if (differenceInMinutes <= 119) {
                dispatch(onLogin());
            }
            else {
                const { data } = await managementApi.get('auth/refresh');
                localStorage.setItem('token', data.token);
                localStorage.setItem('tokenIssueDate', new Date().getTime());
                dispatch(onLogin({ name: data.name, uid: data.uid }));
            }

        } catch (error) {
            console.log(error)
            localStorage.clear();
            dispatch(onLogout());
        }
    }

    const logout = () => {
        localStorage.clear();
        dispatch(onLogout());
    }


    return {
        loginStatus,
        user,
        errorMessage,

        login,
        register,
        checkAuthToken,
        logout
    }
}
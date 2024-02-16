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
            dispatch(onLogin({ name: data.name, uid: data.uid }));
        } catch (error) {
            dispatch(onLogout('Invalid Credentials'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }

    return {
        loginStatus,
        user,
        errorMessage,

        login,
    }
}
import { Routes, Route, Navigate } from 'react-router-dom'
import { SignInPage } from '../auth/pages/signin/SignInPage';
import { ManagementPage } from '../management/pages/ManagementPage';
import { SignUpPage } from '../signup/pages/SignUpPage';
import { useAuthStore } from '../hooks/useAuthStore';
import { useEffect } from 'react';

export const RouteManager = () => {

    const { loginStatus, checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, []);

    if (loginStatus === 'checking') {
        return (
            <div className="vh-100 d-flex justify-content-center align-items-center">
                <div className="spinner-border text-info" role="status" style={{ width: 100, height: 100 }}>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <Routes>
            {
                (loginStatus === 'not-authenticated')
                    ? (
                        <>
                            <Route path="/auth/*" element={<SignInPage />} />
                            <Route path="/*" element={<Navigate to="/auth/signin" />} />
                            <Route path="/signup" element={<SignUpPage />} />
                        </>
                    )
                    : (
                        <>
                            <Route path="/" element={<ManagementPage />} />
                            <Route path="/*" element={<Navigate to="/" />} />
                        </>
                    )
            }
        </Routes>
    )
}

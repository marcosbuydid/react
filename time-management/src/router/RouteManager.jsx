import { Routes, Route, Navigate } from 'react-router-dom'
import { SignInPage } from '../auth/pages/signin/SignInPage';
import { ManagementPage } from '../management/pages/ManagementPage';
import { SignUpPage } from '../signup/pages/SignUpPage';

export const RouteManager = () => {

    const authStatus = 'not-authenticated';

    return (
        <Routes>
            {
                (authStatus != 'not-authenticated')
                    ? <Route path="/auth/*" element={<SignInPage />} />
                    : <Route path="/*" element={<ManagementPage />} />
            }
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/*" element={<Navigate to="/auth/signin" />} />

        </Routes>
    )
}

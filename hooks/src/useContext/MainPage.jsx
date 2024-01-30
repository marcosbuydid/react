import { Link, Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { AboutPage } from './AboutPage';
import { NotFoundPage } from "./NotFoundPage";
import { Navbar } from "./Navbar";

export const MainPage = () => {

    return (
        <>
            <Navbar />
            <hr />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />

                <Route path="/*" element={<NotFoundPage />} />

                {/* Alternative to redirect to specific page */}
                {/* <Route path="/*" element={<Navigate to="/about" />} /> */}
            </Routes>
        </>
    )
}
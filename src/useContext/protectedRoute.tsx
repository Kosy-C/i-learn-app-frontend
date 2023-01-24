import React from "react";
import { useLocation, Navigate } from "react-router-dom";

interface Props {
	children: React.ReactNode;
}

export const ProtectedRoute: React.FC<Props> = ({ children }) => {
	const location = useLocation();
	const isAuthenticated = localStorage.getItem("signature");
	const userType = localStorage.getItem("userType");
	if (
		isAuthenticated?.length !== 0 &&
		(userType === "Tutor" || userType === "Student")
	) {
		return <React.Fragment>{children}</React.Fragment>;
	}
	return <Navigate to="/login" state={{ from: location }} />;
};

export const ProtectedRouteTutor: React.FC<Props> = ({ children }) => {
	const location = useLocation();
	const isAuthenticated = localStorage.getItem("signature");
	const userType = localStorage.getItem("userType");

	if (isAuthenticated?.length !== 0 && userType === "Tutor") {
		return <React.Fragment>{children}</React.Fragment>;
	}
	return <Navigate to="/login" state={{ from: location }} />;
};

export const ProtectedRouteStudent: React.FC<Props> = ({ children }) => {
	const location = useLocation();
	const isAuthenticated = localStorage.getItem("signature");
	const userType = localStorage.getItem("userType");

	if (isAuthenticated?.length !== 0 && userType === "Student") {
		return <React.Fragment>{children}</React.Fragment>;
	}
	return <Navigate to="/login" state={{ from: location }} />;
};

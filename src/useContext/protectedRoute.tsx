import React from "react";
import { useLocation, Navigate } from "react-router-dom";

interface Props {
	children: React.ReactNode;
}

export const ProtectedRoute: React.FC<Props> = ({ children }) => {
	const location = useLocation();
	const isAuthenticated = localStorage.getItem("signature");
	const userType = localStorage.getItem("user");

	if (
		isAuthenticated == null ||
		userType === "Tutor" ||
		userType === "Student"
	) {
		return <Navigate to="/login" state={{ from: location }} />;
	}
	return <React.Fragment>{children}</React.Fragment>;
};

export const ProtectedRouteTutor: React.FC<Props> = ({ children }) => {
	const location = useLocation();
	const isAuthenticated = localStorage.getItem("signature");
	const userType = localStorage.getItem("user");

	if (isAuthenticated == null || userType === "Student") {
		return <Navigate to="/login" state={{ from: location }} />;
	}
	return <React.Fragment>{children}</React.Fragment>;
};

export const ProtectedRouteStudent: React.FC<Props> = ({ children }) => {
	const location = useLocation();
	const isAuthenticated = localStorage.getItem("signature");
	const userType = localStorage.getItem("user");

	if (isAuthenticated == null || userType === "Tutor") {
		return <Navigate to="/login" state={{ from: location }} />;
	}
	return <React.Fragment>{children}</React.Fragment>;
};

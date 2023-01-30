/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useState, useEffect } from "react";
import { useLocation, Navigate } from "react-router-dom";

interface Props {
	children: React.ReactNode;
}

export const ProtectedRoute: React.FC<Props> = ({ children }) => {
	const location = useLocation();
	const [redirectUrl, setRedirectUrl] = useState("");

	useEffect(() => {
		const isAuthenticated = localStorage.getItem("signature");
		const userType = localStorage.getItem("userType");

		if (
			isAuthenticated?.length !== 0 &&
			(userType === "Tutor" || userType === "Student")
		) {
			setRedirectUrl("");
			return;
		}

		// setRedirectUrl(state);
		setRedirectUrl("/login");
	}, [location]);

	if (redirectUrl) {
		return <Navigate to={redirectUrl} />;
	}
	return <React.Fragment>{children}</React.Fragment>;
};

export const ProtectedRouteTutor: React.FC<Props> = ({ children }) => {
	const location = useLocation();
	const [redirectUrl, setRedirectUrl] = useState("");

	useEffect(() => {
		const isAuthenticated = localStorage.getItem("signature");
		const userType = localStorage.getItem("userType");

		if (isAuthenticated?.length !== 0 && userType === "Tutor") {
			setRedirectUrl("");
			return;
		}

		// setRedirectUrl(location.pathname);
		setRedirectUrl("/login");
	}, [location]);

	if (redirectUrl) {
		return <Navigate to={redirectUrl} />;
	}
	return <React.Fragment>{children}</React.Fragment>;
};

export const ProtectedRouteStudent: React.FC<Props> = ({ children }) => {
	const location = useLocation();
	const [redirectUrl, setRedirectUrl] = useState("");

	useEffect(() => {
		const isAuthenticated = localStorage.getItem("signature");
		const userType = localStorage.getItem("userType");

		if (isAuthenticated?.length !== 0 && userType === "Student") {
			setRedirectUrl("");
			return;
		}

		// setRedirectUrl(location.pathname);
		setRedirectUrl("/login");
	}, [location]);

	if (redirectUrl) {
		return <Navigate to={redirectUrl} />;
	}
	return <React.Fragment>{children}</React.Fragment>;
};

// import React, { useEffect } from "react";
// import { useLocation, Navigate } from "react-router-dom";

// interface Props {
// 	children: React.ReactNode;
// }

// export const ProtectedRouteStudent: React.FC<Props> = ({ children }) => {
// 	const location = useLocation();

// 	const isAuthenticated = localStorage.getItem("signature");
// 	const userType = localStorage.getItem("userType");

// 	useEffect(() => {
// 		if (isAuthenticated?.length !== 0) {
// 			localStorage.setItem("redirectUrl", location.pathname);
// 		}
// 	}, [isAuthenticated, location.pathname]);

// 	if (isAuthenticated?.length !== 0 && userType === "Student") {
// 		return <React.Fragment>{children}</React.Fragment>;
// 	}

// 	return (
// 		<Navigate
// 			to={{ pathname: "/login", state: { redirectUrl: location.pathname } }}
// 		/>
// 	);
// };

// export const ProtectedRoute: React.FC<Props> = ({ children }) => {
// 	const location = useLocation();

// 	const isAuthenticated = localStorage.getItem("signature");
// 	const userType = localStorage.getItem("userType");

// 	useEffect(() => {
// 		if (isAuthenticated?.length !== 0) {
// 			localStorage.setItem("redirectUrl", location.pathname);
// 		}
// 	}, [isAuthenticated, location.pathname]);

// 	if (
// 		isAuthenticated?.length !== 0 &&
// 		(userType === "Tutor" || userType === "Student")
// 	) {
// 		return <React.Fragment>{children}</React.Fragment>;
// 	}

// 	return (
// 		<Navigate
// 			to={{ pathname: "/login", state: { redirectUrl: location.pathname } }}
// 		/>
// 	);
// };

// export const ProtectedRoute: React.FC<Props> = ({ children }) => {
// 	const location = useLocation();

// 	const isAuthenticated = localStorage.getItem("signature");
// 	const userType = localStorage.getItem("userType");

// 	if (
// 		isAuthenticated?.length !== 0 &&
// 		(userType === "Tutor" || userType === "Student")
// 	) {
// 		return <React.Fragment>{children}</React.Fragment>;
// 	}

// 	return <Navigate to="/login" state={{ from: location }} />;
// };

// export const ProtectedRouteTutor: React.FC<Props> = ({ children }) => {
// 	const location = useLocation();

// 	const isAuthenticated = localStorage.getItem("signature");
// 	const userType = localStorage.getItem("userType");

// 	if (isAuthenticated?.length !== 0 && userType === "Tutor") {
// 		return <React.Fragment>{children}</React.Fragment>;
// 	}

// 	return <Navigate to="/login" state={{ from: location }} />;
// };

// export const ProtectedRouteStudent: React.FC<Props> = ({ children }) => {
// 	const location = useLocation();

// 	const isAuthenticated = localStorage.getItem("signature");
// 	const userType = localStorage.getItem("userType");

// 	if (isAuthenticated?.length !== 0 && userType === "Student") {
// 		return <React.Fragment>{children}</React.Fragment>;
// 	}

// 	return <Navigate to="/login" state={{ from: location }} />;
// };

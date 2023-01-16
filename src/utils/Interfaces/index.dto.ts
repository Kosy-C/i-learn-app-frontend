export interface PayLoad {
	email: string;
	password: string;
	interest: string;
	usertype: string;
}
export interface Courses {
	id: string;
	name: string;
	email: string;
	areaOfInterest: string;
	password: string;
	courses: [
		{
			"course-title": string;
			"course-id": number;
			"course-image_url": string;
			"course-rating": number;
		}
	];
}

export interface User {
	id: string;
	email: string;
	name: string;
	verified: boolean;
	areaOfInterest: string;
	userType: string;
	image: string;
	rating: number;
	createdAt: Date;
	updatedAt: Date;
}

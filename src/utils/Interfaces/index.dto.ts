export interface PayLoad {
	email: string;
	password: string;
	interest: string;
	usertype: string;
}
export interface Courses {
	id?: string;
	title?: string;
	description?: string;
	course_image?: string;
	tutorId?: string;
	pricing?: string;
	category?: string;
	course_material?: string;
	rating?: number;
	createdAt?: string;
	updatedAt?: string;
	tutor?: {
		id?: string;
		email?: string;
		password?: string;
		name?: string;
		verified?: boolean;
		salt?: string;
		areaOfInterest?: string;
		userType?: string;
		image?: string;
		rating?: number;
		createdAt?: string;
		updatedAt?: string;
	};
}

export const courseDetails = {
	id: "",
	title: "",
	description: "",
	course_image: "",
	tutorId: "",
	pricing: "",
	category: "",
	course_material: "",
	rating: "",
	createdAt: "",
	updatedAt: "",
	tutor: {
		id: "",
		email: "",
		password: "",
		name: "",
		verified: "",
		salt: "",
		areaOfInterest: "",
		userType: "",
		image: "",
		rating: "",
		createdAt: "",
		updatedAt: "",
	},
};
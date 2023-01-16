export interface PayLoad {
  email: string
  password: string
  interest: string
  usertype: string
}
export interface Courses {
  id: string
  name: string
  email: string
  areaOfInterest: string
  password: string
  courses: [
    {
      'course-title': string
      'course-id': number
      'course-image_url': string
      'course-rating': number
    }
  ]
}

export interface Course {
  id: string;
  courseId: string;
  title: string;
  description: string;
  rating: number;
  tutorId: string;
  pricing: string;
  category: string;
  course_image: string;
  course_material: string;
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
  courses: Course[] ;
};

// create interface for tutor to create, update and delete courses

export interface UserCourse {
	id: string;
	name: string;
	email: string;
	areaOfInterest: string;

	courses: [
		{
			"course_image":"string",
			"course_name":"string",
			"tutor_name": "string",
			"course_price": "string"
}]
}

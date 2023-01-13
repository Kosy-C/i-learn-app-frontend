export interface  CourseModel{
    id: string,
    title: string,
    description: string,
    course_image: string,
    tutorId: string,
    pricing: string,
    category: string,
    course_material: string,
    rating: string,
    createdAt: string,
    updatedAt: string,
}

export interface TutorModel {
    id: string,
    email: string,
    password: string,
    name: string,
    verified: string,
    salt: string,
    areaOfInterest: string,
    userType: string,
    image: string,
    rating: string,
    createdAt: string,
    updatedAt: string,
}
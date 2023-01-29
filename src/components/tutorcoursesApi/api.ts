import axios from "axios";
import {
	addCourse,
	deleteTutorCourse,
} from "../tutorCoursesStore/tutorCoursesStore";
import { useDispatch } from "react-redux";

const baseURL = "http://localhost:4000";
const baseUrl: string = import.meta.env.VITE_SERVER_URL;

const api = axios.create({
	baseURL,
});

export const createCourse = async (course: {
	image: string;
	name: string;
	tutor: string;
	price: number;
}) => {
	const { data } = await api.post("/courses", course);
	return data;
};

const updateCourse = async (course: {
	id: string;
	image: string;
	name: string;
	tutor: string;
	price: number;
}) => {
	const { data } = await api.put(`/courses/${course.id}`, course);
	return data;
};

const deleteCourse = async (courseId: string) => {
	await api.delete(`/courses/${courseId}`);
};

export const fetchCourses = async () => {
	const { data } = await api.get("/courses");
	return data;
};

export const handleCreateCourse = (course: {
	image: string;
	name: string;
	tutor: string;
	price: number;
}) => {
	const dispatch = useDispatch();
	createCourse(course).then((data) => {
		dispatch(addCourse(data));
	});
};

export const handleUpdateCourse = (course: {
	id: string;
	image: string;
	name: string;
	tutor: string;
	price: number;
}) => {
	const dispatch = useDispatch();
	updateCourse(course).then(async (data) => {
		dispatch(await updateCourse(data));
	});
};

export const handleDeleteCourse = (
	courseId: string,
	image: string,
	name: string,
	tutor: string,
	price: number
) => {
	const dispatch = useDispatch();
	deleteCourse(courseId).then(async (courseId) => {
		return dispatch(deleteTutorCourse({ courseId } as any)) as any;
	});
};

export const handleFetchCourses = () => {
	const dispatch = useDispatch();
	fetchCourses().then((data) => {
		dispatch(addCourse(data));
	});
};

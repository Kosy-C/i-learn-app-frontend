import React, { ChangeEvent, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiPost, apiGet, apiUpdate } from "../../utils/api/axios";
import { User, UploadFile, Course } from "../../utils/Interfaces/index.dto";
import LoadingIcons from "react-loading-icons";
import FileUploaded from "../TutorCourseOperations/FileUploader";
import { FileUploads } from "../../components/TutorHome/TutorHome";
import "./tutorCourseOperations.css";

export interface CourseDetails {
	id?: string;
	title?: string;
	description?: string;
	category?: string;
	pricing?: string;
	image?: string;
	material?: string;
}
export const courseDetails: CourseDetails = {
	id: "",
	title: "",
	description: "",
	category: "",
	pricing: "",
	image: "",
	material: "",
};

const CourseManagement = ({
	tutor,
	course,
	tutorProps,
	onCloseProfile,
	show,
	courseMaterial,
	isEdit,
	setCourse,
}: // selectedImage,
{
	tutor?: User;
	tutorProps?: any;
	course?: Course;
	courses?: CourseDetails | any;
	onCloseProfile: () => void;
	show?: Boolean;
	courseMaterial?: FileUploads;
	isEdit?: Boolean;
	setCourse?: any;
}) => {
	const [loading, setLoading] = useState<Boolean>(false);
	const [courses, setCourses] = useState<CourseDetails | any>(course);
	const [selectedImage, setSelectedImage] = useState<UploadFile[] | null>(null);
	const [selectedMaterial, setSelectedMaterial] = useState<UploadFile[]>();
	const [editImage, setEditImage] = useState<UploadFile[]>();
	const [editMaterial, setEditMaterial] = useState<UploadFile[]>();

	const ref = useRef<HTMLInputElement>(null);
	const submitForm = async (e: any) => {
		e.preventDefault();
		setLoading(true);
		const formData = new FormData();
		formData.append("title", courses.title);
		formData.append("description", courses.description);
		formData.append("category", courses.category);
		formData.append("pricing", courses.pricing);
		formData.append("course_image", selectedImage as any);
		formData.append("course_material", selectedMaterial as any);
		try {
			const response = await apiPost("/courses/createCourse", formData);
			if (response.status === 200) {
				toast.success("File uploaded successfully");
				const { data } = await apiGet("/users/profile");

				tutorProps((previous: any) => (previous = data.userDetails));
				setCourses((previous: CourseDetails) => (previous = courseDetails));
				setLoading(false);
				onCloseProfile();
			} else if (response.status === 500) {
				setLoading(false);
			}
		} catch (error: any) {
			setLoading(false);
			toast.error(error.response.data.Error);
		}
	};

	const submitEditedForm = async (e: any) => {
		e.preventDefault();
		setLoading(true);
		const formData = new FormData();
		formData.append("title", courses.title);
		formData.append("description", courses.description);
		formData.append("category", courses.category);
		formData.append("pricing", courses.pricing);
		formData.append("course_image", editImage as any);
		formData.append("course_material", editMaterial as any);
		try {
			const response = await apiUpdate(
				`/courses/updateCourse/${courses.id}`,
				formData
			);
			if (response.status === 200) {
				toast.success("Course updated successfully");
				const { data } = await apiGet("/users/profile");
				console.log("userdetails is ", data.userDetails);

				tutorProps((previous: any) => (previous = data.userDetails));
				setCourse((previous: CourseDetails) => (previous = courseDetails));
				setLoading(false);
				onCloseProfile();
			} else if (response.status === 500) {
				setLoading(false);
			}
		} catch (error: any) {
			setLoading(false);
			toast.error(error.response.data.Error);
		}
	};

	const handleChange = (
		event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | any
	) => {
		event.preventDefault();
		const { name, value } = event.target;
		setCourses({ ...courses, [name]: value });
	};
	useEffect(() => {
		function handleClickOutside(
			event:
				| ChangeEvent<HTMLInputElement>
				| ChangeEvent<HTMLSelectElement>
				| any
		) {
			if (ref.current != null && !ref.current.contains(event.target)) {
				setCourse(courseDetails);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);

	return (
		<>
			{loading ? (
				<LoadingIcons.Rings
					stroke="#fd29593d"
					strokeOpacity={1}
					height={500}
					width={780}
				/>
			) : (
				<div ref={ref}>
					<form>
						<label>Course Title</label>
						<input
							type="text"
							value={courses?.title}
							name="title"
							onChange={handleChange}
							required
						/>
						<label>Description</label>
						<input
							type="text"
							value={courses?.description}
							name="description"
							onChange={handleChange}
						/>
						<label> Price</label>
						<input
							type="text"
							value={courses?.pricing}
							name="pricing"
							onChange={handleChange}
						/>
						<label> Category</label>
						<input
							type="text"
							value={courses?.category}
							name="category"
							onChange={handleChange}
						/>
						{/* For add course */}
						{isEdit !== true ? (
							<FileUploaded
								selectedImage={selectedImage}
								selectedMaterial={selectedMaterial}
								setSelectedImage={setSelectedImage}
								setSelectedMaterial={setSelectedMaterial}
								show={show}
								courseMaterial={courseMaterial}
								submitForm={submitForm}
							/>
						) : (
							<>
								<div>
									<div className="tutorImageContainer">
										<img
											className="tutorImageJpg"
											src={courses.course_image}
											alt="image"
										/>
									</div>

									<label style={{ cursor: "pointer", display: "flex" }}>
										<input
											// style={{ display: "none" }}
											type="file"
											onChange={(
												e:
													| ChangeEvent<HTMLInputElement>
													| ChangeEvent<HTMLSelectElement>
													| any
											) => {
												setEditImage(e.target.files[0]);
											}}
											name="course_image"
										/>
										{/* Change Image */}
									</label>
								</div>
								<div>
									<p>{courses.course_material}</p>
									<label style={{ cursor: "pointer" }}>
										<input
											// style={{ display: "none" }}
											type="file"
											onChange={(
												e:
													| ChangeEvent<HTMLInputElement>
													| ChangeEvent<HTMLSelectElement>
													| any
											) => {
												setEditMaterial(e.target.files[0]);
											}}
											name="course_image"
										/>
										{/* Change Material */}
									</label>
								</div>
								<button
									type="submit"
									onClick={submitEditedForm}
									className="submitButton"
								>
									Submit
								</button>
							</>
						)}
					</form>
				</div>
			)}
		</>
	);
};
export default CourseManagement;

import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiPost, apiGet } from "../../utils/api/axios";
import { User, UploadFile, Course } from "../../utils/Interfaces/index.dto";
import LoadingIcons from "react-loading-icons";
import FileUploaded from "../TutorCourseOperations/FileUploader";
import { FileUploads } from "../../components/TutorHome/TutorHome";

export interface CourseDetails {
	title?: string;
	description?: string;
	category?: string;
	pricing?: string;
	image?: string;
	material?: string;
}
export const courseDetails: CourseDetails = {
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
}) => {
	const [loading, setLoading] = useState<Boolean>(false);
	const [courses, setCourses] = useState<CourseDetails | any>(courseDetails);
	const [selectedImage, setSelectedImage] = useState<UploadFile[] | null>(null);
	const [selectedMaterial, setSelectedMaterial] = useState<UploadFile[]>();

	const submitForm = async (e: any) => {
		e.preventDefault();
		setLoading(true);
		console.log(selectedImage);
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
				console.log("userdetails is ", data.userDetails);

				tutorProps((previous: any) => (previous = data.userDetails));
				setCourses((previous: CourseDetails) => (previous = courseDetails));
				setLoading(false);
				onCloseProfile();
			} else if (response.status === 500) {
				setLoading(false);
			}
		} catch (error: any) {
			setLoading(false);
			toast.error(error.response.data.error);
		}
	};
	const handleChange = (
		event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | any
	) => {
		event.preventDefault();
		const { name, value } = event.target;
		setCourses({ ...courses, [name]: value });
	};

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
				<div>
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
						{!isEdit && (
							<FileUploaded
								selectedImage={selectedImage}
								selectedMaterial={selectedMaterial}
								setSelectedImage={setSelectedImage}
								setSelectedMaterial={setSelectedMaterial}
								show={show}
								courseMaterial={courseMaterial}
							/>
						)}
						{isEdit && (
							<div>
								<img
									src={
										selectedImage == null
											? courses.image
											: selectedImage[0].name
									}
									alt="image"
								/>
								<label>
									<input
										style={{ display: "none" }}
										type="file"
										onChange={(
											e:
												| ChangeEvent<HTMLInputElement>
												| ChangeEvent<HTMLSelectElement>
												| any
										) => {
											setSelectedImage(e.target.files[0]);
											console.log(selectedImage);
										}}
										name="course_image"
									/>
									Change Image
								</label>
							</div>
						)}
						<button
							type="submit"
							onClick={submitForm}
							style={{ cursor: "pointer" }}
						>
							Submit
						</button>
					</form>
				</div>
			)}
		</>
	);
};
export default CourseManagement;

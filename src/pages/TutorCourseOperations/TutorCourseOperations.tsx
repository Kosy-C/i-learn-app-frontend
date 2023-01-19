import React, { useState } from "react";
import { Form, Input, Upload, Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { UploadFile } from "antd/lib/upload/interface";
import { UploadRequestOption as RcCustomRequestOptions } from "rc-upload/lib/interface";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { string } from "yup";

interface Course {
	id: any;
	image: string;
	name: string;
	tutor: string;
	description: string;
	category: string;
	courseMatrial: string;
	price: number;
}

interface Props {}

const CourseManagement: React.FC<Props> = () => {
	const [form] = Form.useForm();
	const [image] = useState<string>("");
	const [imageList, setImageList] = useState<UploadFile[]>([]);
	const [uploading, setUploading] = useState<boolean>(false);
	const [uploadButton, setUploadButton] = useState<boolean>(true);

	const [courses, setCourses] = useState<Course[]>([]);
	const [courseToEdit, setCourseToEdit] = useState<Course | null>(null);
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [editCourse, setEditCourse] = useState<Course | null>(null);
	const [editImage, setEditImage] = useState<string>("");
	const [editImageList, setEditImageList] = useState<UploadFile[]>([]);
	const [editUploading, setEditUploading] = useState<boolean>(false);
	const [editUploadButton, setEditUploadButton] = useState<boolean>(true);
	const [editForm] = Form.useForm();
	const [editCourseId, setEditCourseId] = useState<number>(0);
	const [editCourseName, setEditCourseName] = useState<string>("");
	const [editCourseTutor, setEditCourseTutor] = useState<string>("");
	const [editCoursePrice, setEditCoursePrice] = useState<number>(0);
	const [editCourseImage, setEditCourseImage] = useState<string>("");
	const [editCourseImageList, setEditCourseImageList] = useState<UploadFile[]>(
		[]
	);
	const [editCourseUploading, setEditCourseUploading] =
		useState<boolean>(false);
	const [editCourseUploadButton, setEditCourseUploadButton] =
		useState<boolean>(true);
	const [editCourseForm] = Form.useForm();
	// add the code for displaying toast success on file upload success and error on file upload error
	const [showModal, setShowModal] = useState(false);
	<button onClick={() => setShowModal(true)}>Open Modal</button>;

	const handleFormFinish = (values: any) => {
		if (courseToEdit != null) {
			setCourses((prevCourses) =>
				prevCourses.map((course) => {
					if (course.id === courseToEdit.id) {
						return { ...course, ...values };
					}
					return course;
				})
			);
			setCourseToEdit(null);
		} else {
			setCourses((prevCourses) => [
				...prevCourses,
				{ id: courses.length + 1, ...values },
			]);
		}
	};

	return (
		<>
			<div>
				<div>
					<div className="tutorLogo"></div>

					<Form
						style={{
							paddingTop: "0px",
							backgroundColor: "F8CFDB",
						}}
						layout="vertical"
						initialValues={
							courseToEdit != null &&
							({
								image: courseToEdit?.image,
								name: courseToEdit?.name,
								tutor: courseToEdit?.tutor,
								price: courseToEdit?.price,
								description: courseToEdit?.description,
								courseMatrial: courseToEdit?.courseMatrial,
								category: courseToEdit?.category,
							} as any)
						}
						onFinish={handleFormFinish}
					>
						<div
							style={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								padding: "10px",
								backgroundColor: "rgb(250,250,250)",
								borderBottom: "1px solid rgb(230,230,230)",
								borderTop: "1px solid rgb(230,230,230)",
								borderRadius: "5px",
								marginBottom: "10px",
								marginTop: "10px",
							}}
						>
							<div>
								<Form.Item
									style={{}}
									label="Image"
									name="image"
									valuePropName="fileList"
									getValueFromEvent={(e: any) => e.fileList}
									rules={[
										{
											required: true,
											message: "Please upload an image for the course",
										},
									]}
								>
									<Upload>
										<Button
											style={{
												backgroundColor: "RGB(248 207 219)",
												color: "black",
											}}
										>
											{" "}
											<PlusOutlined /> Upload
										</Button>
									</Upload>
								</Form.Item>
							</div>
						</div>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								position: "relative",
								visibility: "visible",
							}}
						>
							<></>
							<div>
								<Form.Item
									label="Name"
									style={{
										width: "100%",
										padding: "10px",
										backgroundColor: "rgb(250,250,250)",
										borderBottom: "1px solid rgb(230,230,230)",
										borderTop: "1px solid rgb(230,230,230)",
										borderRadius: "5px",
										marginBottom: "10px",
										marginTop: "10px",
										marginRight: "10px",
										marginLeft: "10px",
									}}
									name="name"
									rules={[
										{
											required: true,
											message: "Please enter the name of the course",
										},
									]}
								>
									<Input />
								</Form.Item>
							</div>

							<div>
								<Form.Item
									label="Description"
									style={{
										width: "100%",
										padding: "10px",
										backgroundColor: "rgb(250,250,250)",
										borderBottom: "1px solid rgb(230,230,230)",
										borderTop: "1px solid rgb(230,230,230)",
										borderRadius: "5px",
										marginBottom: "10px",
										marginTop: "10px",
										marginRight: "10px",
										marginLeft: "10px",

									}}
									name="description"
									rules={[
										{
											required: true,
											message: "Please enter the course description",
										},
									]}
								>
									<Input />
								</Form.Item>
							</div>
							<div>
								<Form.Item
									label="Course Matrial"
									style={{
										width: "100%",
										padding: "10px",
										backgroundColor: "rgb(250,250,250)",
										borderBottom: "1px solid rgb(230,230,230)",
										borderTop: "1px solid rgb(230,230,230)",
										borderRadius: "5px",
										marginBottom: "10px",
										marginTop: "10px",
										marginRight: "10px",
										marginLeft: "10px",

									}}
									name="courseMatrial"
									rules={[
										{
											required: true,
											message: "Please enter the course matrial",
										},
									]}
								>
									<Input />
								</Form.Item>
							</div>
							<div>
								<Form.Item
									label="Category"
									style={{
										width: "100%",
										padding: "10px",
										backgroundColor: "rgb(250,250,250)",
										borderBottom: "1px solid rgb(230,230,230)",
										borderTop: "1px solid rgb(230,230,230)",
										borderRadius: "5px",
										marginBottom: "10px",
										marginTop: "10px",
										marginRight: "10px",
										marginLeft: "10px",

									}}
									name="category"
									rules={[
										{
											required: true,
											message: "Please enter the course category",
										},
									]}
								>
									<Input />
								</Form.Item>
							</div>
						</div>

						

						<div
							style={{
								display: "flex",
								justifyContent: "center",
							}}
						>
							<div>
								<Form.Item
									style={{
										justifyContent: "center",
										width: "100%",
										padding: "10px",
										backgroundColor: "rgb(250,250,250)",
										borderBottom: "1px solid rgb(230,230,230)",
										borderTop: "1px solid rgb(230,230,230)",
										borderRadius: "5px",
										marginBottom: "10px",
										marginTop: "10px",
										marginRight: "10px",
										marginLeft: "10px",

									}}
									label="Price"
									name="price"
									rules={[
										{
											required: true,
											message: "Please enter the price of the course",
										},
									]}
								>
									<Input />
								</Form.Item>
							</div>
						</div>

						<Form.Item>
							<Button
								style={{
									justifyContent: "center",
									width:"120px",
									backgroundColor: "RGB(248 207 219)",
									color: "black",
									borderRadius: "5px",
									marginBottom: "10px",
									
								}}
								type="primary"
								htmlType="submit"
							>
								{courseToEdit != null ? "Update" : "Add"}
							</Button>
						</Form.Item>
					</Form>
				</div>

				<></>
			</div>
		</>
	);
};
export default CourseManagement;

import React, { ChangeEvent, useRef, useState } from "react";

const FileUploader = ({
	selectedImage,
	selectedMaterial,
	setSelectedImage,
	setSelectedMaterial,
	show,
	courseMaterial,
	submitForm
}: any) => {
	const fileInput = useRef<HTMLInputElement>(null);

	// const handleFileInput = (
	// 	event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | any
	// ) => {
	// 	// handle Validation
	// 	console.log("uploaded file is ", event.target.files[0]);
	// 	selectedMaterial(event.target.files[0]);
	// 	const file = event.target.files[0];
	// 	// if (file.size > 18908024) {
	// 	// 	onFileSelectError({ error: "File size cannot exceed more than 8MB" });
	// 	// } else {
	// 	// 	onFileSelectSuccess(file);
	// 	// }
	// };

	return (
		<div className="file-uploader">
			<div>
				<label>Upload course Image</label>
				<input
					type="file"
					onChange={(
						e:
							| ChangeEvent<HTMLInputElement>
							| ChangeEvent<HTMLSelectElement>
							| any
					) => setSelectedImage(e.target.files[0])}
					// value={selectedImage}
					name="course_image"
				/>
			</div>
			{Boolean(show) && (
				<div>
					<img
						src={courseMaterial !== undefined ? courseMaterial.image : ""}
						alt="course_icon"
					/>
				</div>
			)}
			<div>
				<label>Upload course material</label>
				<input
					type="file"
					onChange={(
						e:
							| ChangeEvent<HTMLInputElement>
							| ChangeEvent<HTMLSelectElement>
							| any
					) => setSelectedMaterial(e.target.files[0])}
					// value={selectedMaterial}
					name="course_material"
				/>
			</div>
			{Boolean(show) && (
				<div>
					<h4>{courseMaterial !== undefined ? courseMaterial.material : ""}</h4>
				</div>
			)}
			<button type="submit" onClick={submitForm} className="submitButton">
				Submit
			</button>
		</div>
	);
};

export default FileUploader;

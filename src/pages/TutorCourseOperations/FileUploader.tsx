import React, { ChangeEvent, useRef } from "react";

const FileUploader = ({
	selectedImage,
	selectedMaterial,
	setSelectedImage,
	setSelectedMaterial,
}: any) => {
	const fileInput = useRef<HTMLInputElement>(null);

	const handleFileInput = (
		event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | any
	) => {
		// handle Validation
		console.log("uploaded file is ", event.target.files[0]);
		selectedMaterial(event.target.files[0]);
		const file = event.target.files[0];
		// if (file.size > 18908024) {
		// 	onFileSelectError({ error: "File size cannot exceed more than 8MB" });
		// } else {
		// 	onFileSelectSuccess(file);
		// }
	};

	return (
		<div className="file-uploader">
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
			<button
				onClick={(e) =>
					fileInput?.current != null && fileInput.current?.click()
				}
				className=""
			></button>
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
			<button
				onClick={(e) =>
					fileInput?.current != null && fileInput.current?.click()
				}
				className=""
			></button>
		</div>
	);
};

export default FileUploader;

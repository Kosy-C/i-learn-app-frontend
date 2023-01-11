import React, { useState } from 'react';
import { Form, Input, Upload, Button, Table } from 'antd';
//import { Form, Input, Upload, Button, Table } from 'antd';
//import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';
import { UploadChangeParam } from 'antd/lib/upload';
import { UploadFile } from 'antd/lib/upload/interface';


interface Course {
  id: number;
  image: string;
  name: string;
  tutor: string;
  price: number;
}

interface Props {}

const CourseManagement: React.FC<Props> = () => {
  const [courses, setCourses] = useState<Course[]>([]);
   const [courseToEdit, setCourseToEdit] = useState<Course | null>(null);

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image: string) => <img src={image} alt="Course" width={100} />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Tutor',
      dataIndex: 'tutor',
      key: 'tutor',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (course: Course) => (
        <>
          <Button onClick={() => handleEditClick(course)} icon={<EditOutlined />} />
          <Button onClick={() => handleDeleteClick(course.id)} icon={<DeleteOutlined />} />
        </>
      ),
    },
  ];

  const handleEditClick = (course: Course) => {
    setCourseToEdit(course);
  };

  const handleDeleteClick = (id: number) => {
    setCourses((prevCourses) => prevCourses.filter((course) => course.id !== id));
  };

  const handleFormFinish = (values: any) => {
    if (courseToEdit) {
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
    <div>
      <Form
        layout="vertical"
         InitialValues={courseToEdit &&
            ({
            image: courseToEdit?.image,
            name: courseToEdit?.name,
            tutor: courseToEdit?.tutor,
            price: courseToEdit?.price,
         } as any)
        }

        onFinish={handleFormFinish}
      >
        <Form.Item
          label="Image"
          name="image"
          valuePropName="fileList"
          getValueFromEvent={(e: any) => e.fileList}
          rules={[{ required: true, message: 'Please upload an image for the course' }]}
        >
          <Upload>
            <Button> <PlusOutlined /> Upload</Button>
            </Upload>
        </Form.Item>

        <Form.Item
            label="Name" 
            name="name"
            rules={[{ required: true, message: 'Please enter the name of the course' }]}
        >
            <Input />
        </Form.Item>


        <Form.Item
            label="Tutor"
            name="tutor"
            rules={[{ required: true, message: 'Please enter the name of the tutor' }]}

        >
            <Input />
        </Form.Item>

        <Form.Item

            label="Price"
            name="price"
            rules={[{ required: true, message: 'Please enter the price of the course' }]}
        >

            <Input />
        </Form.Item>

        <Form.Item>

            <Button type="primary" htmlType="submit">
                {courseToEdit ? 'Update' : 'Add'}
            </Button>
        </Form.Item>



        </Form>

        <Table columns={columns} dataSource={courses} />



    </div>
    );
};

export default CourseManagement;






























/*import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import {addCourse, deleteTutorCourse, updateTutorCourse} from '../../components/tutorCoursesStore/tutorCoursesStore';
import tutorCoursesStore from '../../components/tutorCoursesStore/tutorCoursesStore';
import TutorCourseForm from '../../components/tutorCourseForm/tutorCourseForm';
import TutorCourseTable from '../../components/tutorCourseTable/tutorCourseTable';
import api from '../../components/tutorCourseTable/tutorCourseTable';
import { SetStateAction, useEffect, useState } from 'react';
import {useLocation } from 'react-router-dom';
const TutorCourseOperations = () => {
    const history = new History();
    const { state } = useLocation();
    const { data, setData } = useAuth();
    const [tutorCourses, setTutorCourses] = useState([]);
    const [tutorCourse, setTutorCourse] = useState({
        id: 0,
        tutorId: 0,
        courseId: 0,
        courseName: '',
        courseDescription: '',
        coursePrice: 0,
        courseImage: '',
        courseCategory: '',
        courseSubCategory: '',
        courseLevel: '',
        courseDuration: 0,
        courseDurationType: '',
        courseLanguage: '',
        courseRating: 0,
        courseRatingCount: 0,
        courseStudentCount: 0,
        courseVideoCount: 0,
        courseVideoDuration: 0,
        courseVideoDurationType: '',
        courseVideoSize: 0,
        courseVideoSizeType: '',
        courseVideoQuality: '',
        courseVideoResolution: '',
        courseVideoFormat: '',
        courseVideoType: '',
        courseVideoUrl: '',
        courseVideoThumbnail: '',
        courseVideoDescription: '',
        courseVideoPreview: '',
        courseVideoPreviewType: '',
        courseVideoPreviewUrl: '',
        courseVideoPreviewThumbnail: '',
        courseVideoPreviewDescription: '',
        courseVideoPreviewDuration: 0,
        courseVideoPreviewDurationType: '',
        courseVideoPreviewSize: 0,
        courseVideoPreviewSizeType: '',
        courseVideoPreviewQuality: '',
        courseVideoPreviewResolution: '',
        courseVideoPreviewFormat: '',
        courseVideoPreviewRating: 0,
        courseVideoPreviewRatingCount: 0,
        courseVideoPreviewStudentCount: 0,
        courseVideoPreviewViewCount: 0,
        courseVideoPreviewLikeCount: 0,
        courseVideoPreviewDislikeCount: 0,
        courseVideoPreviewCommentCount: 0,
        courseVideoPreviewShareCount: 0,
        courseVideoPreviewDownloadCount: 0,
        courseVideoPreviewFavouriteCount: 0
    }); 

    useEffect(() => {
        if (data) {
            setTutorCourse(data);
        }
    }
    , [data]);

    useEffect(() => {

        api.getTutorCourses().then((res: { data: SetStateAction<never[]>; }) => {
            setTutorCourses(res.data);
        })
    } , []);

    const addTutorCourse = (tutorCourse: any) => {
        tutorCoursesStore.dispatch(addCourse(tutorCourse));
    }

    const updateTutorCourse = (tutorCourse: any) => {
        tutorCoursesStore.dispatch(updateTutorCourse(tutorCourse));
    }  

    const deleteTutorCourse = (id: any) => {

        tutorCoursesStore.dispatch(deleteTutorCourse(id));
    }

    const editTutorCourse = (id: any) => {
        history.push('/tutorCourseForm', { id: id });
    }

    return (
        <div>

            <TutorCourseForm addTutorCourse={addTutorCourse} updateTutorCourse={updateTutorCourse} tutorCourse={tutorCourse} />
            <TutorCourseTable tutorCourses={tutorCourses} editTutorCourse={editTutorCourse} deleteTutorCourse={deleteTutorCourse} />
        </div>
    )
}

export default TutorCourseOperations;


function useAuth(): { data: any; setData: any; } {
    throw new Error('Function not implemented.');
}

*/
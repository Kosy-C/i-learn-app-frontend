import React, { useState } from 'react';
import { Form, Input, Upload, Button, Table } from 'antd';
//import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';
import { UploadChangeParam } from 'antd/lib/upload';
import { UploadFile } from 'antd/lib/upload/interface';
import { UploadListType } from 'antd/lib/upload/interface';
import { UploadProps } from 'antd/lib/upload/interface';
import { UploadRequestOption as RcCustomRequestOptions } from 'rc-upload/lib/interface';
import { UploadFileStatus } from 'antd/lib/upload/interface';
import { UploadListProps } from 'antd/lib/upload/interface';
import { UploadLocale } from 'antd/lib/upload/interface';
import NavBar from '../../components/navBar/navBar';
import Footer from '../../components/Footer/Footer';
import { Link } from "react-router-dom";
import footerLogo from "../../assets/footerImage.png";
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import tutorLogo from "../../assets/logo.png";
import { toast } from "react-toastify";
import { ToastContainer, } from "react-toastify";






const baseUrl: string = import.meta.env.VITE_SERVER_URL;
interface Course {
  id: number;
  image: string;
  name: string;
  tutor: string;
  price: number;
}

interface Props {}

const CourseManagement: React.FC<Props> = () => {


  const [form] = Form.useForm();
  const [image, setImage] = useState<string>("");
  const [imageList, setImageList] = useState<UploadFile[]>([]);
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadButton, setUploadButton] = useState<boolean>(true);
  
  const [courses, setCourses] = useState<Course[]>([]);
   const [courseToEdit, setCourseToEdit] = useState<Course | null>(null);
   const toastId = React.useRef(null);
   const toast = React.useRef(null);
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
    const [editCourseImageList, setEditCourseImageList] = useState<UploadFile[]>([]);
    const [editCourseUploading, setEditCourseUploading] = useState<boolean>(false);
    const [editCourseUploadButton, setEditCourseUploadButton] = useState<boolean>(true);
    const [editCourseForm] = Form.useForm();
    const Footer = () => {
      return (
        <div className="footer">
          <div className="divider"></div>
          <div id="footerGroup">
            <h4>
              <span>
                </span>
              <img src={footerLogo}
                alt="logo"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  marginRight: "10px",
                  position: "relative",
                  marginTop: "580px",
                  marginLeft: "-900px",
                }}
              />
              <span id="footerText" style={{
                
                visibility: "visible",
              }}>iLearn </span>
            </h4>
            

            <div className= "socialMedia"
            style={{
              display: "flex",
              position: "relative",
              visibility: "visible",
              marginRight: "-290px",
            }}>
              <SocialMedia/>
              
          </div>
          </div>
    
          <div style={{
            display: "flex",
            position: "relative",
            visibility: "visible",
            marginLeft: "400px",
            paddingTop: "130px",

          }}>
            <h4  style={{
              position: "relative",
            }}id="reserved">© 2022 iLearn. All rights reserved</h4>
          </div>
        </div>
      );
    };
    
    // write a ccode for diplaying toast success on file upload success and error on file upload error
    

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image: string) => <img src={image} alt="Course" width={50} />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (name: string) => <Link to="/tutorCourseDetails">{name}</Link>,
    },
    {
      title: 'Tutor',
      dataIndex: 'tutor',
      key: 'tutor',
      render: (tutor: string) => <Link to="/tutorProfile">{tutor}</Link>,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render : (price: number) => <Link to="/tutorCourseDetails">{price}</Link>,
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
    <><div>

      <div style={{
        paddingTop: "20px",
      }}
      ><NavBar
       /*make the navbar sticky on scroll */
      
      {...NavBar} />
        <div className="tutorLogo">

        </div>

        <Form style={{
          paddingTop: "250px",
          backgroundColor: "white",
          
        }}
          layout="vertical"
          initialValues={courseToEdit &&
            ({
              image: courseToEdit?.image,
              name: courseToEdit?.name,
              tutor: courseToEdit?.tutor,
              price: courseToEdit?.price,
            } as any)}

          onFinish={handleFormFinish}
        >
          <Form.Item style={{
            alignContent: "center",
          }}
            label="Image"
            name="image"
            valuePropName="fileList"
            getValueFromEvent={(e: any) => e.fileList}
            rules={[{ required: true, message: 'Please upload an image for the course' }]}
          >
            <Upload>
              <Button style={{
                backgroundColor: "rgb(239,104,48)",
                color: "white",
              }}> <PlusOutlined /> Upload</Button>
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
            <Button /*fix add button not functioning*/
              style={{
                backgroundColor: "rgb(239,104,48)",
                color: "white",
              }}

              
              type="primary" htmlType="submit">
              {courseToEdit ? 'Update' : 'Add'}
            </Button>
          </Form.Item>
        </Form>
        
            
            
       







            
      </div>
      <div style={{ 
        paddingTop: "50px",
      }}>



        <Table columns={columns} dataSource={courses} />
      </div>
      <></>
      <div style={{
        paddingTop: "50px",
      }}>


      </div>
    </div>
    <div style={{
      paddingTop: "20px",
    }}>

       <Footer {...Footer} />
    </div>
    </> 
       
          
  );     
};
export default CourseManagement;












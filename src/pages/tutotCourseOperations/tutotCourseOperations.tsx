import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import {addCourse, deleteTutorCourse, updateTutorCourse} from '../../components/tutorCoursesStore/tutorCoursesStore';
import tutorCoursesStore from '../../components/tutorCoursesStore/tutorCoursesStore';
import TutorCourseForm from '../../components/tutorCourseForm/tutorCourseForm';
import TutorCourseTable from '../../components/tutorCourseTable/tutorCourseTable';
import api from '../../components/tutorCourseTable/tutorCourseTable';
import { useEffect, useState } from 'react';


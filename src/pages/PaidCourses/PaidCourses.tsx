import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import NavBar from "../../components/navBar/navBar";
import "./PaidCourses.css";
import { apiGet, apiUpdate } from "../../utils/api/axios";
import { useParams } from "react-router-dom";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.js`;

const options = {
  cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
  cMapPacked: true,
  standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts`,
};

const PaidCourses = () => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [course, setcourse] = useState<any>({});
  const [progress, setProgress] = useState(0);
  const params = useParams();

  useEffect(() => {
    const getPdf = async () => {
      const { data } = await apiGet(`/courses/get-course/${params.id}`);
      setcourse(data.course);
      console.log(pageNumber);
    };

    getPdf();
  }, [params.id]);

  interface OnDocumentLoadSuccessParams {
    numPages: number;
  }
  function onDocumentLoadSuccess(params: OnDocumentLoadSuccessParams) {
    const { numPages } = params;
    console.log("onDocumentLoadSuccess params: ", params);
    console.log("numPages: ", params.numPages);
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    if (pageNumber > 1) {
      changePage(-1);
    }
  }

  async function nextPage() {
    if (pageNumber < numPages) {
      changePage(1);
    }
    await updateCourseProgress(course.id, pageNumber + 1);
  }

  const updateCourseProgress = async (
    courseId: string,
    currentPage: number
  ) => {
    try {
      const response = await apiUpdate("/users/students/courses", {
        courseId,
        currentPage,
      });
      setProgress(response.data.progress);
      console.log(response);
      //set the state of progress with the value returned by the backend
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar />

      <div className="paidCourses header">
        <header>{course.title}</header>


        <div>
          <input
            className="paidCourses__go__input"
            type="number"
            min={1}
            max={numPages}
            value={pageNumber}
            onChange={(e) => setPageNumber(parseInt(e.target.value))}
          />

          <p className="paidCourses__pages">
            Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
          </p>
          <div className="paidCourses__container__document">
            <div className="arrow-container left" onClick={previousPage}>
              <div className="arrow left"></div>
            </div>
            <Document
              file={course.course_material}
              onLoadSuccess={onDocumentLoadSuccess}
              options={options}
            >
              <Page pageNumber={pageNumber || 1}width={800} height={1200} />
            </Document>
            <div className="arrow-container right" onClick={nextPage}>
              <div className="arrow right"></div>
            </div>
            <div className="paidCourses__container__clicks">
              <button
                className="paidCourses__previous__button"
                type="button"
                disabled={pageNumber <= 1}
                onClick={previousPage}
              >
                Previous
              </button>
              <button
                className="paidCourses__next__button"
                type="button"
                disabled={pageNumber >= numPages}
                onClick={nextPage}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaidCourses;

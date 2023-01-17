import React, { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
import NavBar from "../../components/navBar/navBar";
import "./PaidCourses.css";
import { apiGet } from "../../utils/api/axios";
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

  const params = useParams();

  useEffect(() => {
    const getPdf = async () => {
      const { data } = await apiGet(`/courses/requestCourse/${params.id}`);
      setcourse(data);
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
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

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
              <Page pageNumber={pageNumber || 1} />
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

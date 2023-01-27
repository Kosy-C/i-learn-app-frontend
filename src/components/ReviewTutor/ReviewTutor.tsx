// import "./ReviewTutor.css";
// import { useEffect, useState } from "react";
// import { apiGet } from "../../utils/api/axios";
// import Rating from "../Rating/Rating";

// const ReviewTutor = ({ tutorId }: any) => {
//     const [review, setReview] = useState([]);
//     const getReview = async () => {
//         try {
//             const response = await apiGet(`/users/tutors/${tutorId}/review`);
//             console.log("data is ", response.data);
//             setReview(response.data.tutorReviewInfo);
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     useEffect(() => {
//         void getReview();
//     }, []);
//     return (
//         <>
//             {review.map((data: any) => {
//                 return (
//                     <div className="tutor-review" key={data.id}>
//                         <div className="tutor-review-block" key={data.id}>
//                             <img src={data.student.image} alt="" />
//                             <div className="tutor-review-write">
//                                 <h3>Name:{data.student.name}</h3>
//                                 <Rating rating={data.ratingValue} color="#3cb371" image="" />
//                             </div>
//                         </div>
//                         <p>{data.description}</p>
//                     </div>
//                 );
//             })}
//         </>
//     );
// };

// export default ReviewTutor;

import React, { useEffect, useState } from "react";
import { apiGet } from "../../utils/api/axios";
import Rating from "../Rating/Rating";
import "./ReviewTutor.css";

interface ReviewTutorProps {
    tutorId: any;
}

const ReviewTutor: React.FC<ReviewTutorProps> = ({ tutorId }) => {
    const [review, setReview] = useState([]);

    const getReview = async () => {
        try {
            const response = await apiGet(`/users/tutors/${tutorId}/review`);
            setReview(response.data.tutorReviewInfo);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        void getReview();
    }, []);

    return (
        <>
            {review.length > 0 ? (
                review.map((data: any) => {
                    return (
                        <div className="tutor-review" key={data.id}>
                            <div className="tutor-review-block" key={data.id}>
                                <img src={data.student.image} alt="" />
                                <div className="tutor-review-write">
                                    <h3>Name:{data.student.name}</h3>
                                    <Rating rating={data.ratingValue} color="#3cb371" image="" />
                                </div>
                            </div>
                            <p>{data.description}</p>
                        </div>
                    );
                })
            ) : (
                <h1>No Reviews yet</h1>
            )}
        </>
    );
};
export default ReviewTutor;

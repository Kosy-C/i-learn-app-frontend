import React, { useState } from 'react';
import './ProgressBar.css'
interface Props {
    currentPage: number;
    totalPages: number;
}
const ProgressBar: React.FC<Props> = ({ currentPage, totalPages }) => {
    const [percentage, setPercentage] = useState(0);
    React.useEffect(() => {
        setPercentage((currentPage / totalPages) * 100);
    }, [currentPage, totalPages]);
    return (
        <div className="progress-bar">
            <div className="progress-bar-inner" style={{ width: `${percentage}%` }} />
        </div>
    );
}
export default ProgressBar;
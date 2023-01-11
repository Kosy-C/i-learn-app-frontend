import { stringify } from 'querystring';
import React, { useState } from 'react';
import { json } from 'stream/consumers';

interface FormProps {
    onSubmit: (course: {image: string, name: string, tutor: string, price: number}) => void
}

const Form: React.FC<FormProps> = ({ onSubmit }) => {
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [tutor, setTutor] = useState('');
    const [price, setPrice] = useState(0);
    const [isEdit, setEdit] = useState(false);
    const [editCourse, setEditCourse] = useState({image: '', name: '', tutor: '', price: 0});
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({ image, name, tutor, price });
        setImage('');
        setName('');
        setTutor('');
        setPrice(0);
    };
    
    const handleEdit = (course: {image: string, name: string, tutor: string, price: number}) => {
        setEdit(true);
        setEditCourse(course);
        setImage(course.image);
        setName(course.name);
        setTutor(course.tutor);
        setPrice(course.price);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Image:</label>
                <input type="text" value={image} onChange={e => setImage(e.target.value)} />
            </div>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
                <label>Tutor:</label>
                <input type="text" value={tutor} onChange={e => setTutor(e.target.value)} />
            </div>
            <div>
                <label>Price:</label>
                <input type="number" value={price} onChange={e => setPrice(
                    parseInt(e.target.value)
                )} />
            </div>
            <button type="submit">{isEdit ? 'Update course' : 'Add course'}</button>
        </form>
    );
};

export default Form;

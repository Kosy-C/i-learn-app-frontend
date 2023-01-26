import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import '../tutorCreateCourseModal/createCourse.css'
import { toast } from 'react-toastify'

interface Props {
  closeThisModal: Dispatch<SetStateAction<boolean>>
  setAreaOfInterests: Dispatch<SetStateAction<boolean>>
}

const CreateCourse: React.FC<Props> = ({
  closeThisModal,
  setAreaOfInterests,
}) => {
  const [areasOfInterest, setAreasOfInterest] = useState<string[]>([])

  const [disabled, setDisabled] = useState(false)

  const [mathematics, setMathematics] = useState(false)
  const [Coding, setCoding] = useState(false)
  const [Physics, setPhysics] = useState(false)
  const [Graphics, setGraphics] = useState(false)
  const [video, setVideo] = useState(false)
  const [dig, setDig] = useState(false)
  const [Chemistry, setChemistry] = useState(false)

  const Courses = {
    Mathematics: false,
    Coding: false,
    Physics: false,
    GraphicsDesign: false,
    VideoEditing: false,
    DigitalMarketing: false,
    Chemistry: false,
  }

  const checkChecks = () => {
    const checks = [mathematics, Coding, Physics, Graphics, video, dig, Chemistry]
    let number = 1
    checks.forEach(x=> x === true ? number++ : number)
    console.log(number);
    
    return number 
  }

  const handlePush = (value: boolean, insertee: string) => {
    if(value === false){
         setAreasOfInterest([...areasOfInterest, insertee])
    }else{
        const result = areasOfInterest.filter((area: string)=> area !== insertee)
         setAreasOfInterest(result)
    }
  }

  
 

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    const number = checkChecks()
    if (number <= 5) {
      if (event.target.value == 'Mathematics') {
        setMathematics(!mathematics)
        handlePush(mathematics, event.target.value)
      }
      if (event.target.value == 'Coding') {
        setCoding(!Coding)
        handlePush(Coding, event.target.value)
      }
      if (event.target.value == 'Physics') {
        setPhysics(!Physics)
        handlePush(Physics, event.target.value)
      }
      if (event.target.value == 'GraphicsDesign') {
        setGraphics(!Graphics)
        handlePush(Graphics, event.target.value)
      }
      if (event.target.value == 'Chemistry') {
        setChemistry(!Chemistry)
        handlePush(Chemistry, event.target.value)
      }
      if (event.target.value == 'DigitalMarketing') {
        setDig(!dig)
        handlePush(dig, event.target.value)
      }
      if (event.target.value == 'VideoEditing') {
        setVideo(!video)
        handlePush(video, event.target.value)
      }
    } else if (number > 5) {
      toast.error('You cannot select more than five areas of interest')
      setDisabled(true)
    }
  }

  const selectFiveAreas = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    localStorage.setItem('areasOfInterest', JSON.stringify(areasOfInterest))
    closeThisModal(false)
    setAreaOfInterests(true)
    refreshSelected()
  }

  const refreshSelected = () => {
    setAreasOfInterest([])
    setDisabled(false)
    setMathematics(false)
    setCoding(false)
    setPhysics(false)
    setGraphics(false)
    setChemistry(false)
    setDig(false)
    setVideo(false)
  }

  return (
    <>
      <div className="createCourseContainer">
        <div className="createCourseHeader">
          <h3>Add Course</h3>
        </div>
        <hr />
        <div className="createCourseBody">
          <p>Course Name</p>
          <form className="createCourseSelectOption">
            <div>
              <input
                onChange={handleCheck}
                type="checkbox"
                name="Mathematics"
                value="Mathematics"
                disabled={disabled}
                checked={mathematics}
              />
              <label htmlFor="Mathematics">Mathematics</label>
            </div>
            <div>
              <input
                onChange={handleCheck}
                type="checkbox"
                name="Physics"
                value="Physics"
                disabled={disabled}
                checked={Physics}
              />
              <label>Physics</label>
            </div>
            <div>
              <input
                onChange={handleCheck}
                type="checkbox"
                name="Coding"
                value="Coding"
                disabled={disabled}
                checked={Coding}
              />
              <label>Coding</label>
            </div>
            <div>
              <input
                onChange={handleCheck}
                type="checkbox"
                name="GraphicsDesign"
                value="GraphicsDesign"
                disabled={disabled}
                checked={Graphics}
              />
              <label>Graphics Design</label>
            </div>
            <div>
              <input
                onChange={handleCheck}
                type="checkbox"
                name="VideoEditing"
                value="VideoEditing"
                disabled={disabled}
                checked={video}
              />
              <label>Video Editing</label>
            </div>
            <div>
              <input
                onChange={handleCheck}
                type="checkbox"
                name="DigitalMarketing"
                value="DigitalMarketing"
                disabled={disabled}
                checked={dig}
              />
              <label>Digital Marketing</label>
            </div>

            <div>
                <input
                onChange={handleCheck}
                type="checkbox"
                name="Chemistry"
                value="Chemistry"
                disabled={disabled}
                checked={Chemistry}
                />
                <label>Chemistry</label>
            </div>
            
            <div className="up-buttons">
              <button
                type="button"
                onClick={selectFiveAreas}
                className="up-done-picking-courses"
              >
                Done
              </button>
              <button
                type="button"
                onClick={refreshSelected}
                className="up-refreshed-picked-courses"
              >
                Refresh
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default CreateCourse

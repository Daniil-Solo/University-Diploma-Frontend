import "./desktop.css"
import Button from '../UI/Button/Button'
import Select from 'react-select'
import { DesktopProps } from "../../types/component-props"
import Loader from "../UI/Loader/Loader"
import ElectiveGroupView from "./ElectiveGroupView"

const DesktopView: React.FC<DesktopProps> = (props) => {
    const {facultyOptions, isFacultyDisabled, specializationOptions, isSpecializationDisabled, professionOptions, isProfessionDisabled, faculty, setFaculty, specialization, setSpecialization, profession, setProfession, goToResults, isLoading, electiveGroups} = props

    return (
        <div className='desktop-view'>
            <p className='desktop-view__header'>
                Цифровой помощник для рекомендаций элективов
            </p>
            <div className='desktop-view__form desktop-form-blocks'>
                <div className="select-block desktop-form-blocks__item">
                    <p className='select-block__title'>
                        Факультет
                    </p>
                    <Select className='select-block__select' isDisabled={isFacultyDisabled} options={facultyOptions} placeholder="Не выбран" value={faculty} onChange={(selectedOption) => setFaculty(selectedOption)}/>
                </div>
                <div className="select-block desktop-form-blocks__item">
                    <p className='select-block__title'>
                        Направление
                    </p>
                    <Select className='select-block__select' options={specializationOptions} isDisabled={isSpecializationDisabled} placeholder="Не выбрано" value={specialization} onChange={(selectedOption) => setSpecialization(selectedOption)}/>
                </div>
                <div className="select-block desktop-form-blocks__item">
                    <p className='select-block__title'>
                        Профессия
                    </p>
                    <Select className='select-block__select' options={professionOptions} isDisabled={isProfessionDisabled} placeholder="Не выбрана" value={profession} onChange={(selectedOption) => setProfession(selectedOption)}/>
                </div>
                <div className="desktop-form-blocks__item button-block">
                    {  
                        isLoading?
                        <Loader/>
                        :
                        <Button title='Готово' handleClick={goToResults} isDisabled={faculty === null || specialization === null || profession === null} />
                    }
                </div>
                
            </div>
            <div className='desktop-view__results desktop-results'>
                {
                    electiveGroups.map(eg => {
                        return (
                            <ElectiveGroupView electiveGroup={eg}/>
                        )
                    })
                }
            </div>
        </div>
        
    )
}

export default DesktopView;
import "./mobile.css"
import Button from '../UI/Button/Button'
import Select from 'react-select'
import { FormProps } from "../../types/options"


const MobileForm: React.FC<FormProps> = (props) => {
    const {facultyOptions, specializationOptions, isSpecializationDisabled, professionOptions, isProfessionDisabled, faculty, setFaculty, specialization, setSpecialization, profession, setProfession, goToResults} = props

    return (
        <div className='mobile-form'>
            <div className='mobile-form__header'>
                <div className='message-container'>
                    <p className='message-container__text message-container__text_user'>
                        Какой электив выбрать?
                    </p>
                </div>
                <div className='message-container'>
                    <p className='message-container__text message-container__text_bot'>
                        Сейчас подскажу :)
                    </p>
                </div>
            </div>
            <div className='mobile-form__main'>
                <div className="select-block">
                    <p className='select-block__title'>
                        Твой факультет?
                    </p>
                    <Select className='select-block__select' options={facultyOptions} placeholder="Не выбран" value={faculty} onChange={(selectedOption) => setFaculty(selectedOption)}/>
                </div>
                <div className="select-block">
                    <p className='select-block__title'>
                        Твое направление?
                    </p>
                    <Select className='select-block__select' options={specializationOptions} isDisabled={isSpecializationDisabled} placeholder="Не выбрано" value={specialization} onChange={(selectedOption) => setSpecialization(selectedOption)}/>
                </div>
                <div className="select-block">
                    <p className='select-block__title'>
                        Интересуемая профессия?
                    </p>
                    <Select className='select-block__select' options={professionOptions} isDisabled={isProfessionDisabled} placeholder="Не выбрана" value={profession} onChange={(selectedOption) => setProfession(selectedOption)}/>
                </div>
                <Button title='Готово' handleClick={goToResults} isDisabled={faculty === null || specialization === null || profession === null} />
            </div>
        </div>
        
    )
}

export default MobileForm;
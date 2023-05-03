import { ReactNode } from 'react'
import "./mobile.css"
import Button from '../UI/Button/Button'

const MobileForm: React.FC = () => {
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
                    <select className='select-block__select'>
                    </select>
                </div>
                <div className="select-block">
                    <p className='select-block__title'>
                        Твое направление?
                    </p>
                    <select className='select-block__select'>
                    </select>
                </div>
                <div className="select-block">
                    <p className='select-block__title'>
                        Интересуемая профессия?
                    </p>
                    <select className='select-block__select'>
                    </select>
                </div>
                <Button title='Готово' handleClick={(e) => e.preventDefault()}/>
            </div>
        </div>
        
    )
}

export default MobileForm;
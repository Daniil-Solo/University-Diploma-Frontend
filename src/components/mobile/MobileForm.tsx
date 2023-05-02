import { ReactNode } from 'react'
import "./mobile.css"
import Button from '../UI/Button/Button'

const MobileForm: React.FC = () => {
    return (
        <>
            <div className='mobile-form-header'>
                <div className='message-container'>
                    <p className='user-message message'>
                        Какой электив выбрать?
                    </p>
                </div>
                <div className='message-container'>
                    <p className='bot-message message'>
                        Сейчас подскажу :)
                    </p>
                </div>
            </div>
            <div className='mobile-form-selects'>
                <div className="select-block">
                    <p className='select-title'>
                        Твой факультет?
                    </p>
                    <select className='select'>
                    </select>
                </div>
                <div className="select-block">
                    <p className='select-title'>
                        Твое направление?
                    </p>
                    <select className='select'>
                    </select>
                </div>
                <div className="select-block">
                    <p className='select-title'>
                        Интересуемая профессия?
                    </p>
                    <select className='select'>
                    </select>
                </div>
                <Button title='Готово' handleClick={(e) => e.preventDefault()}/>
            </div>
        </>
        
    )
}

export default MobileForm;
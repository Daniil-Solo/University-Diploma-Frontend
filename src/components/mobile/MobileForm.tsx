import { ReactNode } from 'react'
import "./mobile.css"

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
        </>
        
    )
}

export default MobileForm;
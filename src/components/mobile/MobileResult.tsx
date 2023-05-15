import "./mobile.css"
import Button from '../UI/Button/Button'
import ElectiveGroupView from "./ElectiveGroupView"
import { ResultProps } from "../../types/component-props"

const MobileResult: React.FC<ResultProps> = (props) => {
    const {electiveGroups, goBack} = props
    return (
        <div className='mobile-form mobile-form_gap16'>
            <div className='mobile-form__header'>
                <div className='message-container'>
                    <p className='message-container__text message-container__text_bot'>
                        Вот, что получилось :)
                    </p>
                </div>
                <div className='message-container'>
                    {
                        electiveGroups.map(eg => {
                            return (
                                <div key={eg.name} className='message-container__text message-container__text_bot elective-groups'>
                                    <ElectiveGroupView electiveGroup={eg}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className='mobile-form__main'>
                <Button title='Назад' handleClick={goBack} />
            </div>
        </div>
    )
}

export default MobileResult
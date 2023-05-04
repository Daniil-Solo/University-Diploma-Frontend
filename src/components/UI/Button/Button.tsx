import "./button.css"

type ButtonProps = {
    title: string,
    handleClick: React.MouseEventHandler<HTMLButtonElement>,
    isDisabled?: boolean
}

const Button: React.FC<ButtonProps> = ({title, handleClick, isDisabled = false}) => {

    const handleDisabledClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault()
    }

    return (
        <button disabled={isDisabled} className={'btn'} onClick={isDisabled? handleDisabledClick: handleClick}>
            {title}
        </button>
    )
}

export default Button;
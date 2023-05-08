import './layout.css'
import { ReactNode } from 'react'

type BasicLayoutProps = {
    children: ReactNode
}

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
    return (
        <>
            <header className='header'>
                <div className='logo'>
                    <span className="logo__text">ПГНИУ</span>
                </div>
            </header>
            <main>
                {
                    props.children
                }
            </main>
        </>
    )
}

export default BasicLayout;
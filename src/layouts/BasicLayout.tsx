import './layout.css'
import { ReactNode } from 'react'

type BasicLayoutProps = {
    children: ReactNode
}

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
    return (
        <>
            <header>
                <div className='logo-container'>
                    <span className="logo">ЕТИС</span>
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
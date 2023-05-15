import { ElectiveGroupProps } from "../../types/electives"

const ElectiveGroupView: React.FC<ElectiveGroupProps> = (props) => {
    const {electiveGroup} = props
    return (
        <div className="desktop-results__column desktop-elective-group">
            <p className="desktop-elective-group__name">
                {electiveGroup.name + ":"}
            </p>
            <ul className="desktop-elective-group__text electives">
                {
                    electiveGroup.items.map(item => {
                        return (
                            <li className="electives__item" key={item.id}>
                                {item.title}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )

}

export default ElectiveGroupView
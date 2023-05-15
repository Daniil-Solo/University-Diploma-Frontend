import { ElectiveGroupProps } from "../../types/component-props"

const ElectiveGroupView: React.FC<ElectiveGroupProps> = (props) => {
    const {electiveGroup} = props
    return (
        <div className="elective-groups__item elective-group">
            <p className="elective-group__name">
                {electiveGroup.name + ":"}
            </p>
            <ul className="elective-group__items electives">
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
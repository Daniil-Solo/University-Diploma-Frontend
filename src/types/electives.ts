type Elective = {
    id: number,
    title: string
}

type ElectiveGroup = {
    name: string,
    items: Elective[]
}

type ResultProps = {
    electiveGroups: ElectiveGroup[]
}
type ElectiveGroupProps = {
    electiveGroup: ElectiveGroup
}

export type {ResultProps, ElectiveGroupProps}
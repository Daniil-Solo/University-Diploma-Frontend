type Elective = {
    id: number,
    title: string
}

type ElectiveGroup = {
    name: string,
    items: Elective[]
}

export type {ElectiveGroup}
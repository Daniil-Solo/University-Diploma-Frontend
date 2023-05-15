type Option = {
    label: string,
    value: string
}

type OptionOrNull = Option | null

type SetOption = (option: OptionOrNull) => void

export type {Option, OptionOrNull, SetOption};
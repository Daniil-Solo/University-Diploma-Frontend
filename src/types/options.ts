type Option = {
    label: string,
    value: string
}

type OptionOrNull = Option | null

type SetOption = (option: OptionOrNull) => void

type FormProps = {
    facultyOptions: Array<Option>,
    faculty: OptionOrNull,
    setFaculty: SetOption,
    specializationOptions: Array<Option>,
    isSpecializationDisabled: boolean,
    specialization: OptionOrNull,
    setSpecialization: SetOption,
    professionOptions: Array<Option>,
    isProfessionDisabled: boolean,
    profession: OptionOrNull,
    setProfession: SetOption,
    goToResults: () => void,
    isLoading: boolean
}

export type {Option, OptionOrNull, FormProps, SetOption};
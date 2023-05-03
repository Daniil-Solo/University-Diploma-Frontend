type Option = {
    label: string,
    value: string
}

type OptionOrNull = Option | null

type FormProps = {
    facultyOptions: Array<Option>,
    faculty: OptionOrNull,
    setFaculty: React.Dispatch<React.SetStateAction<OptionOrNull>>,
    specializationOptions: Array<Option>,
    isSpecializationDisabled: boolean,
    specialization: OptionOrNull,
    setSpecialization: React.Dispatch<React.SetStateAction<OptionOrNull>>,
    professionOptions: Array<Option>,
    isProfessionDisabled: boolean,
    profession: OptionOrNull,
    setProfession: React.Dispatch<React.SetStateAction<OptionOrNull>>
}

export type {Option, OptionOrNull, FormProps};
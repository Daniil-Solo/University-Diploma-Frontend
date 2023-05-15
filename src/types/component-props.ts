import { ElectiveGroup } from "./electives"
import { Option, OptionOrNull, SetOption } from "./options"

type ResultProps = {
    electiveGroups: ElectiveGroup[],
    goBack: () => void
}
type ElectiveGroupProps = {
    electiveGroup: ElectiveGroup
}

type FormProps = {
    facultyOptions: Array<Option>,
    isFacultyDisabled: boolean,
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

type DesktopProps = FormProps & {
    electiveGroups: ElectiveGroup[],
}

export type {ResultProps, ElectiveGroupProps, FormProps, DesktopProps};
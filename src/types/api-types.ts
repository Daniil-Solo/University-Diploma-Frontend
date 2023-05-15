import { OptionOrNull, Option } from "./options"; 
import { ElectiveGroup } from "./electives"; 

type GetOptionsByOption = (option: OptionOrNull) => Promise<Array<Option>>

type GetOptions = () => Promise<Array<Option>>

type GetElectiveGroups = (specialization: OptionOrNull, profession: OptionOrNull) => Promise<Array<ElectiveGroup>>


export type {GetOptionsByOption, GetOptions, GetElectiveGroups}
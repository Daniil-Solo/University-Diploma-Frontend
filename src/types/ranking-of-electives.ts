import { ElectiveGroup } from "./electives"; 
import { OptionOrNull } from "./options";

type GetElectiveGroups = (specialization: OptionOrNull, profession: OptionOrNull) => Promise<Array<ElectiveGroup>>

export type {GetElectiveGroups}
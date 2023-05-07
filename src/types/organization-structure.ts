import { OptionOrNull, Option } from "./options"; 

type GetOptionsByOption = (option: OptionOrNull) => Promise<Array<Option>>

type GetOptions = () => Promise<Array<Option>>

export type {GetOptionsByOption, GetOptions}
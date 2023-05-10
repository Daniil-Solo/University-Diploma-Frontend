import { GetElectiveGroups } from "../types/ranking-of-electives"
import instance from "./axios-instance"


const getElectiveGroups: GetElectiveGroups = async (specialization, profession) => {
    if (specialization === null){
        throw new Error("Отсутствует значение для специализации")
    }
    if (profession === null){
        throw new Error("Отсутствует значение для профессии")
    }
    try{
        const response = await instance.get("ranking/get_electives/", {
            params: {
                specialization_id: specialization.value,
                profession_id: profession.value
            }
        })
        return response.data
    } catch(e){
        console.log(e)
        throw new Error("Произошла сетевая ошибка")
    }
}

export {getElectiveGroups}
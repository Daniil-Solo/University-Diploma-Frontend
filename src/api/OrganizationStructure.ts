import { GetOptionsByOption, GetOptions } from "../types/organization-structure"
import instance from "./axios-instance"


const getFaculties: GetOptions = async () => {
    try{
        const response = await instance.get("structure/faculties/")
        return response.data
    } catch(e){
        console.log(e)
        throw new Error("Произошла сетевая ошибка")
    }
}

const getSpecializationsByFaculty: GetOptionsByOption = async (faculty) => {
    if (faculty === null){
        throw new Error("Отсутствует значение для факультета")
    }
    try{
        const response = await instance.get("structure/specializations/", {
            params: {
                faculty_id: faculty.value
            }
        })
        return response.data
    } catch(e){
        console.log(e)
        throw new Error("Произошла сетевая ошибка")
    }
}

const getProfessionsBySpecializtion: GetOptionsByOption = async (specialization) => {
    if (specialization === null){
        throw new Error("Отсутствует значение для направления")
    }
    try{
        const response = await instance.get("structure/professions/", {
            params: {
                specialization_id: specialization.value
            }
        })
        return response.data
    } catch(e){
        console.log(e)
        throw new Error("Произошла сетевая ошибка")
    }
}

export {getSpecializationsByFaculty, getProfessionsBySpecializtion, getFaculties}
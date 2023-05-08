import {useState, useEffect} from 'react';
import BasicLayout from './layouts/BasicLayout';
import MobileForm from './components/mobile/MobileForm';
import MobileResult from './components/mobile/MobileResult';
import { Option, OptionOrNull, SetOption } from './types/options';
import { getSpecializationsByFaculty, getProfessionsBySpecializtion, getFaculties } from './api/OrganizationStructure';

function App() {
  const [facultyOptions, setFacultyOptions] = useState<Array<Option>>([]);
  const [faculty, setFaculty] = useState<OptionOrNull>(null);
  const [specializationOptions, setSpecializationOptions] = useState<Array<Option>>([]);
  const [isSpecializationDisabled, setIsSpecializationDisabled] = useState(true);
  const [specialization, setSpecialization] = useState<OptionOrNull>(null);
  const [professionOptions, setProfessionOptions] = useState<Array<Option>>([]);
  const [isProfessionDisabled, setIsProfessionDisabled] = useState(true);
  const [profession, setProfession] = useState<OptionOrNull>(null);
  const [isMobileFrom, setIsMobileForm] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      try{
        const facultyOptions = await getFaculties()
        setFacultyOptions(facultyOptions)
      } catch(error){
        alert((error as Error).message)
      }
    }
    getData()
  }, [])

  const setFacultyWithAsyncLoading: SetOption = async (faculty) => {
    setSpecialization(null)
    setIsSpecializationDisabled(true)
    setProfession(null)
    setIsProfessionDisabled(true)
    try {
      setFaculty(faculty)
      const specializationOptions = await getSpecializationsByFaculty(faculty)
      setIsSpecializationDisabled(false)
      setSpecializationOptions(specializationOptions)
    } catch (error) {
      alert((error as Error).message)
    }
  }

  const setSpecializationWithAsyncLoading: SetOption = async (specialization) => {
    setProfession(null)
    setIsProfessionDisabled(true)
    try {
      setSpecialization(specialization)
      const professionOptions = await getProfessionsBySpecializtion(specialization)
      setIsProfessionDisabled(false)
      setProfessionOptions(professionOptions)
    } catch (error) {
      alert((error as Error).message)
    }
  }

  const backToForm = () => {
    setIsMobileForm(true)
  }

  return (
    <BasicLayout>
      {
        isMobileFrom?
        <MobileForm facultyOptions={facultyOptions} faculty={faculty} setFaculty={setFacultyWithAsyncLoading} specializationOptions={specializationOptions} isSpecializationDisabled={isSpecializationDisabled} specialization={specialization} setSpecialization={setSpecializationWithAsyncLoading} professionOptions={professionOptions} isProfessionDisabled={isProfessionDisabled} profession={profession} setProfession={setProfession}/>
        :
        <MobileResult goBack={backToForm} electiveGroups={[{name: "Профессиональные", items: [{title: "Базы данных", id: 1}, {title: "Базы данных", id: 2}, {title: "Базы данных", id: 3}]}, {name: "Общепрофессиональные", items: [{title: "Базы данных", id: 1}, {title: "Базы данных", id: 2}, {title: "Базы данных", id: 3}]}]}/>
      }
    </BasicLayout>
  );
}

export default App;

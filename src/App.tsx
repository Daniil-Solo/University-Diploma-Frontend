import {useState, useEffect} from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BasicLayout from './layouts/BasicLayout';
import MobileForm from './components/mobile/MobileForm';
import MobileResult from './components/mobile/MobileResult';
import { Option, OptionOrNull, SetOption } from './types/options';
import { ElectiveGroup } from './types/electives';
import { getSpecializationsByFaculty, getProfessionsBySpecializtion, getFaculties } from './api/OrganizationStructure';
import { getElectiveGroups } from './api/RankingOfElectives';
import DesktopView from './components/desktop/DesktopView';
import {isMobile} from 'react-device-detect';

function App() {
  const [facultyOptions, setFacultyOptions] = useState<Array<Option>>([]);
  const [faculty, setFaculty] = useState<OptionOrNull>(null);
  const [isFacultyDisabled, setIsFacultyDisabled] = useState(true);
  const [specializationOptions, setSpecializationOptions] = useState<Array<Option>>([]);
  const [isSpecializationDisabled, setIsSpecializationDisabled] = useState(true);
  const [specialization, setSpecialization] = useState<OptionOrNull>(null);
  const [professionOptions, setProfessionOptions] = useState<Array<Option>>([]);
  const [isProfessionDisabled, setIsProfessionDisabled] = useState(true);
  const [profession, setProfession] = useState<OptionOrNull>(null);
  const [isMobileForm, setIsMobileForm] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [electiveGroups, setElectiveGroups] = useState<Array<ElectiveGroup>>([]); 

  useEffect(() => {
    const getData = async () => {
      try{
        const facultyOptions = await getFaculties()
        setIsFacultyDisabled(false)
        setFacultyOptions(facultyOptions)
      } catch(error){
        showWarning((error as Error).message)
      }
    }
    getData()
  }, [])

  const showWarning = (message: string): void => {
    toast(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

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
      showWarning((error as Error).message)
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
      showWarning((error as Error).message)
    }
  }

  const showResults = async () => {
    setIsLoading(true)
    setIsFacultyDisabled(true)
    setIsSpecializationDisabled(true)
    setIsProfessionDisabled(true)

    try {
      const electiveGroupsResults = await getElectiveGroups(specialization, profession)
      setElectiveGroups(electiveGroupsResults)
      setIsMobileForm(false)
    } catch (error) {
      showWarning((error as Error).message)
    }

    setIsLoading(false)
    setIsFacultyDisabled(false)
    setIsSpecializationDisabled(false)
    setIsProfessionDisabled(false)
  }

  const backToForm = () => {
    setIsMobileForm(true)
  }

  return (
    <BasicLayout>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
      {
        isMobile?
          isMobileForm?
            <MobileForm goToResults={showResults} isLoading={isLoading} facultyOptions={facultyOptions} faculty={faculty} isFacultyDisabled={isFacultyDisabled} setFaculty={setFacultyWithAsyncLoading} specializationOptions={specializationOptions} isSpecializationDisabled={isSpecializationDisabled} specialization={specialization} setSpecialization={setSpecializationWithAsyncLoading} professionOptions={professionOptions} isProfessionDisabled={isProfessionDisabled} profession={profession} setProfession={setProfession}/>
          :
            <MobileResult goBack={backToForm} electiveGroups={electiveGroups}/>
        :
        <DesktopView goToResults={showResults} isLoading={isLoading} facultyOptions={facultyOptions} faculty={faculty} isFacultyDisabled={isFacultyDisabled} setFaculty={setFacultyWithAsyncLoading} specializationOptions={specializationOptions} isSpecializationDisabled={isSpecializationDisabled} specialization={specialization} setSpecialization={setSpecializationWithAsyncLoading} professionOptions={professionOptions} isProfessionDisabled={isProfessionDisabled} profession={profession} setProfession={setProfession} electiveGroups={electiveGroups}/>
      }
    </BasicLayout>
  );
}

export default App;

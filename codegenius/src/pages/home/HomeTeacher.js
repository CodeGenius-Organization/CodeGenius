import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { toast } from "react-toastify";

import api from "../../Api";

import {
    MdArrowBackIosNew,
    MdOutlineLocalLibrary,
    MdOutlinePerson,
    MdOutlineEditOff,
    MdOutlineSettings,
    MdHelpOutline,
    MdLogout
} from "react-icons/md";
import { IoBarChartSharp } from "react-icons/io5";
import codegenius from "../../img/codegenius.svg";

import LandingPage from "../student/landing-page/LandingPage";
import CourseCreation from '../../pages/teacher/CourseCreation';
import Profile from "../../components/student-profile/Profile";
import Contact from "../form-contact/Contact";
import Social from "../student-social/Social";
import Courses from "../student/courses/Courses";
import Configurtion from "../teacher/teacher-settings/Configuration";
import ModuleCreation from "../teacher/ModuleCreation";
import ImportExport from "../teacher/teacher-import-txt/ImportExport";

function LogOut() {
    const navigate = useNavigate();
    const [menuToggle, setMenuToggle] = useState(false)
    const [navigateMenu, setNavigateMenu] = useState('cursos')
    const [contentHome, setContentHome] = useState(<LandingPage />);
    const [emailUser, setEmailUser] = useState();
    const [token, setToken] = useState();

    const [courseTitle, setCourseTitle] = useState();
    const [courseDescription, setCourseDescription] = useState();
    const [courseLanguages, setCourseLanguages] = useState('Java');
    const [courseCategories, setCourseCategories] = useState('Desenvolvimento');
    const [modules, setModules] = useState([]);
    
    // sessionStorage.setItem("authToken", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ2aWN0b3JAZ21haWwuY29tIiwiaXNzIjoiQVBJIENvZGUgR2VuaXVzIiwiZXhwIjoxNzAxNzMxMDU2fQ.5B6KDMJtFfHA3rHrFhFzm0nEETW0ENL1wrsT37hdH3s")
    
    function navigateLeft(option) {
        switch (option) {
            case 'cursos':
                setNavigateMenu('cursos')
                setContentHome(<LandingPage />)
                break;
            case 'criar-editar-cursos':
                setNavigateMenu('criar-editar-cursos')
                setContentHome(<CourseCreation 
                                onNext={ handleNext } 
                                onTitleChange={ handleTitleChange }
                                onDescriptionChange={ handleDescriptionChange }
                                />)
                break;
            case 'analise':
                setNavigateMenu('analise')
                setContentHome(<Social />)
                break;
            case 'profile':
                setNavigateMenu('profile')
                setContentHome(<Profile />)
                break;
            case 'settings':
                setNavigateMenu('settings')
                setContentHome(<Configurtion />)
                break;
            case 'contact':
                setNavigateMenu('contact')
                setContentHome(<Contact />)
                break;
            default:
                setNavigateMenu('cursos')
                setContentHome(<LandingPage />)
        }
    }

    const handleNext = (nextPage) => {
        switch (nextPage) {
            case 'create-module':
                setContentHome(<ModuleCreation 
                                onNext={handleNext}
                                onFinish={handleFinish}
                                />)
                break;
            case 'importar-exportar':
                setContentHome(<ImportExport />)
                break;
        }
    }

    const getCategoryId = async () => {
        try {
            const response = await
            api.get(`course/categories/${courseCategories}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem("authToken")}`
                }
            });

            if (response.status === 200) {
                return response.data.id;
            }
        } catch (error) {
            throw new Error("Ocorreu um erro interno")
        }
    }
    
    const getLanguageId = async () => {
        try {
            const response = await
            api.get(`course/languages/${courseLanguages}`,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem("authToken")}`
                }
            });

            if (response.status === 200) {
                return response.data.id;
            }
        } catch (error) {
            throw new Error("Ocorreu um erro interno")
        }
    }

    const postCourse = async (courseInfo) => {
        console.log(courseInfo)
        try {
            const response = await
            api.post(`course/courses/`,
            courseInfo,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem("authToken")}`
                }
            });

            if (response.status === 201) {
                return response.data.id;
            }
        } catch (error) {
            console.log(error)
            throw new Error("Ocorreu um erro interno")
        }
    }

    const postModule = async (moduleInfo) => {
        console.log("Entrei no post do módulo")
        try {
            const response = await
            api.post(`course/modules/`,
            moduleInfo,
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem("authToken")}`
                }
            });

            if (response.status === 201) {
                return 1;
            }
        } catch (error) {
            console.log(error)
            throw new Error("Ocorreu um erro interno")
        } 
    }
    
    const handleFinish = async (modules) => {
        try {
            const categoryId = await getCategoryId();
            const languageId = await getLanguageId();
    
            const courseInfo = {
                title: sessionStorage.getItem("courseTitle"),
                courseDescription: sessionStorage.getItem("courseDescription"),
                contentDescription: "Descrição do conteúdo muito bacana, você vai aprender muito neste curso!",
                available: true,
                languageIds: [languageId],
                categoryIds: [categoryId]
            };
    
            const newCourseId = await postCourse(courseInfo);
            
            await setModules(modules);
            let success = true;

            for (let index = 0; index < modules.length; index++) {
                const module = modules[index];
                const moduleInfo = {
                    "courseId": newCourseId,
                    "moduleName": module,
                    "moduleOrder": index + 1
                };
    
                const result = await postModule(moduleInfo);
                
                if (!result) {
                    success = false;
                    break;
                }
            }
    
            if (success) {
                toast.success("Curso criado com sucesso!");
                setTimeout(() => {
                    setContentHome(<LandingPage />);
                }, 2500);
            } else {
                toast.error("Houve uma falha na criação do curso");
            }
        } catch (error) {
            console.error(error);
            // Trate o erro aqui
        }
    };
    

    const handleTitleChange = (title) => {
        sessionStorage.setItem("courseTitle", title)
        setCourseTitle(title);
    }

    const handleDescriptionChange = (description) => {
        sessionStorage.setItem("courseDescription", description)
        setCourseDescription(description);
    }

    function handleLogout() {
        sessionStorage.removeItem("authToken");
        sessionStorage.removeItem("dataUser");
        toast.success("Logout realizado com sucesso!")
        navigate("/institutional");
    }

    return (
        <>
            <div className="home-container">
                <div className={`menu-left ${menuToggle ? 'menu-toggle' : ''}`}>
                    <div className="logo-container">
                        <div className={`logo-content ${menuToggle ? 'center-items' : ''}`}>
                            <img src={codegenius} className="logo"></img>
                            <div className={`${menuToggle ? 'text-toggle' : ''}`}>
                                <h3>CodeGenius</h3>
                                <p>version 1.0</p>
                            </div>
                        </div>
                        <div className="arrow-container" onClick={() => {
                            setMenuToggle(!menuToggle)
                        }}>
                            <MdArrowBackIosNew className={`arrow-menu ${menuToggle ? 'arrow-toggle' : ''}`} />
                        </div>
                    </div>

                    <div className="list-menu-group">
                        <div className={`list-menu-container`}>
                            <h4>APRENDIZADO</h4>
                            <ul>
                                <li className={`${navigateMenu === 'cursos' ? 'active' : ''}`} onClick={() => {

                                    navigateLeft('cursos')
                                }}>
                                    <MdOutlineLocalLibrary className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                                    <p className={`${menuToggle ? 'text-toggle' : ''}`}>CURSOS</p>
                                </li>
                                <li className={`${navigateMenu === 'criar-editar-cursos' ? 'active' : ''}`} onClick={() => {

                                    navigateLeft('criar-editar-cursos')
                                }}>
                                    <MdOutlineEditOff className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                                    <p className={`${menuToggle ? 'text-toggle' : ''}`}>CRIAR/EDITAR CURSOS</p>
                                </li>
                                <li className={`${navigateMenu === 'analise' ? 'active' : ''}`} onClick={() => {

                                    navigateLeft('analise')
                                }}>
                                    <IoBarChartSharp className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                                    <p className={`${menuToggle ? 'text-toggle' : ''}`}>ANÁLISE</p>
                                </li>
                            </ul>
                        </div>

                        <div className={`list-menu-container`}>
                            <h4>SUA ÁREA</h4>
                            <ul>
                                <li className={`${navigateMenu === 'profile' ? 'active' : ''}`} onClick={() => {

                                    navigateLeft('profile')
                                }}>
                                    <MdOutlinePerson className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                                    <p className={`${menuToggle ? 'text-toggle' : ''}`}>PERFIL</p>
                                </li>
                                <li className={`${navigateMenu === 'settings' ? 'active' : ''}`} onClick={() => {

                                    navigateLeft('settings')
                                }}>
                                    <MdOutlineSettings className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                                    <p className={`${menuToggle ? 'text-toggle' : ''}`}>CONFIGURAÇÃO</p>
                                </li>
                                <li className={`${menuToggle ? 'center-items' : ''} cursor-none`}>
                                    <input id="toggle" className={`toggle `} type="checkbox"></input>
                                    <label htmlFor="toggle"></label>
                                </li>
                            </ul>
                        </div>

                        <div className={`list-menu-container flex-end-style`}>
                            <ul>
                                <li className={`${navigateMenu === 'contact' ? 'active' : ''}`} onClick={() => {

                                    navigateLeft('contact')
                                }}>
                                    <MdHelpOutline className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                                    <p className={`${menuToggle ? 'text-toggle' : ''}`}>FALE CONOSCO</p>
                                </li>
                                <li onClick={() => handleLogout()}>
                                    <MdLogout className={`logo-item-list ${menuToggle ? 'center-items' : ''}`} />
                                    <p className={`${menuToggle ? 'text-toggle' : ''}`}>SAIR</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="logout-container">
                    {contentHome}
                    {/* <CourseCreation /> */}
                </div>
            </div>
        </>
    );
}

export default LogOut;
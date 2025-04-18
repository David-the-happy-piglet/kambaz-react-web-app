import { FormControl, ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";

import { setModules, addModule, editModule, updateModule, deleteModule }
    from "./reducer";
import { useSelector, useDispatch } from "react-redux";

import { useParams } from "react-router";
// import * as db from "../../Database";
import { useState, useEffect } from "react";
import { isFaculty } from "../../Account/reducer";
import * as coursesClient from "../client";
import * as modulesClient from "./client";


export default function Modules() {

    const { cid } = useParams();

    // const [modules, setModules] = useState<any[]>(db.modules);

    const [moduleName, setModuleName] = useState("");
    const { currentUser } = useSelector((state: any) => state.accountReducer);// get the current user from the store
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const dispatch = useDispatch();

    const addModuleHandler = async () => {
        const newModule = await coursesClient.createModuleForCourse(cid!, {
            name: moduleName,
            course: cid,
        });
        dispatch(addModule(newModule));
        setModuleName("");
    };

    const deleteModuleHandler = async (moduleId: string) => {
        await modulesClient.deleteModule(moduleId);
        dispatch(deleteModule(moduleId));
    };

    const updateModuleHandler = async (module: any) => {
        await modulesClient.updateModule(module);
        dispatch(updateModule(module));
    };


    /*     const saveModule = async (module: any) => {
            await modulesClient.updateModule(module);
            dispatch(updateModule(module));
        };
    
    
        const removeModule = async (moduleId: string) => {
            await modulesClient.deleteModule(moduleId);
            dispatch(deleteModule(moduleId));
        };
    
    
        const createModuleForCourse = async () => {
            if (!cid) return;
            const newModule = { name: moduleName, course: cid };
            const module = await coursesClient.createModuleForCourse(cid, newModule);
            dispatch(addModule(module));
        };
     */

    /*  const fetchModules = async () => {
         const modules = await coursesClient.findModulesForCourse(cid as string);
         dispatch(setModules(modules));
     };
     useEffect(() => {
         fetchModules();
     }, []); */

    const fetchModulesForCourse = async () => {
        const modules = await coursesClient.findModulesForCourse(cid!);
        dispatch(setModules(modules));
    };
    useEffect(() => {
        fetchModulesForCourse();
    }, [cid]);




    // const addModule = () => {
    //     setModules([...modules, { _id: uuidv4(), name: moduleName, course: cid, lessons: [] }]);
    //     setModuleName("");
    // };

    // const deleteModule = (moduleId: string) => {
    //     setModules(modules.filter((m) => m._id !== moduleId));
    // };

    // const editModule = (moduleId: string) => {
    //     setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));
    // };

    // const updateModule = (module: any) => {
    //     setModules(modules.map((m) => (m._id === module._id ? module : m)));
    // };



    /* console.log(useParams()) */

    return (
        <div>

            {isFaculty(currentUser) && (
                <>
                    <ModulesControls setModuleName={setModuleName} moduleName={moduleName} addModule={addModuleHandler}/* {() => {
                        dispatch(addModule({ name: moduleName, course: cid }));
                        setModuleName("");
                    }} */ />
                    <br /><br /><br />

                </>
            )
            }

            <ListGroup className="rounded-0" id="wd-modules">


                <ul id="wd-modules" className="list-group rounded-0">
                    {modules
                        /* .filter((module: any) => module.course === cid) */
                        .map((module: any) => (
                            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray" key={module._id}>

                                {currentUser?.role === "FACULTY" ? (
                                    <div className="wd-title p-3 ps-2 bg-secondary">

                                        <BsGripVertical className="me-2 fs-3" />
                                        {!module.editing && module.name}
                                        {module.editing && (
                                            <FormControl className="w-50 d-inline-block"

                                                onChange={(e) => updateModuleHandler({ ...module, name: e.target.value })}
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter") {
                                                        updateModuleHandler({ ...module, editing: false });

                                                    }
                                                }}

                                                defaultValue={module.name} />
                                        )}

                                        <ModuleControlButtons moduleId={module._id}
                                            deleteModule={(moduleId) => deleteModuleHandler(moduleId)}

                                            /* deleteModule={(moduleId) => removeModule(moduleId)} */
                                            editModule={(moduleId) => dispatch(editModule(moduleId))} />
                                    </div>

                                ) : (
                                    <div className="wd-title p-3 ps-2 bg-secondary">

                                        <BsGripVertical className="me-2 fs-3" />

                                        {module.name}

                                    </div>
                                )}


                                {module.lessons && (
                                    <ul className="wd-lessons list-group rounded-0">
                                        {module.lessons.map((lesson: any) => (
                                            <li className="wd-lesson list-group-item p-3 ps-1" key={lesson._id}>
                                                <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                                            </li>
                                        ))}
                                    </ul>)}

                            </li>))}
                </ul>



                {/*                 {modules
                    .filter((module: any) => module.course === cid)
                    .map((module: any) => (

                        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary"><BsGripVertical className="me-2 fs-3" /> {module.name}  <ModuleControlButtons /></div>
                            <ListGroup className="wd-lessons rounded-0">

                                {module.lessons && (

                                    <ListGroup.Item className="wd-lesson p-3 ps-2 bg-secondary">
                                        <BsGripVertical className="me-2 fs-3" />  {module.lessons.name} <LessonControlButtons />

                                    </ListGroup.Item>)}

                            </ListGroup>
                        </ListGroup.Item>
                    ))
                } */}

            </ListGroup >

        </div >
    );
}

{/* < ListGroup.Item className = "wd-module p-0 mb-5 fs-5 border-gray" >

                    <div className="wd-title p-3 ps-2 bg-secondary"><BsGripVertical className="me-2 fs-3" /> Week 2 <ModuleControlButtons />
                    </div>
                    <ListGroup className="wd-lessons rounded-0">
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> LESSON 1<LessonControlButtons />
                        </ListGroup.Item>
                        <ListGroup.Item className="wd-lesson p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" /> LESSON 2 <LessonControlButtons />
                        </ListGroup.Item>
                    </ListGroup>
                </ListGroup.Item> */}








{/* <button>Collapse All</button>
            <button>View Progress</button>
            <select id="publish-options" name="options">
                <option>Publish All</option>
                <option>Publish 1</option>
                <option>Publish 1</option>
            </select>
            <button>+ Module</button>
            <ul id="wd-modules">
                <li className="wd-module">
                    <div className="wd-title">Week 1</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 2</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                        </li>
                    </ul>
                </li>
            </ul>
 */}


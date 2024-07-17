import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useState, useEffect } from "react";
import * as client from "./client";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
    const { cid } = useParams();
    const [moduleName, setModuleName] = useState("");
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const [moduleError, setModuleError] = useState(null);
    const dispatch = useDispatch();

    const saveModule = async (module: any) => {
        await client.updateModule(module);
        dispatch(updateModule(module));
    };

    const removeModule = async (moduleId: string) => {
        try {
            await client.deleteModule(moduleId);
            dispatch(deleteModule(moduleId));
        }
        catch (error: any) {
            console.log(error)
            setModuleError(error.response.data.message);
        }
    };

    const createModule = async (module: any) => {
        const newModule = await client.createModule(cid as string, module);
        dispatch(addModule(newModule));
    };

    const fetchModules = async () => {
        const modules = await client.findModulesForCourse(cid as string);
        dispatch(setModules(modules));
    };
    useEffect(() => {
        fetchModules();
    }, []);

    return (
        <div id="wd-modules">
            <ModulesControls
                setModuleName={setModuleName}
                moduleName={moduleName}
                addModule={() => {
                    createModule({ name: moduleName, course: cid });
                    setModuleName("");
                }}
            />
            < br /><br /><br /><br /><br /><br />
            {moduleError &&
                <div id="wd-error-message" className="alert alert-danger mb-2 mt-2">{moduleError}</div>
            }
            <ul id="wd-modules" className="list-group rounded-0 pt-3">
                {modules
                    .filter((module: any) => module.course === cid)
                    .map((module: any) => (
                        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className="me-2 fs-3" />
                                {!module.editing && module.name}
                                {module.editing && (
                                    <input className="form-control w-50 d-inline-block"
                                        onChange={(e) => saveModule({ ...module, name: e.target.value })
                                        }
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                saveModule({ ...module, editing: false });
                                            }
                                        }}
                                        value={module.name} />
                                )}
                                <ModuleControlButtons
                                    moduleId={module._id}
                                    deleteModule={(moduleId) => {
                                        removeModule(moduleId);
                                    }}
                                    editModule={(moduleId) => dispatch(editModule(moduleId))}

                                />
                            </div>
                            {module.lessons && (
                                <ul className="list-group rounded-0 border-start border-3 border-success">
                                    {module.lessons.map((lesson: any) => (
                                        <li className="wd-lesson list-group-item p-3 ps-1">
                                            <BsGripVertical className="me-2 fs-3" />
                                            {lesson.name}
                                            <LessonControlButtons />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
            </ul>
        </div>
    );
}


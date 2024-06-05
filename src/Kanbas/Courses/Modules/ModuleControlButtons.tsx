import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

export default function LessonControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <FaPlus className="mb-1 ms-1"/>
      <IoEllipsisVertical className="fs-4" />
    </div>
);}

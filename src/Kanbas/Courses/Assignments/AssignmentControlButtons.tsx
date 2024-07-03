import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";

export default function AssignmentControlButtons(
  { assignmentId, deleteAssignment }: {
    assignmentId: string,
    deleteAssignment: (assignmentId: string) => void
  }
) {
  return (
    <div className="float-end d-flex align-items-center">
      <FaTrash className="text-danger fs-5 mx-2" onClick={() => deleteAssignment(assignmentId)} />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-3" />
    </div>
  );
}


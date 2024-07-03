import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import AssignmentDeleteModal from "./AssignmentDeleteModal";

export default function AssignmentControlButtons(
  { assignmentId, deleteAssignment }: {
    assignmentId: string,
    deleteAssignment: (assignmentId: string) => void
  }
) {
  return (
    <div className="float-end d-flex align-items-center">
      <FaTrash className="text-danger fs-5 mx-2" data-bs-toggle="modal" data-bs-target="#wd-delete-assignment-dialog" />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-3" />
      <AssignmentDeleteModal dialogTitle={`Delete confirmation`} assignmentId={assignmentId} deleteAssignment={deleteAssignment} />
    </div>
  );
}


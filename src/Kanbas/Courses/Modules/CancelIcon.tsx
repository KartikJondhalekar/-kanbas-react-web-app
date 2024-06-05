import { FaBan, FaCircle } from "react-icons/fa";
import { MdOutlineUnpublished } from "react-icons/md";

export default function CancelIcon() {
    return (
        <span className="me-1 position-relative">
            <FaBan style={{ top: "2px" }}
                className="text-black me-1 position-absolute fs-5" />
            <FaCircle className="text-white me-1 fs-6" />
        </span>
    );
}
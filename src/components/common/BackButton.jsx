
import {ArrowLeft} from 'lucide-react'
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div
      className="flex items-center gap-1"
      style={{ marginLeft: "-12px" }}
    >
      <button
        className="p-2 hover:bg-gray-200 rounded-full cursor-pointer"
        onClick={handleBack}
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      <span className="text-lg font-medium">
        Back
      </span>
    </div>
  );
};

export default BackButton
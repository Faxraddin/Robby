import "./Form.css";
import Select from "./Select";
import UploadField from "./UploadField";
import RightPart from './RightPart/RightPart';

const Form = () => {
  return (
    <div style={{display:'flex'}}>
      <div className="main_form_div">
        <Select fields={["React", "Node"]} />
        <hr style={{ width: "300px" }} />
        <p className="upload_heading">
          Select a manifest that you'd like to import
        </p>
        <UploadField />
      </div>
      <RightPart/>
    </div>
  );
};
export default Form;

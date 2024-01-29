import "./Form.css";
import Select from "./Select";
import UploadField from "./UploadField";
import RightPart from './RightPart/RightPart';

const Form = () => {
  return (
    <div style={{ display: "flex" }}>
      <div className="main_form_div">
        <Select fields={["React", "Node"]} />
        <div style={{height:0.1,width:'100%',border:'gray thin solid'}}></div>
        <div style={{display:'flex',flexDirection:'column',width:'820px'}}>
          <p className="upload_heading">
            Select a manifest that you'd like to import
          </p>
          <UploadField />
        </div>
      </div>
      <RightPart />
    </div>
  );
};
export default Form;

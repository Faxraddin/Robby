import DocumentUpload from "./components/DocumentUpload";
import Form from "./components/Form";
import RightPart from "./components/RightPart/RightPart";

const App = () => {
  return (
    <div className="app">
      <div className="app-container">
        <div className="app-p1">
          <DocumentUpload />
          <Form />
        </div>
      </div>
    </div>
  );
};
export default App;

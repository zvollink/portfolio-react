import { tools } from "../constants";

/**
 * An on-screen tool belt to showcase my skills.
 */
const Tools = () => {
  return (
    <div id="tools" className="resume-section">
      <h4>Tools</h4>

      <span className="experience">
        <div id='tool-belt'>
          {Object.entries(tools).map(([tool, toolInfo]) =>
            <span key={tool} className="tool">{toolInfo.title}</span>
          )}
        </div>
      </span>
    </div>
  );
};

export default Tools;
import React from "react";
import "../../Settings.scss";
const ApiKeys = () => {
  return (
    <div className="api-keys">
      <div>
        <p>Add your own OpenAI key </p>
      </div>
      <div className="inner-input">
        <div>
          <label>OpenAI key</label> <br />
          <input type="text" placeholder="  Key"></input>
        </div>
        <div>
          <label>OpenAI key</label> <br />
          <select>
            <option>Select a GPT modal</option>
            <option>GPT-4</option>
            <option>GPT-5</option>
            <option>GPT-6</option>
          </select>
        </div>
      </div>
      <div>
        <button>Save key</button>
      </div>
    </div>
  );
};

export default ApiKeys;

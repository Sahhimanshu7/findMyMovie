import { useEffect, useState } from "react";
import axios from "axios";

const AISearch = () => {
  const [output, setOutput] = useState("");
  const [userPrompt, setUserPrompt] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const getResult = async() => {
        const result = await axios.post("http://localhost:8000/api/ai/get-ai-result", {
          userPrompt: userPrompt
        })
        console.log(result);
        setOutput(result);
      }
      getResult();
    } catch (error) {
      console.log(error);
    }
  }
    
  return (
    <section>
      <div>
        <h1>
          Find movies based on the plot you vaguely remember.
        </h1>
        <div>
          <form 
            onSubmit={handleSubmit}
            className=""
          >
            <textarea name="userPrompt" placeholder="Enter your plot." onChange={(e) => setUserPrompt(e.target.value)}/>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AISearch
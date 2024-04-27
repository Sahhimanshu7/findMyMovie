import { useState } from "react";
import { useForm } from "react-hook-form";

const AISearch = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  if(data !== ""){
    console.log(data);
  }

  return (
    <section>
      <div>
        <h1>
          Find movies based on the plot you vaguely remember.
        </h1>
        <div>
          <form 
            onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
            className=""
          >
            <textarea {...register("userPrompt")} placeholder="Enter your plot." />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AISearch
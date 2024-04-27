import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export const aiChat = async(req, res) => {
  const userPrompt = req.body.userPrompt;

  try {
    const input = {
      debug: false,
      top_k: 50,
      top_p: 1,
      prompt: userPrompt,
      temperature: 0.5,
      system_prompt: "You are a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe. Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature.\n\nIf a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information. Also answer in only one word",
      max_new_tokens: 500,
      min_new_tokens: -1
    };

    // for await (const event of replicate.stream("meta/llama-2-70b-chat", { input })) {
    //   process.stdout.write(event.toString());
    //   movieName = event.toString();
    // };

    // const movieName = await replicate.stream("meta/llama-2-70b-chat", { input });

    console.log("Running the model...");
    // const movieName = await replicate.run(
    //   "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
    //   {
    //     input: {
    //       prompt: "An astronaut riding a rainbow unicorn, cinematic, dramatic",
    //     }
    //   }
    // );

    const movieName = await replicate.run("meta/llama-2-70b-chat", { input });

    console.log(movieName.toString().replace(/[^a-zA-Z ]/g, ""));
    res.status(200).json(movieName.toString().replace(/[^a-zA-Z ]/g, ""));
  } catch (error) {
    console.log(error);
  }
}
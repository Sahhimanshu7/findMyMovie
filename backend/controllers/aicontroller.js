import { LLM } from "llama-node";
import { LLMRS } from "llama-node/dist/llm/llm-rs.js";
import path from "path";
const model = path.resolve(process.cwd(), "../ggml-alpaca-7b-q4.bin");
const llama = new LLM(LLMRS);
const template = `how are you`;
const prompt = `Below is an instruction that describes a task. Write a response that appropriately completes the request.`

export const aiChat = async(req, res) => {
  const userPrompt = req.body.userPrompt;

  try {
    const params = {
      prompt,
      numPredict: 128,
      temperature: 0.2,
      topP: 1,
      topK: 40,
      repeatPenalty: 1,
      repeatLastN: 64,
      seed: 0,
      feedPrompt: true,
  };
  const run = async () => {
      const abortController = new AbortController();
      await llama.load({ modelPath: model, modelType: "Llama" /* ModelType.Llama */ });
      setTimeout(() => {
          abortController.abort();
      }, 3000);
      try {
          await llama.createCompletion(params, (response) => {
              process.stdout.write(response.token);
          }, abortController.signal);
      }
      catch (e) {
          console.log(e);
      }
  };
  run();
  } catch (error) {
    console.log(error);
  }
}
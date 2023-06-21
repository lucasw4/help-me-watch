import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: "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",
});

export const openai = new OpenAIApi(configuration);

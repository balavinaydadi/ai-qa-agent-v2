import { callLLM } from "../agent/llmService";

export async function analyzeFailure(error: string) {
  const prompt = `
Analyze this test failure and provide:
1. Root cause
2. Fix suggestion

Error:
${error}
`;

  return await callLLM(prompt);
}
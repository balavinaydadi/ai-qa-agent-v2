import { callLLM } from "../agent/llmService";

export async function healLocator(html: string, failedLocator: string) {
  const prompt = `
The following Playwright locator failed: ${failedLocator}

Here is DOM:
${html}

Suggest a better locator.
Return only locator.
`;

  const newLocator = await callLLM(prompt);
  return newLocator.trim();
}
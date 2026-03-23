import OpenAI from "openai";
import { ENV } from "../framework/env";
import dotenv from "dotenv";

dotenv.config();

let openai: OpenAI | null = null;

if (ENV.OPENAI_API_KEY) {
  openai = new OpenAI({
    apiKey: ENV.OPENAI_API_KEY,
  });
}

// ✅ THIS is the missing function
export async function callLLM(prompt: string): Promise<string> {
  if (!openai) {
    console.log("⚠️ AI disabled (no API key)");
    return "AI Disabled - Using fallback";
  }

  const response = await openai.chat.completions.create({
    model: ENV.OPENAI_MODEL,
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message.content || "";
}
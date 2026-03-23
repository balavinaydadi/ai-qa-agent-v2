import { jiraClient } from "./jiraClient";

export async function createBug(summary: string, description: string) {
  try {
    const response = await jiraClient.post("/issue", {
      fields: {
        project: { key: "PROJ" }, // change this
        summary,
        description,
        issuetype: { name: "Bug" },
      },
    });

    console.log("Bug created:", response.data.key);
  } catch (err) {
    console.error("Bug creation failed", err);
  }
}
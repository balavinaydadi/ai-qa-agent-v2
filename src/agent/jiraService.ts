export async function getJiraStory(issueKey: string): Promise<string> {
  // 🔹 For now (MVP) return mock
  return `
  User should login with valid username and password
  and see success message
  `;

  // 🔹 Later connect real Jira:
  // const res = await jiraClient.get(`/issue/${issueKey}`);
  // return res.data.fields.description;
}
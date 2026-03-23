export const PROMPTS = {
  generateFeature: (story: string) => `
Convert this user story into a Cucumber feature file.

Rules:
- Use Given/When/Then
- Keep steps reusable
- Focus on login functionality

User Story:
${story}
`,

  healLocator: (locator: string, dom: string) => `
Locator failed: ${locator}

DOM:
${dom}

Suggest a better Playwright selector.
Return only selector.
`,

  analyzeFailure: (error: string) => `
Analyze this Playwright failure:

${error}

Return:
1. Root cause
2. Fix suggestion
`,
};
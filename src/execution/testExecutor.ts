import { exec } from "child_process";

export function runTests(): Promise<void> {
  return new Promise((resolve, reject) => {
    exec("npm run bdd", (error, stdout, stderr) => {
      console.log(stdout);

      if (error) {
        console.error(stderr);
        reject(error);
      } else {
        resolve();
      }
    });
  });
}
import { exec } from "child_process";

export function runCucumber(): Promise<void> {
  return new Promise((resolve, reject) => {
    exec(
      "npx cucumber-js src/bdd/features --require src/bdd/step-definitions/**/*.ts",
      (err, stdout, stderr) => {
        console.log(stdout);

        if (err) {
          console.error(stderr);
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });
}
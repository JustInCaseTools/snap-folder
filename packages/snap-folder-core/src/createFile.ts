import { promises } from "fs";
import path from "path";
import { checkFileExists } from "./utils/checkFileExists";

/** Function to create a file. */
export async function createFile(
  folderPath: string,
  fileName: string,
  content: string
) {
  const filePath = path.join(folderPath, fileName);

  try {
    await promises.mkdir(folderPath, { recursive: true });

    if (await checkFileExists(filePath)) {
      throw new Error(
        `File ${filePath} already exists and overwrite is disabled`
      );
    }

    await promises.writeFile(filePath, content);
  } catch (error) {
    throw new Error(
      `Failed to create file ${filePath}: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

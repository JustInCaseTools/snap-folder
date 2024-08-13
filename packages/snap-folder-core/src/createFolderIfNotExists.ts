import { promises } from "fs";
import { checkFileExists } from "./utils/checkFileExists";

/** Function to create a folder if it doesn't exist. */
export async function createFolderIfNotExists(folderPath: string) {
  try {
    if (!(await checkFileExists(folderPath))) {
      await promises.mkdir(folderPath, { recursive: true });
    }
  } catch (error) {
    throw new Error(
      `Failed to create folder ${folderPath}: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
  }
}

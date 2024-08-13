import { promises } from "fs";

/** Function to check if a file exists. */
export async function checkFileExists(filePath: string): Promise<boolean> {
  try {
    await promises.stat(filePath);
    return true;
  } catch {
    return false;
  }
}

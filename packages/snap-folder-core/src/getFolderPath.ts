import { promises } from "fs";
import path from "path";

/**  Function to get the folder path from the URI. */
export async function getFolderPath(fsPath: string): Promise<string> {
  const stat = await promises.lstat(fsPath);
  return stat.isDirectory() ? fsPath : path.dirname(fsPath);
}

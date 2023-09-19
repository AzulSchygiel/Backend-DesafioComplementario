import path from "path";
import { fileURLToPath }from "url";

//dirname = src
export const __dirname = path.dirname(fileURLToPath(import.meta.url));

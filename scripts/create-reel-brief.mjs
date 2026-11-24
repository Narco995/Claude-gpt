import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const title = process.argv.slice(2).join(" ").trim();

if (!title) {
  console.error('Usage: npm run brief -- "Rainy night cafe"');
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .normalize("NFKD")
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "") || "untitled-reel";

const templatePath = path.join(root, "templates", "reel-brief.md");
const outputDir = path.join(root, "projects", slug);
const outputPath = path.join(outputDir, "reel-brief.md");

if (fs.existsSync(outputPath)) {
  console.error(`Brief already exists: ${outputPath}`);
  process.exit(1);
}

fs.mkdirSync(outputDir, { recursive: true });
const template = fs.readFileSync(templatePath, "utf8");
const brief = template.replaceAll("{{TITLE}}", title);
fs.writeFileSync(outputPath, brief, "utf8");

console.log(`Created Reel brief: ${path.relative(root, outputPath)}`);

import fs from "fs";
import path from "path";
import { glob } from "glob";

// Find all tsx files in src/pages (excluding _app.tsx)
const pageFiles = glob.sync("src/pages/**/*.tsx", {
  ignore: "src/pages/_app.tsx",
});

pageFiles.forEach((filePath) => {
  try {
    let content = fs.readFileSync(filePath, "utf8");
    let modified = false;

    // Remove import statements
    const imports = [
      /import\s+Navbar\s+from\s+["']@\/components\/Navbar["'];\s*\n/g,
      /import\s+Footer\s+from\s+["']@\/components\/Footer["'];\s*\n/g,
      /import\s+FloatingActionButtons\s+from\s+["']@\/components\/FloatingActionButtons["'];\s*\n/g,
    ];

    imports.forEach((importRegex) => {
      if (importRegex.test(content)) {
        content = content.replace(importRegex, "");
        modified = true;
      }
    });

    // Remove JSX usage (more complex patterns)
    const usagePatterns = [
      /<Navbar\s*\/>\s*\n?/g,
      /<Footer\s*\/>\s*\n?/g,
      /<FloatingActionButtons\s*\/>\s*\n?/g,
    ];

    usagePatterns.forEach((pattern) => {
      if (pattern.test(content)) {
        content = content.replace(pattern, "");
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Cleaned up: ${filePath}`);
    } else {
      console.log(`⏭️  No changes needed: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
});

console.log("🎉 Layout cleanup completed!");

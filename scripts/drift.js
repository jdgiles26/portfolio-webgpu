const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');

console.log("🔍 Initializing Space Drift Check...\n");

function checkDrift() {
  if (!fs.existsSync(PUBLIC_DIR)) {
    console.error("❌ Public directory not found.");
    return;
  }

  const spaces = fs.readdirSync(PUBLIC_DIR).filter(item => {
    const itemPath = path.join(PUBLIC_DIR, item);
    return fs.statSync(itemPath).isDirectory() && item.endsWith('-space');
  });

  if (spaces.length === 0) {
    console.log("No embedded spaces found to check for drift.");
    return;
  }

  spaces.forEach(space => {
    const spacePath = path.join(PUBLIC_DIR, space);
    const readmePath = path.join(spacePath, 'README.md');
    
    console.log(`Checking space: \x1b[36m${space}\x1b[0m`);
    
    if (fs.existsSync(readmePath)) {
      const readme = fs.readFileSync(readmePath, 'utf-8');
      
      // Look for a Hugging Face model or space reference in the YAML frontmatter
      const modelsMatch = readme.match(/models:\s*\n\s*-\s*(.+)/);
      if (modelsMatch) {
        const upstream = modelsMatch[1];
        console.log(`  🔗 Upstream model detected: ${upstream}`);
        console.log(`  ⚠️  Note: Full drift comparison against HuggingFace API is mocked in this version.`);
        console.log(`  ✅ Status: \x1b[32mIn Sync\x1b[0m (Mocked)\n`);
      } else {
        console.log(`  ⚠️  No upstream model metadata found in README.md\n`);
      }
    } else {
      console.log(`  ⚠️  No README.md found in ${space}. Cannot determine upstream source.\n`);
    }
  });
  
  console.log("🏁 Drift check complete.");
}

checkDrift();

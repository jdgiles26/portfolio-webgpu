const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const dirs = fs.readdirSync(publicDir);

for (const dir of dirs) {
  if (dir.endsWith('-space')) {
    const indexPath = path.join(publicDir, dir, 'index.html');
    if (fs.existsSync(indexPath)) {
      let content = fs.readFileSync(indexPath, 'utf-8');
      
      // Fix root absolute paths to relative paths
      content = content.replace(/(src|href)="\/assets\//g, '$1="./assets/');
      content = content.replace(/(src|href)="assets\//g, '$1="./assets/');
      content = content.replace(/(src|href)="\/([^"]+\.png|[^"]+\.svg|[^"]+\.ico)"/g, '$1="./$2"');
      
      // Additional safety for script/link tags
      content = content.replace(/(src|href)="\/([^"]+)"/g, (match, p1, p2) => {
          if (!p2.startsWith('http') && !p2.startsWith('.')) {
              return `${p1}="./${p2}"`;
          }
          return match;
      });

      fs.writeFileSync(indexPath, content);
      console.log(`Patched paths in ${dir}/index.html`);
    }
  }
}

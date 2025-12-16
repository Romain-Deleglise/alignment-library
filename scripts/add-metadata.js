const fs = require('fs');
const path = require('path');

// Mapping of difficulty levels to standardized format
const difficultyMap = {
  'Beginner': 'beginner',
  'beginner': 'beginner',
  'Intermediate': 'intermediate',
  'intermediate': 'intermediate',
  'Advanced': 'advanced',
  'advanced': 'advanced',
  'Expert': 'expert',
  'expert': 'expert',
  'Initiate': 'initiate',
  'initiate': 'initiate'
};

// Article metadata configuration
const articleMetadata = {
  // Introduction articles
  'introduction/what-is-alignment.mdx': {
    difficulty: 'beginner',
    readingTime: '10 min',
    tags: ['fundamentals', 'introduction', 'definition'],
    prerequisites: []
  },
  'introduction/why-urgent.mdx': {
    difficulty: 'beginner',
    readingTime: '15 min',
    tags: ['fundamentals', 'timeline', 'risk'],
    prerequisites: ['introduction/what-is-alignment']
  },
  'introduction/current-state.mdx': {
    difficulty: 'beginner',
    readingTime: '12 min',
    tags: ['fundamentals', 'current-ai', 'progress'],
    prerequisites: ['introduction/what-is-alignment']
  },
  // Outer alignment articles
  'problems/outer-alignment/specification.mdx': {
    difficulty: 'initiate',
    readingTime: '20 min',
    tags: ['outer-alignment', 'specification', 'reward-function'],
    prerequisites: ['introduction/what-is-alignment']
  },
  'problems/outer-alignment/reward-hacking.mdx': {
    difficulty: 'initiate',
    readingTime: '25 min',
    tags: ['outer-alignment', 'reward-hacking', 'examples'],
    prerequisites: ['problems/outer-alignment/specification']
  },
  'problems/outer-alignment/goodhart.mdx': {
    difficulty: 'initiate',
    readingTime: '18 min',
    tags: ['outer-alignment', 'goodhart', 'theory'],
    prerequisites: ['problems/outer-alignment/specification']
  },
  // Inner alignment articles
  'problems/inner-alignment/mesa-optimization.mdx': {
    difficulty: 'intermediate',
    readingTime: '30 min',
    tags: ['inner-alignment', 'mesa-optimization', 'theory'],
    prerequisites: ['problems/outer-alignment/specification']
  },
  'problems/inner-alignment/deceptive.mdx': {
    difficulty: 'intermediate',
    readingTime: '35 min',
    tags: ['inner-alignment', 'deceptive-alignment', 'risk'],
    prerequisites: ['problems/inner-alignment/mesa-optimization']
  },
  'problems/inner-alignment/proxy.mdx': {
    difficulty: 'intermediate',
    readingTime: '25 min',
    tags: ['inner-alignment', 'proxy-alignment', 'risk'],
    prerequisites: ['problems/inner-alignment/mesa-optimization']
  }
};

function updateMDXMetadata(filePath, metadata) {
  const fullPath = path.join(__dirname, '..', 'content', filePath);

  if (!fs.existsSync(fullPath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  const content = fs.readFileSync(fullPath, 'utf8');

  // Extract existing frontmatter
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!frontmatterMatch) {
    console.log(`No frontmatter found in: ${filePath}`);
    return;
  }

  const existingFrontmatter = frontmatterMatch[1];
  const bodyContent = content.slice(frontmatterMatch[0].length);

  // Parse existing frontmatter
  const frontmatterLines = existingFrontmatter.split('\n');
  const existingMeta = {};
  frontmatterLines.forEach(line => {
    const match = line.match(/^(\w+):\s*(.+)$/);
    if (match) {
      existingMeta[match[1]] = match[2].replace(/^["']|["']$/g, '');
    }
  });

  // Standardize difficulty
  if (existingMeta.difficulty && difficultyMap[existingMeta.difficulty]) {
    existingMeta.difficulty = difficultyMap[existingMeta.difficulty];
  }

  // Merge with new metadata
  const updatedMeta = { ...existingMeta, ...metadata };

  // Build new frontmatter
  let newFrontmatter = '---\n';
  newFrontmatter += `title: "${updatedMeta.title || existingMeta.title}"\n`;
  newFrontmatter += `description: "${updatedMeta.description || existingMeta.description}"\n`;
  newFrontmatter += `difficulty: "${updatedMeta.difficulty}"\n`;
  newFrontmatter += `readingTime: "${updatedMeta.readingTime}"\n`;
  newFrontmatter += `tags: ${JSON.stringify(updatedMeta.tags)}\n`;
  newFrontmatter += `prerequisites: ${JSON.stringify(updatedMeta.prerequisites)}\n`;
  newFrontmatter += '---';

  const newContent = newFrontmatter + bodyContent;

  fs.writeFileSync(fullPath, newContent, 'utf8');
  console.log(`✓ Updated: ${filePath}`);
}

// Update all articles
console.log('Adding metadata to MDX articles...\n');

Object.entries(articleMetadata).forEach(([filePath, metadata]) => {
  updateMDXMetadata(filePath, metadata);
});

console.log('\n✓ Metadata update complete!');

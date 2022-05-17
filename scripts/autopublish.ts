import path from 'path'
import { execaCommandSync as exec } from 'execa';
import { getProjectDir } from 'lionconfig';

// Publish versions 0.9999.0 -> 50.9999.0

const monorepoDir = getProjectDir(import.meta.url, { monorepoRoot: true });
const depignorePath = path.join(monorepoDir, 'ignoredep');

for (let majorVersion = 1; majorVersion <= 50; majorVersion += 1) {
	exec(`pnpm version ${majorVersion}.9999.0`, { cwd: depignorePath });
	exec('pnpm publish --no-git-checks', { cwd: depignorePath, stdio: 'inherit' });
}



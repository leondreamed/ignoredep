import path from 'node:path'
import { execaCommandSync as exec } from 'execa';
import { getProjectDir } from 'lionconfig';

const monorepoDir = getProjectDir(import.meta.url, { monorepoRoot: true });
const depignorePath = path.join(monorepoDir, 'ignoredep');

for (let majorVersion = 26; majorVersion <= 200; majorVersion += 1) {
	exec(`pnpm version ${majorVersion}.9999.0`, { cwd: depignorePath });
	exec('pnpm publish --no-git-checks', { cwd: depignorePath, stdio: 'inherit' });
}



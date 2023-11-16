import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import getDailyProblem from './leetcode/requests';

interface RandomLeetCodeSettings {
	randomLeetCodeSetting: string;
}

const DEFAULT_SETTINGS: RandomLeetCodeSettings = {
	randomLeetCodeSetting: 'default'
}

async function createDailyNote() {
    const problem = await getDailyProblem();
    console.log("Problem: ");
    console.log(problem);

    const fileContent = `
# [${problem.question.title}](https://leetcode.com${problem.link})

## Question

${problem.question.content}
`;

    try {
        const vault = this.app.vault;
        const filename = `${problem.date}.md`;
        const file = vault.getAbstractFileByPath(filename);

        if (file) {
            new Notice(`File ${filename} already exists`);

            vault.modify(file, fileContent);
            
            this.app.workspace.activeLeaf.openFile(file);

            return;
        } else {
            vault.create(filename, fileContent);

            new Notice(`File ${filename} created`);
        }
    } catch (error) {
        console.error('Error creating File: ', error.response?.data || error.message);
    }

    return filename;
}

export default class RandomLeetCode extends Plugin {
    settings: RandomLeetCodeSettings;

    async onload() {
		await this.loadSettings();
        const filename = await createDailyNote.bind(this)();

		const ribbonIconEl = this.addRibbonIcon('code', 'Random LeetCode Problem', (evt: MouseEvent) => {
            this.app.workspace.activeLeaf.openFile(filename);
            new Notice('Daily LeetCode Problem');
		});
    }

    onunload() {

    }

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}

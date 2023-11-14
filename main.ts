import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

interface RandomLeetCodeSettings {
	randomLeetCodeSetting: string;
}

const DEFAULT_SETTINGS: RandomLeetCodeSettings = {
	randomLeetCodeSetting: 'default'
}

export default class RandomLeetCode extends Plugin {
    settings: RandomLeetCodeSettings;

    async onload() {
		await this.loadSettings();

		const ribbonIconEl = this.addRibbonIcon('code', 'Random LeetCode Problem', (evt: MouseEvent) => {
			new Notice('Its a trick!');
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

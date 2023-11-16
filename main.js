/*
Random LeetCode Problem Dev
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => RandomLeetCode
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");

// src/leetcode/requests.ts
var GRAPHQL_ENDPOINT = "https://continuous-fire-archaeopteryx.glitch.me/leetcode/daily";
async function getDailyProblem() {
  var _a;
  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: "GET"
    });
    const data = await response.json();
    return data.data.activeDailyCodingChallengeQuestion;
  } catch (error) {
    console.error("Error fetching data:", ((_a = error.response) == null ? void 0 : _a.data) || error.message);
  }
}
var requests_default = getDailyProblem;

// src/main.ts
var DEFAULT_SETTINGS = {
  randomLeetCodeSetting: "default"
};
async function createDailyNote() {
  var _a;
  const problem = await requests_default();
  console.log("Problem: ");
  console.log(problem);
  const fileContent = `
# [${problem.question.title}](https://leetcode.com${problem.link})

## Question

${problem.question.content}
`;
  try {
    const vault = this.app.vault;
    const filename2 = `${problem.date}.md`;
    const file = vault.getAbstractFileByPath(filename2);
    if (file) {
      new import_obsidian.Notice(`File ${filename2} already exists`);
      vault.modify(file, fileContent);
      this.app.workspace.activeLeaf.openFile(file);
      return;
    } else {
      vault.create(filename2, fileContent);
      new import_obsidian.Notice(`File ${filename2} created`);
    }
  } catch (error) {
    console.error("Error creating File: ", ((_a = error.response) == null ? void 0 : _a.data) || error.message);
  }
  return filename;
}
var RandomLeetCode = class extends import_obsidian.Plugin {
  async onload() {
    await this.loadSettings();
    const filename2 = await createDailyNote.bind(this)();
    const ribbonIconEl = this.addRibbonIcon("code", "Random LeetCode Problem", (evt) => {
      this.app.workspace.activeLeaf.openFile(filename2);
      new import_obsidian.Notice("Daily LeetCode Problem");
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
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiLCAic3JjL2xlZXRjb2RlL3JlcXVlc3RzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBBcHAsIEVkaXRvciwgTWFya2Rvd25WaWV3LCBNb2RhbCwgTm90aWNlLCBQbHVnaW4sIFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmcgfSBmcm9tICdvYnNpZGlhbic7XG5pbXBvcnQgZ2V0RGFpbHlQcm9ibGVtIGZyb20gJy4vbGVldGNvZGUvcmVxdWVzdHMnO1xuXG5pbnRlcmZhY2UgUmFuZG9tTGVldENvZGVTZXR0aW5ncyB7XG5cdHJhbmRvbUxlZXRDb2RlU2V0dGluZzogc3RyaW5nO1xufVxuXG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBSYW5kb21MZWV0Q29kZVNldHRpbmdzID0ge1xuXHRyYW5kb21MZWV0Q29kZVNldHRpbmc6ICdkZWZhdWx0J1xufVxuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVEYWlseU5vdGUoKSB7XG4gICAgY29uc3QgcHJvYmxlbSA9IGF3YWl0IGdldERhaWx5UHJvYmxlbSgpO1xuICAgIGNvbnNvbGUubG9nKFwiUHJvYmxlbTogXCIpO1xuICAgIGNvbnNvbGUubG9nKHByb2JsZW0pO1xuXG4gICAgY29uc3QgZmlsZUNvbnRlbnQgPSBgXG4jIFske3Byb2JsZW0ucXVlc3Rpb24udGl0bGV9XShodHRwczovL2xlZXRjb2RlLmNvbSR7cHJvYmxlbS5saW5rfSlcblxuIyMgUXVlc3Rpb25cblxuJHtwcm9ibGVtLnF1ZXN0aW9uLmNvbnRlbnR9XG5gO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgdmF1bHQgPSB0aGlzLmFwcC52YXVsdDtcbiAgICAgICAgY29uc3QgZmlsZW5hbWUgPSBgJHtwcm9ibGVtLmRhdGV9Lm1kYDtcbiAgICAgICAgY29uc3QgZmlsZSA9IHZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChmaWxlbmFtZSk7XG5cbiAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoYEZpbGUgJHtmaWxlbmFtZX0gYWxyZWFkeSBleGlzdHNgKTtcblxuICAgICAgICAgICAgdmF1bHQubW9kaWZ5KGZpbGUsIGZpbGVDb250ZW50KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLmFjdGl2ZUxlYWYub3BlbkZpbGUoZmlsZSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhdWx0LmNyZWF0ZShmaWxlbmFtZSwgZmlsZUNvbnRlbnQpO1xuXG4gICAgICAgICAgICBuZXcgTm90aWNlKGBGaWxlICR7ZmlsZW5hbWV9IGNyZWF0ZWRgKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIEZpbGU6ICcsIGVycm9yLnJlc3BvbnNlPy5kYXRhIHx8IGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHJldHVybiBmaWxlbmFtZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuZG9tTGVldENvZGUgZXh0ZW5kcyBQbHVnaW4ge1xuICAgIHNldHRpbmdzOiBSYW5kb21MZWV0Q29kZVNldHRpbmdzO1xuXG4gICAgYXN5bmMgb25sb2FkKCkge1xuXHRcdGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XG4gICAgICAgIGNvbnN0IGZpbGVuYW1lID0gYXdhaXQgY3JlYXRlRGFpbHlOb3RlLmJpbmQodGhpcykoKTtcblxuXHRcdGNvbnN0IHJpYmJvbkljb25FbCA9IHRoaXMuYWRkUmliYm9uSWNvbignY29kZScsICdSYW5kb20gTGVldENvZGUgUHJvYmxlbScsIChldnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5hY3RpdmVMZWFmLm9wZW5GaWxlKGZpbGVuYW1lKTtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoJ0RhaWx5IExlZXRDb2RlIFByb2JsZW0nKTtcblx0XHR9KTtcbiAgICB9XG5cbiAgICBvbnVubG9hZCgpIHtcblxuICAgIH1cblxuXHRhc3luYyBsb2FkU2V0dGluZ3MoKSB7XG5cdFx0dGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfU0VUVElOR1MsIGF3YWl0IHRoaXMubG9hZERhdGEoKSk7XG5cdH1cblxuXHRhc3luYyBzYXZlU2V0dGluZ3MoKSB7XG5cdFx0YXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcblx0fVxufVxuIiwgImltcG9ydCB7IHJlcXVlc3QsIGdxbCB9IGZyb20gJ2dyYXBocWwtcmVxdWVzdCc7XG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gJ3BhdGgnO1xuXG5jb25zdCBHUkFQSFFMX0VORFBPSU5UID0gJ2h0dHBzOi8vY29udGludW91cy1maXJlLWFyY2hhZW9wdGVyeXguZ2xpdGNoLm1lL2xlZXRjb2RlL2RhaWx5JztcblxuICBcbmFzeW5jIGZ1bmN0aW9uIGdldERhaWx5UHJvYmxlbSgpIHtcbiAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChHUkFQSFFMX0VORFBPSU5ULCB7XG4gICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhLmRhdGEuYWN0aXZlRGFpbHlDb2RpbmdDaGFsbGVuZ2VRdWVzdGlvbjtcblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGRhdGE6JywgZXJyb3IucmVzcG9uc2U/LmRhdGEgfHwgZXJyb3IubWVzc2FnZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0RGFpbHlQcm9ibGVtO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQTRGOzs7QUNJNUYsSUFBTSxtQkFBbUI7QUFHekIsZUFBZSxrQkFBa0I7QUFQakM7QUFRRSxNQUFJO0FBQ0UsVUFBTSxXQUFXLE1BQU0sTUFBTSxrQkFBa0I7QUFBQSxNQUN6QyxRQUFRO0FBQUEsSUFDZCxDQUFDO0FBRUQsVUFBTSxPQUFPLE1BQU0sU0FBUyxLQUFLO0FBQ2pDLFdBQU8sS0FBSyxLQUFLO0FBQUEsRUFFdkIsU0FBUyxPQUFPO0FBQ2QsWUFBUSxNQUFNLDBCQUF3QixXQUFNLGFBQU4sbUJBQWdCLFNBQVEsTUFBTSxPQUFPO0FBQUEsRUFDN0U7QUFDRjtBQUVBLElBQU8sbUJBQVE7OztBRGRmLElBQU0sbUJBQTJDO0FBQUEsRUFDaEQsdUJBQXVCO0FBQ3hCO0FBRUEsZUFBZSxrQkFBa0I7QUFYakM7QUFZSSxRQUFNLFVBQVUsTUFBTSxpQkFBZ0I7QUFDdEMsVUFBUSxJQUFJLFdBQVc7QUFDdkIsVUFBUSxJQUFJLE9BQU87QUFFbkIsUUFBTSxjQUFjO0FBQUEsS0FDbkIsUUFBUSxTQUFTLEtBQUsseUJBQXlCLFFBQVEsSUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSTlELFFBQVEsU0FBUyxPQUFPO0FBQUE7QUFHdEIsTUFBSTtBQUNBLFVBQU0sUUFBUSxLQUFLLElBQUk7QUFDdkIsVUFBTUEsWUFBVyxHQUFHLFFBQVEsSUFBSTtBQUNoQyxVQUFNLE9BQU8sTUFBTSxzQkFBc0JBLFNBQVE7QUFFakQsUUFBSSxNQUFNO0FBQ04sVUFBSSx1QkFBTyxRQUFRQSxTQUFRLGlCQUFpQjtBQUU1QyxZQUFNLE9BQU8sTUFBTSxXQUFXO0FBRTlCLFdBQUssSUFBSSxVQUFVLFdBQVcsU0FBUyxJQUFJO0FBRTNDO0FBQUEsSUFDSixPQUFPO0FBQ0gsWUFBTSxPQUFPQSxXQUFVLFdBQVc7QUFFbEMsVUFBSSx1QkFBTyxRQUFRQSxTQUFRLFVBQVU7QUFBQSxJQUN6QztBQUFBLEVBQ0osU0FBUyxPQUFPO0FBQ1osWUFBUSxNQUFNLDJCQUF5QixXQUFNLGFBQU4sbUJBQWdCLFNBQVEsTUFBTSxPQUFPO0FBQUEsRUFDaEY7QUFFQSxTQUFPO0FBQ1g7QUFFQSxJQUFxQixpQkFBckIsY0FBNEMsdUJBQU87QUFBQSxFQUcvQyxNQUFNLFNBQVM7QUFDakIsVUFBTSxLQUFLLGFBQWE7QUFDbEIsVUFBTUEsWUFBVyxNQUFNLGdCQUFnQixLQUFLLElBQUksRUFBRTtBQUV4RCxVQUFNLGVBQWUsS0FBSyxjQUFjLFFBQVEsMkJBQTJCLENBQUMsUUFBb0I7QUFDdEYsV0FBSyxJQUFJLFVBQVUsV0FBVyxTQUFTQSxTQUFRO0FBQy9DLFVBQUksdUJBQU8sd0JBQXdCO0FBQUEsSUFDN0MsQ0FBQztBQUFBLEVBQ0M7QUFBQSxFQUVBLFdBQVc7QUFBQSxFQUVYO0FBQUEsRUFFSCxNQUFNLGVBQWU7QUFDcEIsU0FBSyxXQUFXLE9BQU8sT0FBTyxDQUFDLEdBQUcsa0JBQWtCLE1BQU0sS0FBSyxTQUFTLENBQUM7QUFBQSxFQUMxRTtBQUFBLEVBRUEsTUFBTSxlQUFlO0FBQ3BCLFVBQU0sS0FBSyxTQUFTLEtBQUssUUFBUTtBQUFBLEVBQ2xDO0FBQ0Q7IiwKICAibmFtZXMiOiBbImZpbGVuYW1lIl0KfQo=

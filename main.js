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

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => RandomLeetCode
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");

// leetcode/requests.ts
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

// main.ts
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
    console.error("Error creating File:", ((_a = error.response) == null ? void 0 : _a.data) || error.message);
  }
  return filename;
}
var RandomLeetCode = class extends import_obsidian.Plugin {
  async onload() {
    await this.loadSettings();
    const filename2 = await createDailyNote.bind(this)();
    const ribbonIconEl = this.addRibbonIcon("code", "Random LeetCode Problem", (evt) => {
      this.app.workspace.activeLeaf.openFile(filename2);
      new import_obsidian.Notice("Random LeetCode Problem");
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyIsICJsZWV0Y29kZS9yZXF1ZXN0cy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQXBwLCBFZGl0b3IsIE1hcmtkb3duVmlldywgTW9kYWwsIE5vdGljZSwgUGx1Z2luLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nIH0gZnJvbSAnb2JzaWRpYW4nO1xuaW1wb3J0IGdldERhaWx5UHJvYmxlbSBmcm9tICcuL2xlZXRjb2RlL3JlcXVlc3RzJztcblxuaW50ZXJmYWNlIFJhbmRvbUxlZXRDb2RlU2V0dGluZ3Mge1xuXHRyYW5kb21MZWV0Q29kZVNldHRpbmc6IHN0cmluZztcbn1cblxuY29uc3QgREVGQVVMVF9TRVRUSU5HUzogUmFuZG9tTGVldENvZGVTZXR0aW5ncyA9IHtcblx0cmFuZG9tTGVldENvZGVTZXR0aW5nOiAnZGVmYXVsdCdcbn1cblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlRGFpbHlOb3RlKCkge1xuICAgIGNvbnN0IHByb2JsZW0gPSBhd2FpdCBnZXREYWlseVByb2JsZW0oKTtcbiAgICBjb25zb2xlLmxvZyhcIlByb2JsZW06IFwiKTtcbiAgICBjb25zb2xlLmxvZyhwcm9ibGVtKTtcblxuICAgIGNvbnN0IGZpbGVDb250ZW50ID0gYFxuIyBbJHtwcm9ibGVtLnF1ZXN0aW9uLnRpdGxlfV0oaHR0cHM6Ly9sZWV0Y29kZS5jb20ke3Byb2JsZW0ubGlua30pXG5cbiMjIFF1ZXN0aW9uXG5cbiR7cHJvYmxlbS5xdWVzdGlvbi5jb250ZW50fVxuYDtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHZhdWx0ID0gdGhpcy5hcHAudmF1bHQ7XG4gICAgICAgIGNvbnN0IGZpbGVuYW1lID0gYCR7cHJvYmxlbS5kYXRlfS5tZGA7XG4gICAgICAgIGNvbnN0IGZpbGUgPSB2YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZmlsZW5hbWUpO1xuXG4gICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICBuZXcgTm90aWNlKGBGaWxlICR7ZmlsZW5hbWV9IGFscmVhZHkgZXhpc3RzYCk7XG5cbiAgICAgICAgICAgIHZhdWx0Lm1vZGlmeShmaWxlLCBmaWxlQ29udGVudCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5hY3RpdmVMZWFmLm9wZW5GaWxlKGZpbGUpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXVsdC5jcmVhdGUoZmlsZW5hbWUsIGZpbGVDb250ZW50KTtcblxuICAgICAgICAgICAgbmV3IE5vdGljZShgRmlsZSAke2ZpbGVuYW1lfSBjcmVhdGVkYCk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBGaWxlOicsIGVycm9yLnJlc3BvbnNlPy5kYXRhIHx8IGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHJldHVybiBmaWxlbmFtZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmFuZG9tTGVldENvZGUgZXh0ZW5kcyBQbHVnaW4ge1xuICAgIHNldHRpbmdzOiBSYW5kb21MZWV0Q29kZVNldHRpbmdzO1xuXG4gICAgYXN5bmMgb25sb2FkKCkge1xuXHRcdGF3YWl0IHRoaXMubG9hZFNldHRpbmdzKCk7XG4gICAgICAgIGNvbnN0IGZpbGVuYW1lID0gYXdhaXQgY3JlYXRlRGFpbHlOb3RlLmJpbmQodGhpcykoKTtcblxuXHRcdGNvbnN0IHJpYmJvbkljb25FbCA9IHRoaXMuYWRkUmliYm9uSWNvbignY29kZScsICdSYW5kb20gTGVldENvZGUgUHJvYmxlbScsIChldnQ6IE1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5hY3RpdmVMZWFmLm9wZW5GaWxlKGZpbGVuYW1lKTtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoJ1JhbmRvbSBMZWV0Q29kZSBQcm9ibGVtJyk7XG5cdFx0fSk7XG4gICAgfVxuXG4gICAgb251bmxvYWQoKSB7XG5cbiAgICB9XG5cblx0YXN5bmMgbG9hZFNldHRpbmdzKCkge1xuXHRcdHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX1NFVFRJTkdTLCBhd2FpdCB0aGlzLmxvYWREYXRhKCkpO1xuXHR9XG5cblx0YXN5bmMgc2F2ZVNldHRpbmdzKCkge1xuXHRcdGF3YWl0IHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XG5cdH1cbn1cbiIsICJpbXBvcnQgeyByZXF1ZXN0LCBncWwgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnO1xuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcblxuY29uc3QgR1JBUEhRTF9FTkRQT0lOVCA9ICdodHRwczovL2NvbnRpbnVvdXMtZmlyZS1hcmNoYWVvcHRlcnl4LmdsaXRjaC5tZS9sZWV0Y29kZS9kYWlseSc7XG5cbiAgXG5hc3luYyBmdW5jdGlvbiBnZXREYWlseVByb2JsZW0oKSB7XG4gIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goR1JBUEhRTF9FTkRQT0lOVCwge1xuICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YS5kYXRhLmFjdGl2ZURhaWx5Q29kaW5nQ2hhbGxlbmdlUXVlc3Rpb247XG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBkYXRhOicsIGVycm9yLnJlc3BvbnNlPy5kYXRhIHx8IGVycm9yLm1lc3NhZ2UpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldERhaWx5UHJvYmxlbTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUE0Rjs7O0FDSTVGLElBQU0sbUJBQW1CO0FBR3pCLGVBQWUsa0JBQWtCO0FBUGpDO0FBUUUsTUFBSTtBQUNFLFVBQU0sV0FBVyxNQUFNLE1BQU0sa0JBQWtCO0FBQUEsTUFDekMsUUFBUTtBQUFBLElBQ2QsQ0FBQztBQUVELFVBQU0sT0FBTyxNQUFNLFNBQVMsS0FBSztBQUNqQyxXQUFPLEtBQUssS0FBSztBQUFBLEVBRXZCLFNBQVMsT0FBTztBQUNkLFlBQVEsTUFBTSwwQkFBd0IsV0FBTSxhQUFOLG1CQUFnQixTQUFRLE1BQU0sT0FBTztBQUFBLEVBQzdFO0FBQ0Y7QUFFQSxJQUFPLG1CQUFROzs7QURkZixJQUFNLG1CQUEyQztBQUFBLEVBQ2hELHVCQUF1QjtBQUN4QjtBQUVBLGVBQWUsa0JBQWtCO0FBWGpDO0FBWUksUUFBTSxVQUFVLE1BQU0saUJBQWdCO0FBQ3RDLFVBQVEsSUFBSSxXQUFXO0FBQ3ZCLFVBQVEsSUFBSSxPQUFPO0FBRW5CLFFBQU0sY0FBYztBQUFBLEtBQ25CLFFBQVEsU0FBUyxLQUFLLHlCQUF5QixRQUFRLElBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUk5RCxRQUFRLFNBQVMsT0FBTztBQUFBO0FBR3RCLE1BQUk7QUFDQSxVQUFNLFFBQVEsS0FBSyxJQUFJO0FBQ3ZCLFVBQU1BLFlBQVcsR0FBRyxRQUFRLElBQUk7QUFDaEMsVUFBTSxPQUFPLE1BQU0sc0JBQXNCQSxTQUFRO0FBRWpELFFBQUksTUFBTTtBQUNOLFVBQUksdUJBQU8sUUFBUUEsU0FBUSxpQkFBaUI7QUFFNUMsWUFBTSxPQUFPLE1BQU0sV0FBVztBQUU5QixXQUFLLElBQUksVUFBVSxXQUFXLFNBQVMsSUFBSTtBQUUzQztBQUFBLElBQ0osT0FBTztBQUNILFlBQU0sT0FBT0EsV0FBVSxXQUFXO0FBRWxDLFVBQUksdUJBQU8sUUFBUUEsU0FBUSxVQUFVO0FBQUEsSUFDekM7QUFBQSxFQUNKLFNBQVMsT0FBTztBQUNaLFlBQVEsTUFBTSwwQkFBd0IsV0FBTSxhQUFOLG1CQUFnQixTQUFRLE1BQU0sT0FBTztBQUFBLEVBQy9FO0FBRUEsU0FBTztBQUNYO0FBRUEsSUFBcUIsaUJBQXJCLGNBQTRDLHVCQUFPO0FBQUEsRUFHL0MsTUFBTSxTQUFTO0FBQ2pCLFVBQU0sS0FBSyxhQUFhO0FBQ2xCLFVBQU1BLFlBQVcsTUFBTSxnQkFBZ0IsS0FBSyxJQUFJLEVBQUU7QUFFeEQsVUFBTSxlQUFlLEtBQUssY0FBYyxRQUFRLDJCQUEyQixDQUFDLFFBQW9CO0FBQ3RGLFdBQUssSUFBSSxVQUFVLFdBQVcsU0FBU0EsU0FBUTtBQUMvQyxVQUFJLHVCQUFPLHlCQUF5QjtBQUFBLElBQzlDLENBQUM7QUFBQSxFQUNDO0FBQUEsRUFFQSxXQUFXO0FBQUEsRUFFWDtBQUFBLEVBRUgsTUFBTSxlQUFlO0FBQ3BCLFNBQUssV0FBVyxPQUFPLE9BQU8sQ0FBQyxHQUFHLGtCQUFrQixNQUFNLEtBQUssU0FBUyxDQUFDO0FBQUEsRUFDMUU7QUFBQSxFQUVBLE1BQU0sZUFBZTtBQUNwQixVQUFNLEtBQUssU0FBUyxLQUFLLFFBQVE7QUFBQSxFQUNsQztBQUNEOyIsCiAgIm5hbWVzIjogWyJmaWxlbmFtZSJdCn0K

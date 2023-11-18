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

Categories: #${problem.question.topicTags.map((tag) => tag.name.replace(" ", "-")).join(" #")}

Difficulty: #${problem.question.difficulty}

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiLCAic3JjL2xlZXRjb2RlL3JlcXVlc3RzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyBBcHAsIEVkaXRvciwgTWFya2Rvd25WaWV3LCBNb2RhbCwgTm90aWNlLCBQbHVnaW4sIFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmcgfSBmcm9tICdvYnNpZGlhbic7XG5pbXBvcnQgZ2V0RGFpbHlQcm9ibGVtIGZyb20gJy4vbGVldGNvZGUvcmVxdWVzdHMnO1xuXG5pbnRlcmZhY2UgUmFuZG9tTGVldENvZGVTZXR0aW5ncyB7XG5cdHJhbmRvbUxlZXRDb2RlU2V0dGluZzogc3RyaW5nO1xufVxuXG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBSYW5kb21MZWV0Q29kZVNldHRpbmdzID0ge1xuXHRyYW5kb21MZWV0Q29kZVNldHRpbmc6ICdkZWZhdWx0J1xufVxuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVEYWlseU5vdGUoKSB7XG4gICAgY29uc3QgcHJvYmxlbSA9IGF3YWl0IGdldERhaWx5UHJvYmxlbSgpO1xuICAgIGNvbnNvbGUubG9nKFwiUHJvYmxlbTogXCIpO1xuICAgIGNvbnNvbGUubG9nKHByb2JsZW0pO1xuXG4gICAgY29uc3QgZmlsZUNvbnRlbnQgPSBgXG5cblxuIyBbJHtwcm9ibGVtLnF1ZXN0aW9uLnRpdGxlfV0oaHR0cHM6Ly9sZWV0Y29kZS5jb20ke3Byb2JsZW0ubGlua30pXG5cbkNhdGVnb3JpZXM6ICMke3Byb2JsZW0ucXVlc3Rpb24udG9waWNUYWdzLm1hcCgodGFnOiBzdHJpbmcpID0+IHRhZy5uYW1lLnJlcGxhY2UoXCIgXCIsIFwiLVwiKSkuam9pbignICMnKX1cblxuRGlmZmljdWx0eTogIyR7cHJvYmxlbS5xdWVzdGlvbi5kaWZmaWN1bHR5fVxuXG4jIyBRdWVzdGlvblxuXG4ke3Byb2JsZW0ucXVlc3Rpb24uY29udGVudH1cbmA7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCB2YXVsdCA9IHRoaXMuYXBwLnZhdWx0O1xuICAgICAgICBjb25zdCBmaWxlbmFtZSA9IGAke3Byb2JsZW0uZGF0ZX0ubWRgO1xuICAgICAgICBjb25zdCBmaWxlID0gdmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGZpbGVuYW1lKTtcblxuICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgICAgbmV3IE5vdGljZShgRmlsZSAke2ZpbGVuYW1lfSBhbHJlYWR5IGV4aXN0c2ApO1xuXG4gICAgICAgICAgICB2YXVsdC5tb2RpZnkoZmlsZSwgZmlsZUNvbnRlbnQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmFwcC53b3Jrc3BhY2UuYWN0aXZlTGVhZi5vcGVuRmlsZShmaWxlKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmF1bHQuY3JlYXRlKGZpbGVuYW1lLCBmaWxlQ29udGVudCk7XG5cbiAgICAgICAgICAgIG5ldyBOb3RpY2UoYEZpbGUgJHtmaWxlbmFtZX0gY3JlYXRlZGApO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgRmlsZTogJywgZXJyb3IucmVzcG9uc2U/LmRhdGEgfHwgZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpbGVuYW1lO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5kb21MZWV0Q29kZSBleHRlbmRzIFBsdWdpbiB7XG4gICAgc2V0dGluZ3M6IFJhbmRvbUxlZXRDb2RlU2V0dGluZ3M7XG5cbiAgICBhc3luYyBvbmxvYWQoKSB7XG5cdFx0YXdhaXQgdGhpcy5sb2FkU2V0dGluZ3MoKTtcbiAgICAgICAgY29uc3QgZmlsZW5hbWUgPSBhd2FpdCBjcmVhdGVEYWlseU5vdGUuYmluZCh0aGlzKSgpO1xuXG5cdFx0Y29uc3QgcmliYm9uSWNvbkVsID0gdGhpcy5hZGRSaWJib25JY29uKCdjb2RlJywgJ1JhbmRvbSBMZWV0Q29kZSBQcm9ibGVtJywgKGV2dDogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLmFjdGl2ZUxlYWYub3BlbkZpbGUoZmlsZW5hbWUpO1xuICAgICAgICAgICAgbmV3IE5vdGljZSgnRGFpbHkgTGVldENvZGUgUHJvYmxlbScpO1xuXHRcdH0pO1xuICAgIH1cblxuICAgIG9udW5sb2FkKCkge1xuXG4gICAgfVxuXG5cdGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcblx0XHR0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9TRVRUSU5HUywgYXdhaXQgdGhpcy5sb2FkRGF0YSgpKTtcblx0fVxuXG5cdGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcblx0XHRhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xuXHR9XG59XG4iLCAiaW1wb3J0IHsgcmVxdWVzdCwgZ3FsIH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0JztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5cbmNvbnN0IEdSQVBIUUxfRU5EUE9JTlQgPSAnaHR0cHM6Ly9jb250aW51b3VzLWZpcmUtYXJjaGFlb3B0ZXJ5eC5nbGl0Y2gubWUvbGVldGNvZGUvZGFpbHknO1xuXG4gIFxuYXN5bmMgZnVuY3Rpb24gZ2V0RGFpbHlQcm9ibGVtKCkge1xuICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKEdSQVBIUUxfRU5EUE9JTlQsIHtcbiAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGRhdGEuZGF0YS5hY3RpdmVEYWlseUNvZGluZ0NoYWxsZW5nZVF1ZXN0aW9uO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvci5yZXNwb25zZT8uZGF0YSB8fCBlcnJvci5tZXNzYWdlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXREYWlseVByb2JsZW07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBNEY7OztBQ0k1RixJQUFNLG1CQUFtQjtBQUd6QixlQUFlLGtCQUFrQjtBQVBqQztBQVFFLE1BQUk7QUFDRSxVQUFNLFdBQVcsTUFBTSxNQUFNLGtCQUFrQjtBQUFBLE1BQ3pDLFFBQVE7QUFBQSxJQUNkLENBQUM7QUFFRCxVQUFNLE9BQU8sTUFBTSxTQUFTLEtBQUs7QUFDakMsV0FBTyxLQUFLLEtBQUs7QUFBQSxFQUV2QixTQUFTLE9BQU87QUFDZCxZQUFRLE1BQU0sMEJBQXdCLFdBQU0sYUFBTixtQkFBZ0IsU0FBUSxNQUFNLE9BQU87QUFBQSxFQUM3RTtBQUNGO0FBRUEsSUFBTyxtQkFBUTs7O0FEZGYsSUFBTSxtQkFBMkM7QUFBQSxFQUNoRCx1QkFBdUI7QUFDeEI7QUFFQSxlQUFlLGtCQUFrQjtBQVhqQztBQVlJLFFBQU0sVUFBVSxNQUFNLGlCQUFnQjtBQUN0QyxVQUFRLElBQUksV0FBVztBQUN2QixVQUFRLElBQUksT0FBTztBQUVuQixRQUFNLGNBQWM7QUFBQTtBQUFBO0FBQUEsS0FHbkIsUUFBUSxTQUFTLEtBQUsseUJBQXlCLFFBQVEsSUFBSTtBQUFBO0FBQUEsZUFFakQsUUFBUSxTQUFTLFVBQVUsSUFBSSxDQUFDLFFBQWdCLElBQUksS0FBSyxRQUFRLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUM7QUFBQTtBQUFBLGVBRXRGLFFBQVEsU0FBUyxVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFJeEMsUUFBUSxTQUFTLE9BQU87QUFBQTtBQUd0QixNQUFJO0FBQ0EsVUFBTSxRQUFRLEtBQUssSUFBSTtBQUN2QixVQUFNQSxZQUFXLEdBQUcsUUFBUSxJQUFJO0FBQ2hDLFVBQU0sT0FBTyxNQUFNLHNCQUFzQkEsU0FBUTtBQUVqRCxRQUFJLE1BQU07QUFDTixVQUFJLHVCQUFPLFFBQVFBLFNBQVEsaUJBQWlCO0FBRTVDLFlBQU0sT0FBTyxNQUFNLFdBQVc7QUFFOUIsV0FBSyxJQUFJLFVBQVUsV0FBVyxTQUFTLElBQUk7QUFFM0M7QUFBQSxJQUNKLE9BQU87QUFDSCxZQUFNLE9BQU9BLFdBQVUsV0FBVztBQUVsQyxVQUFJLHVCQUFPLFFBQVFBLFNBQVEsVUFBVTtBQUFBLElBQ3pDO0FBQUEsRUFDSixTQUFTLE9BQU87QUFDWixZQUFRLE1BQU0sMkJBQXlCLFdBQU0sYUFBTixtQkFBZ0IsU0FBUSxNQUFNLE9BQU87QUFBQSxFQUNoRjtBQUVBLFNBQU87QUFDWDtBQUVBLElBQXFCLGlCQUFyQixjQUE0Qyx1QkFBTztBQUFBLEVBRy9DLE1BQU0sU0FBUztBQUNqQixVQUFNLEtBQUssYUFBYTtBQUNsQixVQUFNQSxZQUFXLE1BQU0sZ0JBQWdCLEtBQUssSUFBSSxFQUFFO0FBRXhELFVBQU0sZUFBZSxLQUFLLGNBQWMsUUFBUSwyQkFBMkIsQ0FBQyxRQUFvQjtBQUN0RixXQUFLLElBQUksVUFBVSxXQUFXLFNBQVNBLFNBQVE7QUFDL0MsVUFBSSx1QkFBTyx3QkFBd0I7QUFBQSxJQUM3QyxDQUFDO0FBQUEsRUFDQztBQUFBLEVBRUEsV0FBVztBQUFBLEVBRVg7QUFBQSxFQUVILE1BQU0sZUFBZTtBQUNwQixTQUFLLFdBQVcsT0FBTyxPQUFPLENBQUMsR0FBRyxrQkFBa0IsTUFBTSxLQUFLLFNBQVMsQ0FBQztBQUFBLEVBQzFFO0FBQUEsRUFFQSxNQUFNLGVBQWU7QUFDcEIsVUFBTSxLQUFLLFNBQVMsS0FBSyxRQUFRO0FBQUEsRUFDbEM7QUFDRDsiLAogICJuYW1lcyI6IFsiZmlsZW5hbWUiXQp9Cg==

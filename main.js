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
var DEFAULT_SETTINGS = {
  randomLeetCodeSetting: "default"
};
var RandomLeetCode = class extends import_obsidian.Plugin {
  async onload() {
    await this.loadSettings();
    const ribbonIconEl = this.addRibbonIcon("code", "Random LeetCode Problem", (evt) => {
      new import_obsidian.Notice("Its a trick!");
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQXBwLCBFZGl0b3IsIE1hcmtkb3duVmlldywgTW9kYWwsIE5vdGljZSwgUGx1Z2luLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nIH0gZnJvbSAnb2JzaWRpYW4nO1xuXG5pbnRlcmZhY2UgUmFuZG9tTGVldENvZGVTZXR0aW5ncyB7XG5cdHJhbmRvbUxlZXRDb2RlU2V0dGluZzogc3RyaW5nO1xufVxuXG5jb25zdCBERUZBVUxUX1NFVFRJTkdTOiBSYW5kb21MZWV0Q29kZVNldHRpbmdzID0ge1xuXHRyYW5kb21MZWV0Q29kZVNldHRpbmc6ICdkZWZhdWx0J1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSYW5kb21MZWV0Q29kZSBleHRlbmRzIFBsdWdpbiB7XG4gICAgc2V0dGluZ3M6IFJhbmRvbUxlZXRDb2RlU2V0dGluZ3M7XG5cbiAgICBhc3luYyBvbmxvYWQoKSB7XG5cdFx0YXdhaXQgdGhpcy5sb2FkU2V0dGluZ3MoKTtcblxuXHRcdGNvbnN0IHJpYmJvbkljb25FbCA9IHRoaXMuYWRkUmliYm9uSWNvbignY29kZScsICdSYW5kb20gTGVldENvZGUgUHJvYmxlbScsIChldnQ6IE1vdXNlRXZlbnQpID0+IHtcblx0XHRcdG5ldyBOb3RpY2UoJ0l0cyBhIHRyaWNrIScpO1xuXHRcdH0pO1xuICAgIH1cblxuICAgIG9udW5sb2FkKCkge1xuXG4gICAgfVxuXG5cdGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcblx0XHR0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbih7fSwgREVGQVVMVF9TRVRUSU5HUywgYXdhaXQgdGhpcy5sb2FkRGF0YSgpKTtcblx0fVxuXG5cdGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcblx0XHRhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xuXHR9XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBNEY7QUFNNUYsSUFBTSxtQkFBMkM7QUFBQSxFQUNoRCx1QkFBdUI7QUFDeEI7QUFFQSxJQUFxQixpQkFBckIsY0FBNEMsdUJBQU87QUFBQSxFQUcvQyxNQUFNLFNBQVM7QUFDakIsVUFBTSxLQUFLLGFBQWE7QUFFeEIsVUFBTSxlQUFlLEtBQUssY0FBYyxRQUFRLDJCQUEyQixDQUFDLFFBQW9CO0FBQy9GLFVBQUksdUJBQU8sY0FBYztBQUFBLElBQzFCLENBQUM7QUFBQSxFQUNDO0FBQUEsRUFFQSxXQUFXO0FBQUEsRUFFWDtBQUFBLEVBRUgsTUFBTSxlQUFlO0FBQ3BCLFNBQUssV0FBVyxPQUFPLE9BQU8sQ0FBQyxHQUFHLGtCQUFrQixNQUFNLEtBQUssU0FBUyxDQUFDO0FBQUEsRUFDMUU7QUFBQSxFQUVBLE1BQU0sZUFBZTtBQUNwQixVQUFNLEtBQUssU0FBUyxLQUFLLFFBQVE7QUFBQSxFQUNsQztBQUNEOyIsCiAgIm5hbWVzIjogW10KfQo=

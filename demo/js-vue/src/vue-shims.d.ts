//  tell TypeScript what .vue files will look like when they're imported
// https://github.com/Microsoft/TypeScript-Vue-Starter#single-file-components

declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}
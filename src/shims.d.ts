/**
 * Extends the browser window object
 */
declare interface Window {}

/**
 * With vite-plugin-md, markdown files can be treated as Vue components
 */
declare module '*.md' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

export async function register() {
  // VSCode runs inside Electron which leaks a broken localStorage global into
  // Node.js worker processes. Remove it so SSR doesn't try to use it.
  if (typeof global !== 'undefined' && 'localStorage' in global) {
    try {
      global.localStorage.getItem('__probe__')
    } catch {
      // @ts-ignore
      delete global.localStorage
    }
  }
}

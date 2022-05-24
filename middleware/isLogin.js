export default function ({ redirect, app }) {
  if (process.client) {
    // If the user is not authenticated
    if (!app.$auth.loggedIn) {
      return redirect('/login')
    }
  }
}

import * as React from "react";

export default function Login() {
  return <>
    <h1>login</h1>
    <form action="/login/password" method="post">
      <section>
          <label for="username">Username</label>
          <input id="username" name="username" type="text" autocomplete="username" required autofocus />
      </section>
      <section>
          <label for="current-password">Password</label>
          <input id="current-password" name="password" type="password" autocomplete="current-password" required />
      </section>
      <button type="submit">Sign in</button>
    </form>
  </>
}
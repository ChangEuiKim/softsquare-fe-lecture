import { HOST } from '../../api.mjs'

export default function getOneTodo(id) {
  const url = new URL(HOST)
  url.pathname = `/todo/${id}`;
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      // "Authorization": "Bearer " + import.meta.env.VITE_DEV_SECRET_KEY,
    }
  })

}

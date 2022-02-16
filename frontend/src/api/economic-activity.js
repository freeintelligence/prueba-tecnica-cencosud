import { api } from "./api";

export const economicActivityApi = {

  getAll: async () => {
    const r = await fetch(api.url('/users'));
    const json = await r.json();

    if (!r.ok) {
      throw new Error(`${r.status} ${r.statusText}`);
    }

    return json;
  },

  store: async (data) => {
    const r = await fetch(api.url('/users'), {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const json = await r.json();

    if (!r.ok) {
      throw new Error(`${r.status} ${r.statusText}`);
    }

    return json;
  }

}

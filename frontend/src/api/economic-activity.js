export const economicActivityApi = {

  getAll: async () => {
    const r = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await r.json();

    if (!r.ok) {
      throw new Error(`${r.status} ${r.statusText}`);
    }

    return json;
  },

  store: async (data) => {
    const r = await fetch('https://jsonplaceholder.typicode.com/users', {
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

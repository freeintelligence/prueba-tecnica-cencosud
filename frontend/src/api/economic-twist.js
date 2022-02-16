export const economicTwistApi = {

  getAll: async () => {
    const r = await fetch('https://jsonplaceholder.typicode.com/comments');
    const json = await r.json();

    if (!r.ok) {
      throw new Error(`${r.status} ${r.statusText}`);
    }

    return json;
  }

}

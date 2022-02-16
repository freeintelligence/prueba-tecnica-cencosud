export const api = {

  url: (path) => {
    return `${process.env.REACT_APP_API_URL}${path}`;
  }

}

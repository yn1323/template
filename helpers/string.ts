export const makeQueryParamsString = (obj: { [key: string]: string }) => {
  const params: string[] = [];

  for (const [key, value] of Object.entries(obj)) {
    if (!value) continue;
    params.push(`${key}=${value}`);
  }

  return params.join("&");
};

export const isNumber = (string: string) => {
  const regex = /[^0-9]/;

  return !regex.test(string);
};

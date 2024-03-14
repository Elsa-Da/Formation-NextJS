export const fetchFakeStore = async <T>(
  uri: string,
  init?: RequestInit
): Promise<T> => {
  const res = await fetch(`https://fakestoreapi.com/${uri}`, init);
  const data = await res.json();
  return data as T;
};

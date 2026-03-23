let context: any = {};

export function setContext(key: string, value: any) {
  context[key] = value;
}

export function getContext(key: string) {
  return context[key];
}
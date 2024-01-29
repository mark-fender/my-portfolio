export const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== 'string') {
    return false;
  }
  return value.length <= maxLength;
};

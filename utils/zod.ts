import { z } from "zod";

export const formatValidationError = (
  error: any,
  defaultMessage?: string
): string => {
  if (error.errors) {
    return error.errors
      .map((err: Error | z.ZodError | any) => err.message)
      .join(", ");
  }
  if (error.message) {
    return error.message;
  }
  return defaultMessage ?? "Datele introduse sunt invalide.";
};

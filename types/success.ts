export type Success = {
  success: true;
  message?: string;
};

// Type guard function
export function isSuccess(obj: any): obj is Success {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "success" in obj &&
    obj.success === true
  );
}

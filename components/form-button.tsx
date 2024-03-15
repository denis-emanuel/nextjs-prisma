import React from "react";
import { useFormStatus } from "react-dom";
import CircularProgress from "@mui/material/CircularProgress";

interface CustomButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

export const FormButton: React.FC<CustomButtonProps> = (
  props: CustomButtonProps
) => {
  const { children, className, ...rest } = props;
  const { pending } = useFormStatus();

  return (
    <>
      {pending === true ? (
        <div
          className="flex items-center justify-center text-primary"
          aria-disabled={pending}
        >
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <button {...rest} className={className}>
          {children}
        </button>
      )}
    </>
  );
};

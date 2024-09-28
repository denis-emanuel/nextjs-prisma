"use client";

import DeleteIcon from "@mui/icons-material/Delete";
import CreditScoreIcon from "@mui/icons-material/CreditScore";

import { deletePost, markPostAsSold } from "./actions";
import { cn } from "@/lib/utils";

interface PostButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {
  id: string;
  className?: string;
}

export const DeleteButton: React.FC<PostButtonProps> = ({
  id,
  className,
  ...props
}: PostButtonProps) => {
  return (
    <button
      {...props}
      onClick={() => deletePost(id)}
      className={cn(
        "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
        className
      )}
    >
      {props.children}
      <DeleteIcon className="inline" />
    </button>
  );
};

export const MarkSoldButton: React.FC<PostButtonProps> = ({
  id,
  className,
  ...props
}: PostButtonProps) => {
  return (
    <button
      {...props}
      onClick={() => markPostAsSold(id)}
      className={cn(
        "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded",
        className
      )}
    >
      {props.children}
      <CreditScoreIcon className="inline" />
    </button>
  );
};

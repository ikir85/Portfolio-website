import { forwardRef } from "react";

import FormError from "./FormError";
import Label from "./label";

interface Props {
  label?: React.ReactNode;
  error?: string;
}

export default forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & Props
>(function TextArea(
  { className, error, id, disabled, label, required, ...props },
  ref,
): JSX.Element {
  const classes = className ? [className] : [];

  classes.push(
    "p-2",
    "rounded-lg",
    "outline-none",
    "border",
    "border-gray-700",
    "bg-white",
    "focus:border-secondary-500",
  );

  error && classes.push("border-negative-500");

  disabled && classes.push("text-slate-400");

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <Label htmlFor={id} required={required}>
          {label}
        </Label>
      )}
      <textarea
        className={classes.join(" ")}
        id={id}
        disabled={disabled}
        ref={ref}
        {...props}
      />

      {error && <FormError>{error}</FormError>}
    </div>
  );
});

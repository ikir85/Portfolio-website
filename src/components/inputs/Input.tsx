import {
  HTMLAttributes,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
} from "react";

import FormError from "./FormError";
import Label from "./label";

const getInputMode = (
  inputType: HTMLInputTypeAttribute,
): HTMLAttributes<HTMLInputElement>["inputMode"] => {
  if (inputType === "text") return "text";
  if (inputType === "number") return "numeric";
  if (inputType === "email") return "email";
  if (inputType === "tel") return "tel";

  return undefined;
};

interface Props {
  label?: ReactNode;
  error?: string;
}

export default forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & Props
>(function Input(
  {
    className,
    id,
    name,
    label,
    type = "text",
    required,
    value,
    error,
    disabled,
    ...props
  },
  ref,
): JSX.Element {
  const classes = className ? [className] : [];

  classes.push(
    "box-border",
    "p-2",
    "rounded-lg",
    "outline-none",
    "border",
    "h-10",
    "bg-white",
    "border-gray-700",
    "focus:border-secondary-500",
  );

  disabled && classes.push("text-slate-400");

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <Label htmlFor={id} required={required}>
          {label}
        </Label>
      )}
      <input
        className={classes.join(" ")}
        id={id}
        name={name}
        type="text"
        inputMode={getInputMode(type)}
        value={value}
        disabled={disabled}
        ref={ref}
        {...props}
      />

      {error && <FormError>{error}</FormError>}
    </div>
  );
});

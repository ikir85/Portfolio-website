import { LabelHTMLAttributes, forwardRef } from "react";

interface Props {
  required?: boolean;
}

export default forwardRef<
  HTMLLabelElement,
  LabelHTMLAttributes<HTMLLabelElement> & Props
>(function Label({ children, required, ...props }, ref): JSX.Element {
  return (
    <label className="m-0 text-sm font-bold" ref={ref} {...props}>
      {children} {required && <sup className="text-negative-500">*</sup>}
    </label>
  );
});

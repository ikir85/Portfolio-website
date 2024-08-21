import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function FormError({ children }: Props): JSX.Element {
  return <span className="text-base text-red-600">{children}</span>;
}

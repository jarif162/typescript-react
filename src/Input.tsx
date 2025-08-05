import React from "react";

type InputProps = {
  count: string | number | boolean;
  setCount: React.Dispatch<React.SetStateAction<string | number | boolean>>;
  handle: (e: any) => void;
};

export default function Input({ count, setCount }: InputProps) {
  return <div>Input</div>;
}

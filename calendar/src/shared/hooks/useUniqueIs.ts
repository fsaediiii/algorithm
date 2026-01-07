import { useId } from "react";

export const useUniqueId = (id?: string, prefix?: string): string => {
  const generatedId = useId();
  return id ? id : prefix ? `${prefix}${generatedId}` : generatedId;
};

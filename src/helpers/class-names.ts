import { MutableRefObject, Ref, RefCallback } from 'react';

export const cn = (
  ...args: Array<string | 0 | null | undefined | false>
): string => {
  return args.filter(Boolean).join(" ");
};

export function useMergeRefs<T>(
  refs: Array<Ref<T>>
): RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref != null) {
        (ref as MutableRefObject<T | null>).current = value;
      }
    });
  };
}

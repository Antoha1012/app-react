import { useEffect, useRef } from "react";

export const useObserver = (
  ref,
  canLoad,
  isLoading,
  callback,
  visiblePosts
) => {
  const observer = useRef();

  useEffect(() => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();

    const cb = function (entries, observer) {
      if (entries[0].isIntersecting && canLoad) {
        setTimeout(() => {
          callback(visiblePosts);
        }, 50);
      }
    };
    observer.current = new IntersectionObserver(cb);
    observer.current.observe(ref.current);
  }, [isLoading, visiblePosts]);
};

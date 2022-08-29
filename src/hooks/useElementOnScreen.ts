import React, { useEffect, useMemo, useState } from "react";
type Props = {
  targetRef: React.MutableRefObject<null>;
  options?: IntersectionObserverInit;
};
// 옵션값이 없을때 사용되는 기초적인값
const initialOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 1,
};
const useElementOnScreen = ({ targetRef, options = initialOptions }: Props) => {
  const [isVisible, setVisible] = useState(false);

  const callbackFunction = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setVisible(entry.isIntersecting);
  };

  const optionsMemo = useMemo(() => {
    return options;
  }, [options]);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, optionsMemo);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, optionsMemo]);

  return { isVisible };
};

export default useElementOnScreen;

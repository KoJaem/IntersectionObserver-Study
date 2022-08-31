

// import { useState, useRef, useEffect, MutableRefObject, useMemo } from "react";
// type Props = {
//   ref: MutableRefObject<Element | null>;
//   options?: IntersectionObserverInit;
// };
// const useIntersect = ({ ref, options }: Props) => {
//   const [element, setElement] = useState<Element | null>(null);
//   const [isIntersecting, setIsIntersecting] = useState(false);
//   const observer = useRef<null | IntersectionObserver>(null);

//   const cleanOb = () => {
//     if (observer.current) {
//       observer.current.disconnect();
//     }
//   };

//   useEffect(() => {
//     setElement(ref.current);
//   }, [ref]);

//   useEffect(() => {
//     if (!element) return;
//     cleanOb();
//     const ob = (observer.current = new IntersectionObserver(
//       ([entry]) => {
//         const isElementIntersecting = entry.isIntersecting;
//         if (!isIntersecting && isElementIntersecting) {
//           cleanOb();
//         }
//         setIsIntersecting(isElementIntersecting);
//       },
//       { ...options }
//     ));
//     ob.observe(element);
//     return () => {
//       cleanOb();
//     };
//   }, [element, options, isIntersecting]);
//   // forward, isIntersecting;

//   return isIntersecting;
// };

// export default useIntersect;


// // // forward 까지 받아오는 예제 
// // import { useState, useRef, useEffect, MutableRefObject, useMemo } from "react";
// // type Props = {
// //   ref: MutableRefObject<Element | null>;
// //   forward?: boolean;
// //   options?: IntersectionObserverInit;
// // };
// // const useIntersect = ({ ref, forward = true, options }: Props) => {
// //   const [element, setElement] = useState<Element | null>(null);
// //   const [isIntersecting, setIsIntersecting] = useState(false);
// //   const observer = useRef<null | IntersectionObserver>(null);

// //   const cleanOb = () => {
// //     if (observer.current) {
// //       observer.current.disconnect();
// //     }
// //   };

// //   useEffect(() => {
// //     setElement(ref.current);
// //   }, [ref]);

// //   useEffect(() => {
// //     if (!element) return;
// //     cleanOb();
// //     const ob = (observer.current = new IntersectionObserver(
// //       ([entry]) => {
// //         const isElementIntersecting = entry.isIntersecting;
// //         if (!forward) {
// //           setIsIntersecting(isElementIntersecting);
// //         } else if (forward && !isIntersecting && isElementIntersecting) {
// //           setIsIntersecting(isElementIntersecting);
// //           cleanOb();
// //         }
// //       },
// //       { ...options }
// //     ));
// //     ob.observe(element);
// //     return () => {
// //       cleanOb();
// //     };
// //   }, [element, options, forward, isIntersecting]);
// //   // forward, isIntersecting;

// //   return isIntersecting;
// // };

// // export default useIntersect;

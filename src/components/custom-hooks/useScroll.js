/**
 * useScroll React custom hook
 * Usage:
 *    const { scrollX, scrollY, scrollDirection } = useScroll();
 */

import React, { useState, useEffect } from "react";

export function useScroll() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bodyOffset, setBodyOffset] = useState(
    0
  );
  const [scrollY, setScrollY] = useState(bodyOffset.top);
  const [scrollX, setScrollX] = useState(bodyOffset.left);
  const [scrollDirection, setScrollDirection] = useState();
  const [width, setWidth] = useState(800);

  const listener = e => {
    setBodyOffset(document ? document.body.getBoundingClientRect() : 0);
    setScrollY(-bodyOffset.top);
    setScrollX(bodyOffset.left);
    setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
    setLastScrollTop(-bodyOffset.top);
  };

  const updateWindowDimensions = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("scroll", listener);
    window.addEventListener('resize', updateWindowDimensions);
    return () => {
      window.removeEventListener("scroll", listener);
      window.removeEventListener('resize', updateWindowDimensions);
    };
  }, [scrollY]);

  return {
    scrollY,
    scrollX,
    width,
    scrollDirection
  };
}
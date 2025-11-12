"use client";
import { useState, useCallback } from "react";

export function useOverlay(initialState = false) {
  const [isVisible, setIsVisible] = useState(initialState);

  const showOverlay = useCallback(() => {
    setIsVisible(true);
  }, []);

  const hideOverlay = useCallback(() => {
    setIsVisible(false);
  }, []);

  const toggleOverlay = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, []);

  return {
    isVisible,
    showOverlay,
    hideOverlay,
    toggleOverlay,
  };
}

export default useOverlay;

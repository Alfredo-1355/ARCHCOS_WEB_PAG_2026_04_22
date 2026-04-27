import { useState, useCallback, useMemo } from 'react';
import { Project } from '../types';

export const useProjectCarousel = (projects: Project[]) => {
  const [state, setState] = useState({ currentIndex: 0, direction: 0 });

  const paginate = useCallback((newDirection: number) => {
    setState(prev => ({
      direction: newDirection,
      currentIndex: (prev.currentIndex + newDirection + projects.length) % projects.length
    }));
  }, [projects.length]);

  const setIndex = useCallback((index: number) => {
    setState(prev => ({
      direction: index > prev.currentIndex ? 1 : -1,
      currentIndex: index
    }));
  }, []);

  const visibleProjects = useMemo(() => {
    if (!projects.length) return [];
    return [
      projects[state.currentIndex % projects.length],
      projects[(state.currentIndex + 1) % projects.length],
      projects[(state.currentIndex + 2) % projects.length],
    ];
  }, [state.currentIndex, projects]);

  return { ...state, paginate, setIndex, visibleProjects };
};

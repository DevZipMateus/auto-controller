import React, { lazy, Suspense } from 'react';

interface LazySectionProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const LazySection: React.FC<LazySectionProps> = ({ 
  children, 
  fallback = <div className="min-h-[200px] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

export default LazySection;
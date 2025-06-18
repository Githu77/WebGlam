import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-lavender-900 via-lavender-800 to-lavender-950 animate-gradient" />
      
      {/* Animated circles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lavender-500/20 rounded-full blur-3xl animate-spin-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lavender-400/20 rounded-full blur-3xl animate-spin-slow-reverse" />
      </div>
      
      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
    </div>
  );
};

export default AnimatedBackground; 
export function Background() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Ripple animations */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={`ripple-${i}`}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-indigo-300/30 dark:border-indigo-700/30"
            style={{
              animation: `ripple ${15 + i * 5}s linear infinite`,
              animationDelay: `${i * 5}s`,
              transform: 'scale(0)',
            }}
          />
        ))}
        {[...Array(2)].map((_, i) => (
          <div
            key={`ripple-alt-${i}`}
            className="absolute top-1/3 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-purple-300/30 dark:border-purple-700/30"
            style={{
              animation: `ripple ${12 + i * 4}s linear infinite`,
              animationDelay: `${i * 3}s`,
              transform: 'scale(0)',
            }}
          />
        ))}
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-24 left-10 w-72 h-72 bg-gradient-to-br from-indigo-300/40 via-purple-300/30 to-pink-300/30 dark:from-indigo-700/40 dark:via-purple-700/30 dark:to-pink-700/30 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-pink-300/30 via-purple-300/30 to-indigo-300/30 dark:from-pink-700/40 dark:via-purple-700/30 dark:to-indigo-700/30 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '1s' }}></div>
      
      {/* Abstract shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-indigo-300/50 dark:border-indigo-700/50 rounded-full animate-spin-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-pink-300/50 dark:border-pink-700/50 rounded-full animate-spin-slow-reverse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-purple-300/50 dark:border-purple-700/50 rounded-full animate-spin-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-indigo-400/50 to-purple-400/50 dark:from-indigo-500/50 dark:to-purple-500/50 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `scale(${0.5 + Math.random() * 1.5})`,
            }}
          />
        ))}
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.05]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}></div>

      {/* Animated lines */}
      <div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"
            style={{
              top: `${15 + i * 20}%`,
              left: '0',
              right: '0',
              animation: `slide ${8 + i * 2}s linear infinite`,
              animationDelay: `${i * 2}s`,
              opacity: 0.5 + (i * 0.1),
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-indigo-400/40 dark:bg-indigo-500/40 rounded-full blur-sm"
            style={{
              top: `${20 + i * 30}%`,
              left: `${20 + i * 20}%`,
              animation: `float ${10 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 3}s`,
              transform: `scale(${1 + i * 0.5})`,
            }}
          />
        ))}
      </div>

      {/* Additional glowing elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-indigo-400/40 to-purple-400/40 dark:from-indigo-500/40 dark:to-purple-500/40 rounded-full blur-2xl animate-glow"></div>
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-400/40 to-pink-400/40 dark:from-purple-500/40 dark:to-pink-500/40 rounded-full blur-2xl animate-glow" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Animated dots */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute w-1 h-1 bg-indigo-400/50 dark:bg-indigo-500/50 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `pulse ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
} 
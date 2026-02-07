import { useState, useEffect } from 'react';

const CursorTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [binaryBits, setBinaryBits] = useState<Array<{ x: number; y: number; bit: string; id: number; opacity: number }>>([]);
  const [isMobile, setIsMobile] = useState(true); // Default to true to prevent flash

  // Detect mobile/touch devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia('(pointer: coarse)').matches ||
        window.innerWidth < 768 ||
        'ontouchstart' in window
      );
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mouse tracking - only runs on desktop
  useEffect(() => {
    if (isMobile) return; // Skip mouse tracking on mobile

    const updateMousePosition = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setMousePosition(newPos);

      // Update trail
      setTrail(prev => {
        const newTrail = [{ ...newPos, id: Date.now() }, ...prev.slice(0, 8)];
        return newTrail;
      });

      // Add binary particles randomly
      if (Math.random() > 0.7) {
        const newBit = {
          x: newPos.x + (Math.random() - 0.5) * 100,
          y: newPos.y + (Math.random() - 0.5) * 100,
          bit: Math.random() > 0.5 ? '1' : '0',
          id: Date.now() + Math.random(),
          opacity: 1
        };
        setBinaryBits(prev => [...prev.slice(-15), newBit]);
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Track mouse movement
    window.addEventListener('mousemove', updateMousePosition);

    // Track hover states on interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .interactive');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [isMobile]);

  // Animate binary bits - only runs on desktop
  useEffect(() => {
    if (isMobile) return;

    const interval = setInterval(() => {
      setBinaryBits(prev =>
        prev.map(bit => ({
          ...bit,
          opacity: bit.opacity - 0.05,
          y: bit.y - 1
        })).filter(bit => bit.opacity > 0)
      );
    }, 50);

    return () => clearInterval(interval);
  }, [isMobile]);

  // Don't render on mobile devices
  if (isMobile) return null;

  return (
    <>
      {/* Tech-themed main cursor */}
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${isHovering ? 1.3 : 1})`,
        }}
      >
        {/* Main cursor - circuit node */}
        <div className="relative">
          <div className={`w-6 h-6 bg-primary rounded-full transition-all duration-200 ${isHovering ? 'shadow-glow-primary' : ''}`}>
            <div className="absolute inset-1 bg-background rounded-full" />
            <div className="absolute inset-2 bg-primary rounded-full animate-pulse" />
          </div>

          {/* Circuit lines */}
          <div className={`absolute top-1/2 left-1/2 w-8 h-0.5 bg-primary/60 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${isHovering ? 'w-12 bg-primary' : ''}`} />
          <div className={`absolute top-1/2 left-1/2 w-0.5 h-8 bg-primary/60 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${isHovering ? 'h-12 bg-primary' : ''}`} />
        </div>
      </div>

      {/* Circuit trail */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-49"
          style={{
            left: point.x - 3,
            top: point.y - 3,
            opacity: (trail.length - index) / trail.length * 0.5,
          }}
        >
          <div className="w-1.5 h-1.5 bg-accent rounded-full" />
        </div>
      ))}

      {/* Binary particles */}
      {binaryBits.map((bit) => (
        <div
          key={bit.id}
          className="fixed pointer-events-none z-48 font-mono text-xs text-primary/70 select-none"
          style={{
            left: bit.x,
            top: bit.y,
            opacity: bit.opacity,
          }}
        >
          {bit.bit}
        </div>
      ))}

      {/* Tech grid background effect */}
      <div
        className="fixed pointer-events-none z-0 opacity-5"
        style={{
          left: mousePosition.x * 0.1,
          top: mousePosition.y * 0.1,
        }}
      >
        <div className="w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      {/* Secondary glow */}
      <div
        className="fixed pointer-events-none z-0 opacity-3"
        style={{
          left: mousePosition.x * -0.05,
          top: mousePosition.y * -0.05,
        }}
      >
        <div className="w-72 h-72 bg-accent rounded-full blur-3xl" />
      </div>

      {/* Hover effect - tech ring */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-49"
          style={{
            left: mousePosition.x - 25,
            top: mousePosition.y - 25,
          }}
        >
          <div className="w-12 h-12 border border-primary/40 rounded-full animate-ping" />
          <div className="absolute inset-2 border border-accent/40 rounded-full animate-ping" style={{ animationDelay: '0.1s' }} />
        </div>
      )}
    </>
  );
};

export default CursorTracker;
import { useState, useEffect } from 'react';

const CursorTracker = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
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
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          transform: `scale(${isHovering ? 1.5 : 1})`,
        }}
      >
        <div className={`w-5 h-5 bg-white rounded-full transition-all duration-200 ${isHovering ? 'opacity-80' : 'opacity-60'}`} />
      </div>

      {/* Cursor trail effect */}
      <div
        className="fixed pointer-events-none z-49"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transform: `scale(${isHovering ? 2 : 1.2})`,
        }}
      >
        <div className={`w-10 h-10 border-2 border-primary/30 rounded-full transition-all duration-300 ${isHovering ? 'border-primary/60' : ''}`} />
      </div>

      {/* Interactive background elements that follow cursor */}
      <div 
        className="fixed pointer-events-none z-0 opacity-5"
        style={{
          left: mousePosition.x * 0.1,
          top: mousePosition.y * 0.1,
        }}
      >
        <div className="w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>
      
      <div 
        className="fixed pointer-events-none z-0 opacity-3"
        style={{
          left: mousePosition.x * -0.05,
          top: mousePosition.y * -0.05,
        }}
      >
        <div className="w-72 h-72 bg-accent rounded-full blur-3xl" />
      </div>
    </>
  );
};

export default CursorTracker;
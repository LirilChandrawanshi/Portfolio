import { useEffect, useState } from 'react';

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    color: string;
    speed: number;
  }>>([]);

  useEffect(() => {
    const createParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 1,
          color: Math.random() > 0.5 ? 'primary' : 'accent',
          speed: Math.random() * 2 + 0.5,
        });
      }
      setParticles(newParticles);
    };

    createParticles();
    window.addEventListener('resize', createParticles);
    return () => window.removeEventListener('resize', createParticles);
  }, []);

  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        y: particle.y - particle.speed,
        x: particle.x + Math.sin(particle.y * 0.01) * 0.5,
      })).map(particle => 
        particle.y < -10 
          ? { ...particle, y: window.innerHeight + 10, x: Math.random() * window.innerWidth }
          : particle
      ));
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className={`absolute rounded-full bg-${particle.color}/20 animate-pulse`}
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            transition: 'all 0.05s linear',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
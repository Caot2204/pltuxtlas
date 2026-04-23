import { useState } from 'preact/hooks';

export default function Carousel({ imagenes, placeName }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
  };

  return (
    <div style={
      {
        position: 'relative',
        width: '78%',
        overflow: 'hidden',
        borderRadius: '12px'
      }
    }>
      {/* Contenedor de imágenes */}
      < div
        style={{
          display: 'flex',
          transition: 'transform 0.5s ease-out',
          transform: `translateX(-${currentIndex * 100}%)`
        }}
      >
        {
          imagenes.map((lugar, index) => (
            <div key={index} style={{ minWidth: '100%', position: 'relative' }}>
              <img
                src={lugar}
                alt={`${placeName} imagen ${index + 1}`}
                style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', bottom: 0, background: 'rgba(0,0,0,0.5)', color: 'white', width: '100%', padding: '1rem' }}>
                <h3 style={{ margin: 0 }}>{placeName}</h3>
              </div>
            </div>
          ))
        }
      </div >

      {/* Botones de navegación */}
      < button onClick={prevSlide} className="btn-nav left" >‹</button >
      <button onClick={nextSlide} className="btn-nav right">›</button>

      <style>{`
        .btn-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.7);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          cursor: pointer;
          font-size: 24px;
        }
        .left { left: 10px; }
        .right { right: 10px; }
      `}</style>
    </div >
  );
}
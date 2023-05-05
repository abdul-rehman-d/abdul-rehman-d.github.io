import star from '../assets/star.png'

const Stars = () => {
  return (
    <div className="fixed inset-0 left-[20%] overflow-hidden z-0 pointer-events-none">
      {Array(window.innerWidth < 779 ? 20 : window.innerWidth > 991 ? 35 : 50)
        .fill(0)
        .map(() => (
          <img
            src={star}
            className="absolute w-10 h-10 z-0 animate-pulse"
            style={{
              top: Math.floor(Math.random() * window.innerHeight - 400 / 10),
              left: `${Math.floor(Math.random() * 100)}%`,
              rotate: `${Math.floor(Math.random() * 90 - 1)}deg`,
            }}
          />
        ))}
    </div>
  );
};

export default Stars;

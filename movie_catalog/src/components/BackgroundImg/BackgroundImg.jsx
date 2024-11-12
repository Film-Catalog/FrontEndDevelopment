export default function BackgroundImg({ backgroundUrl, children }){
    return (
      <div
        className="h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      >
        {children}
      </div>
    );
}


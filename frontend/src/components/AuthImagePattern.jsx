const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        {/* Pattern */}
        <div className="relative w-48 h-48 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full bg-primary/10 border-2 border-base-300 animate-ping" />
          <div className="absolute inset-6 rounded-full bg-primary/10 border border-base-300 animate-pulse" />
          <div className="absolute inset-12 rounded-full bg-primary/10 border border-base-300" />
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold font-serif tracking-wide mb-3 text-base-content">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-base-content/70 italic leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default AuthImagePattern;

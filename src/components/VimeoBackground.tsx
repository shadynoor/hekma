import { Loader } from "lucide-react";
import React, { useEffect, useState } from "react";

interface VimeoBackgroundProps {
  videoId: string;
}

const VimeoBackground: React.FC<VimeoBackgroundProps> = ({ videoId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden iframe-padding">
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 bg-hcare-primary flex items-center justify-center z-20">
          <div className="text-center text-hcare-primary">
            <Loader size={48} className="animate-spin mx-auto mb-4" />
            <p className="text-lg font-medium">Loading...</p>
          </div>
        </div>
      )}

      {/* Video Background */}
      {!hasError ? (
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?autoplay=1&loop=1&muted=1&background=1&controls=0&title=0&byline=0&portrait=0`}
          className="iframe-style"
          frameBorder="0"
          allow="autoplay; fullscreen"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
          title="Background Video"
        />
      ) : (
        // Fallback background
        <div className="absolute inset-0 bg-gradient-to-br from-hcare-primary via-hcare-secondary to-hcare-accent">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      )}

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/30 z-10"></div> */}

      {/* Content */}
      {/* <div className="relative z-20 h-full">{children}</div> */}
    </div>
  );
};

export default VimeoBackground;

import { useState } from "react";

type YouTubeFacadeProps = {
  videoId: string;
  title: string;
  label: string;
  className?: string;
};

export default function YouTubeFacade({
  videoId,
  title,
  label,
  className = "",
}: YouTubeFacadeProps) {
  const [playing, setPlaying] = useState(false);
  const [useFallbackThumbnail, setUseFallbackThumbnail] = useState(false);

  return (
    <div
      className={`relative aspect-video overflow-hidden rounded-2xl bg-ink shadow-[0_24px_70px_-34px_rgba(18,21,15,0.7)] ${className}`}
    >
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full overflow-hidden text-left focus-visible:ring-inset"
          aria-label={`Play video: ${title}`}
        >
          <img
            src={`https://i.ytimg.com/vi/${videoId}/${
              useFallbackThumbnail ? "hqdefault" : "maxresdefault"
            }.jpg`}
            alt=""
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02] group-hover:opacity-90"
            loading="lazy"
            onError={() => setUseFallbackThumbnail(true)}
            onLoad={(event) => {
              if (!useFallbackThumbnail && event.currentTarget.naturalWidth <= 120) {
                setUseFallbackThumbnail(true);
              }
            }}
          />
          <span className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
          <span className="absolute inset-x-5 bottom-5 flex items-center gap-3 sm:inset-x-7 sm:bottom-7">
            <span className="grid h-12 w-12 flex-none place-items-center rounded-full bg-white text-forest shadow-lg transition-transform duration-300 group-hover:scale-105 sm:h-14 sm:w-14">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="ml-0.5 h-5 w-5 fill-current"
              >
                <path d="M8 5.5v13l10-6.5L8 5.5Z" />
              </svg>
            </span>
            <span className="text-sm font-semibold text-white sm:text-base">{label}</span>
          </span>
        </button>
      )}
    </div>
  );
}

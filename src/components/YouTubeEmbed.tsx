interface YouTubeEmbedProps {
  url: string;
  title?: string;
}

export function YouTubeEmbed({ url, title = 'YouTube video' }: YouTubeEmbedProps) {
  // Extract video ID from various YouTube URL formats
  const getVideoId = (url: string): string | null => {
    const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/];


    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  const videoId = getVideoId(url);

  if (!videoId) {
    return (
      <div data-ev-id="ev_4e533cd84a" className="aspect-video bg-muted rounded-xl flex items-center justify-center">
        <p data-ev-id="ev_c8c961d958" className="text-muted-foreground">Video unavailable</p>
      </div>);

  }

  return (
    <div data-ev-id="ev_88cabf5035" className="aspect-video rounded-xl overflow-hidden shadow-xl bg-black">
      <iframe data-ev-id="ev_629f5c5c19"
      src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full" />

    </div>);

}
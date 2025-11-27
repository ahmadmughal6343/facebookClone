export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const pageToken = searchParams.get('pageToken') || '';
  const API_KEY = process.env.VIDEO_API_KEY;
  const CHANNEL_ID = 'UCWOA1ZGywLbqmigxE4Qlvuw';

  // Fetch up to 50 videos per request (API max)
  const url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&type=video&maxResults=50&pageToken=${pageToken}`;

  const response = await fetch(url);
  const data = await response.json();

  if (!data.items) {
    return new Response(JSON.stringify({ videos: [], nextPageToken: null }), { status: 200 });
  }

  const videos = data.items
    .filter(item => item.id.videoId) // only videos
    .map(item => ({
      id: item.id.videoId,
      title: item.snippet.title,
      url: `https://www.youtube.com/embed/${item.id.videoId}?autoplay=1&mute=1&loop=1&playlist=${item.id.videoId}`,
    }));

  return new Response(JSON.stringify({
    videos,
    nextPageToken: data.nextPageToken || null,
  }), { status: 200 });
}

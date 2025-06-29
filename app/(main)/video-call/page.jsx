// app/video-call/page.jsx

import VideoCall from "./_components/video-call";



export default function VideoCallPage({ searchParams }) {
  const { sessionId, token } = searchParams;

  return <VideoCall sessionId={sessionId} token={token} />;
}

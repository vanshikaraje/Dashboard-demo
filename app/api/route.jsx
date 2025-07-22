// app/api/jobs/route.js
export async function GET(req) {
  const accessToken = "YOUR_INSTAGRAM_ACCESS_TOKEN"; // Replace with your Instagram Access Token
  const userId = "YOUR_INSTAGRAM_USER_ID"; // Replace with your Instagram Business Account User ID
  const url = `https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${accessToken}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Instagram Data:", data); // Check what data you're getting

    // Filter the posts for job-related content
    const jobPosts = data.data.filter(post =>
      post.caption && post.caption.toLowerCase().includes("job")
    );

    return new Response(JSON.stringify(jobPosts), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching Instagram data:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch data from Instagram" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

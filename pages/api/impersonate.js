import { withAuth } from "@clerk/nextjs/api";
import { getAuth } from "@clerk/nextjs/server";

export default withAuth(async (req, res) => {
  const { userId, getToken } = req.auth;
  const token = await getToken();

  const response = await fetch("https://api.clerk.dev/v1/actor_tokens", {
    Authorization: `Bearer ${token}`,
    body: {
      user_id: "user_2LDuOOdWS4jOV67anY38Rw6KXD8",
      actor: { sub: userId },
      expires_in_seconds: 3600,
      session_max_duration_in_seconds: 1800,
    },
  });

  console.log(response);
  res.status(200).json(response);
});

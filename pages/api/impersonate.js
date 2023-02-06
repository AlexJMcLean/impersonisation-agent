import { withAuth } from "@clerk/nextjs/api";
import axios from "axios";

export default withAuth(async (req, res) => {
  const { userId, getToken } = req.auth;
  const token = await getToken();

  let body = {
    user_id: "user_2LDuOOdWS4jOV67anY38Rw6KXD8",
    actor: { sub: userId },
    expires_in_seconds: 3600,
    session_max_duration_in_seconds: 1800,
  };

  let config = {
    Authorization: `Bearer ${token}`,
  };

  const response = await axios
    .post("https://api.clerk.dev/v1/actor_tokens", body, config)
    .catch((error) => {
      console.log(error);
    });

  console.log(response);
  res.status(200).json(response);
});

import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { login } from "../functions/login";

export default function Callback() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const makeReqToServer = async () => {
      const code = searchParams.get("code")
      const response = await Request.get('/auth/oauth-login?code=' + code);
      if (response.data.status) {
        login(response.data.jwt, response.data.userId);
        navigate('/movies', { replace: true });
      }
    }
    makeReqToServer();
  })
  
  return (
    <>
    </>
  );
}
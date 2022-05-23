export default function Callback() {
  const [searchParams, setSearchParams] = useSearchParams();
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
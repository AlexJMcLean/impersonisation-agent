export default function Impersonate() {
  const impersonateUser = async () => {
    const response = await fetch(
      "https://impersonisation-agent.vercel.app/api/impersonate"
    );
    console.log(response);
  };

  return <button onClick={() => impersonateUser()}>Impersonate user</button>;
}

import { useRouter } from "next/router";

const SettingsPage = () => {
  const router = useRouter();

  console.log(
    JSON.stringify(
      {
        isReady: router.isReady,
        pathname: router.pathname,
        query: router.query,
      },
      null,
      2
    )
  );

  return <div>Settings</div>;
};

export default SettingsPage;

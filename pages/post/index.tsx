export default function BlogRedirect() {
  return <></>;
}

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: "/",
    },
  };
};

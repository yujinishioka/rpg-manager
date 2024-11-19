import { useRouter } from "next/router";

export default function Slug(): any {
  const router = useRouter();
  const { slug } = router.query;

  if (router.isFallback || !slug) {
    return (
      <div className="container custom-min-margin my-6 items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="container custom-min-margin my-6">
      <h1 className="mb-6 uppercase">{slug}</h1>
      <p className="mb-2">slug: {slug}</p>
      <p className="font-bold">coming soon...</p>
    </div>
  );
}

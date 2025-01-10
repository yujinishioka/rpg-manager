import { useRouter } from "next/router";

export default function Wiki(): any {
  const router = useRouter();
  const { item } = router.query;
  
  return (
    <div className="container custom-min-margin my-6 items-center">
      <p>slug: {item}</p>
    </div>
  );
}
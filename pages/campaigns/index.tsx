import Link from "next/link";

export default function Campaigns(): any {
  return (
    <div className="container custom-min-margin my-6 items-center">
      <div className="flex mb-6 items-start justify-between">
        <h1 className="uppercase">Campaigns</h1>
        <Link
          href="/campaigns/create"
          className="bg-primary text-white rounded-lg px-2 py-1"
        >
          + new campaign
        </Link>
      </div>
    </div>
  );
}
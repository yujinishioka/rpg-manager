import Link from "next/link";
import Html from "@/components/html/Html";

export default function CardWiki({ data }: any) {
  return (
    <Link
      href={`/wiki/${data.type.toLowerCase().replace(/\s+/g, "-")}/${data.title.toLowerCase().replace(/\s+/g, "-")}`}
      className="flex flex-col p-4 gap-2 bg-secondary/70 rounded-lg text-white"
    >
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">{data.title}</h2>
        <p className="px-2 py-1 text-sm bg-black/80 rounded-lg">
          {data.type}
        </p>
      </div>
      {data?.text && (
        <Html text={data.text} className="text-sm text-justify" />
      )}
    </Link>
  );
}

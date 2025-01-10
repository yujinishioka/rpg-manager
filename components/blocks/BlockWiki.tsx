import CardWiki from "@/components/cards/CardWiki";

export default function BlockWiki({ data }: any) {
  return (
    <div className="grid gap-6 lg:grid-cols-3 lg:gap-x-8">
      {data.length > 0 &&
        data.map((item: any, index: number) => (
          <CardWiki data={item} key={`${item.type}-${index}`} />
        ))}
      {data.length === 0 && (
        <p className="flex mt-4 justify-center text-lg lg:col-span-3 lg:mt-8 lg:text-2xl">
          nenhum dado encontrado
        </p>
      )}
    </div>
  );
}

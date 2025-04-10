import { promises as fs } from 'fs';
import path from 'path';
import Html from '@/components/html/Html';

const fetchItemData = async (type: string, item: string) => {
  let filePath = '';
  if (type === 'class') {
    filePath = path.join(process.cwd(), 'data', 'classes.json');
  } else if (type === 'race') {
    filePath = path.join(process.cwd(), 'data', 'races.json');
  } else {
    return {
      title: 'Erro',
      content: [{
        title: 'Tipo de dados não encontrado',
        description: '<p>Procure um administrador para adicionar este tipo de dados.</p>',
      }]
    };
  }

  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const parsedData = JSON.parse(data);
    const itemData = parsedData.find((data: any) => data.name.toLowerCase() === item);

    if (itemData) {
      return {
        title: item,
        content: itemData.details,
      };
    }

    return {
      title: 'Item não encontrado',
      content: [{
        title: 'Não foi possível encontrar os dados para este item.',
        description: '<p>Procure um administrador para adicionar este tipo de dados.</p>',
      }]
    };
  } catch (error) {
    console.error(`Erro ao ler arquivo JSON de ${type}:`, error);
    return {
      title: 'Erro',
      content: [{
        title: 'Houve um erro ao carregar os dados.',
        description: '<p>Procure um administrador para verificar o problema.</p>',
      }]
    };
  }
};

export async function getServerSideProps({ params }: any) {
  const { type, item } = params;
  const data = await fetchItemData(type, item);

  return {
    props: {
      data,
    },
  };
}

export default function Wiki({ data }: any) {
  return (
    <div className="container custom-min-margin my-6 items-center">
      {data?.content?.map((item: any, index: number) => (
        <div key={'card-' + index} className="flex flex-col p-4 gap-2 bg-secondary/70 text-white rounded-lg mb-4">
          <h2 className="text-lg font-bold">{item.title}</h2>
          {item.description && (
            <Html text={item.description} className="text-sm text-justify"/>
          )}
        </div>
      ))}
    </div>
  );
}

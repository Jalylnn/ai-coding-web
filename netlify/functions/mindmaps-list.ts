import { getMindmapList } from '../../shared/mindmaps';

export async function handler() {
  return {
    statusCode: 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=60',
    },
    body: JSON.stringify(getMindmapList()),
  };
}

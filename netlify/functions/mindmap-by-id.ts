import { getMindmapById } from '../../shared/mindmaps';

interface NetlifyEvent {
  queryStringParameters?: Record<string, string | undefined>;
}

export async function handler(event: NetlifyEvent) {
  const id = event.queryStringParameters?.id;
  if (!id) {
    return {
      statusCode: 400,
      headers: { 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ error: 'Missing mindmap id' }),
    };
  }

  const mindmap = getMindmapById(id);
  if (!mindmap) {
    return {
      statusCode: 404,
      headers: { 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ error: 'Mindmap not found' }),
    };
  }

  return {
    statusCode: 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=60',
    },
    body: JSON.stringify(mindmap),
  };
}

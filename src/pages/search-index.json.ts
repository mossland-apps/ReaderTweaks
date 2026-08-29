import type { APIRoute } from 'astro';
import { buildSearchDocs } from '../lib/search-index';

export const GET: APIRoute = async () => {
  const docs = await buildSearchDocs();
  return new Response(JSON.stringify(docs), {
    headers: { 'content-type': 'application/json; charset=utf-8' },
  });
};

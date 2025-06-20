import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

/**
 * Chrome DevTools automatically requests this endpoint when DevTools is open.
 * This handler prevents 404 errors in the console during development.
 * The endpoint doesn't provide any functionality - it's purely for noise reduction.
 */
export const GET: RequestHandler = async () => {
  return json({});
};

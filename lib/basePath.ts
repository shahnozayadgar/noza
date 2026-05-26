// Simple basePath helper for static assets
export const basePath = "";

export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}
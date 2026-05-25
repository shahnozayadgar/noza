// Simple basePath helper for static assets
export const basePath = "/noza";

export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}
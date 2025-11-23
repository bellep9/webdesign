// Mock unsplash tool for placeholder images
export async function unsplash_tool(query: string): Promise<string> {
  // Return a placeholder image URL
  return `https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&q=80`;
}

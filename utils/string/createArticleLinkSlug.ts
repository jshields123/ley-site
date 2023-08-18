export const createLinkSlug = (text: string) =>
  text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^a-zA-Z0-9-]/g, '');

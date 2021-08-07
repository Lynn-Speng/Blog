export const getPages = async (pageId, apiUrl = process.env.VUE_APP_NOTION_API_URL) =>
  await fetch(`${apiUrl}/table/${pageId}`).then(res => res.json());

export const getPagesByTag = async (tag, apiUrl = process.env.VUE_APP_NOTION_API_URL) =>
  await fetch(`${apiUrl}/tag/${tag}`).then(res => res.json());

export const getPageBlocksByPageId = async (pageId, apiUrl = process.env.VUE_APP_NOTION_API_URL) =>
  await fetch(`${apiUrl}/page/${pageId}`).then(res => res.json());

export const getPageBlocksByPath = async (year, month, day, slug, apiUrl = process.env.VUE_APP_NOTION_API_URL) =>
  await fetch(`${apiUrl}/path/${year}/${month}/${day}/${slug}`).then(res => res.json());

export const parsePageMetaInfo = pageBlock => {
  for (let blockId in pageBlock) {
    if (pageBlock[blockId].value.type === "page") {
      const props = pageBlock[blockId].value.properties;
      return {
        id: blockId,
        Tag: props["UD`F"][0][0],
        Slug: props["ajlV"][0][0],
        Cover: [
          {
            name: props["e>P{"][0][0],
            rawUrl: props["e>P{"][0][1][0][1],
          },
        ],
        Description: props["kzYP"][0][0],
        Title: props["shJq"][0][0],
        Date: props["{G^s"][0][1][0][1].start_date,
        Published: props["|uFq"] === "Yes",
      };
    }
  }
};

export const getImageUrl = (rawUrl, pageId) => {
  return `${process.env.VUE_APP_NOTION_API_URL}/image/${encodeURIComponent(rawUrl)}/${pageId}`;
};

const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

export default async (req, res) => {
  // An array with your links
  const links = [
    { url: "/Home", changefreq: "daily", priority: 0.4 },
    { url: "/About", changefreq: "daily", priority: 0.3 },
    { url: "/R10GoesALongWay", changefreq: "daily", priority: 0.4 },
    { url: "/FundiCsi", changefreq: "daily", priority: 0.3 },
    { url: "/Press", changefreq: "daily", priority: 0.3 },
    { url: "/Contact", changefreq: "daily", priority: 0.3 },

  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
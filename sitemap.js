const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { createGzip } = require('zlib');

// Contoh data URL yang akan dimasukkan ke dalam sitemap
const urls = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.7 },
  { url: '/artikel', changefreq: 'weekly', priority: 0.7 },
  { url: '/produk', changefreq: 'weekly', priority: 0.7 },
  // Tambahkan URL lainnya sesuai kebutuhan
];

// Fungsi untuk membuat sitemap
async function generateSitemap() {
  const stream = new SitemapStream({ hostname: 'https://www.pusatkerupukindonesia.id' });
  const pipeline = stream.pipe(createGzip());

  urls.forEach(url => {
    console.log('Menambahkan URL:', url.url);
    stream.write(url);
  });

  stream.end();

  // Konversi stream ke Promise agar bisa menunggu proses selesai
  return streamToPromise(pipeline);
}

// Panggil fungsi untuk membuat sitemap dan simpan ke file
async function createSitemapFile() {
  try {
    const sitemapBuffer = await generateSitemap();
    console.log('Sitemap berhasil dibuat, menyimpan ke file.');
    fs.writeFileSync('./sitemap.xml.gz', sitemapBuffer);
    console.log('Sitemap berhasil disimpan.');
  } catch (error) {
    console.error('Error dalam pembuatan sitemap:', error);
  }
}

createSitemapFile();

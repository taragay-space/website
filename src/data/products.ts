export type Product = {
  slug: string;
  title: string;
  summary: string;
  cover: string;
  features: string[];
  gallery: string[];
  youtube?: string; // tam YouTube URL'si veya ID
  drawings?: { title: string; url: string }[];
  usage?: string[]; // kullanım alanları
};

export const products: Product[] = [
  {
    slug: "inis-takimi-3d",
    title: "3D Baskı İniş Takımı",
    summary: "4–6 kg kalkış ağırlığına sahip RC uçaklar ve İHA'lar için modüler iniş takımı.",
    cover: "/galeri/inis_sistemi.png",
    features: [
      "Malzeme: Karbon fiber takviyeli naylon (PA‑CF)",
      "Üretim: FDM 3D baskı",
      "Ağırlık: ~180 g (çift bacak)",
      "Bağlantı: M4 paslanmaz civata, pirinç insert",
      "Yaylı amortisör, modüler tasarım"
    ],
    gallery: ["/galeri/inis_sistemi.png", "/galeri/roket3.jpg"],
    youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    usage: ["RC uçak", "İHA", "Öğrenci projeleri"],
    drawings: [
      // { title: "Teknik Resim (PDF)", url: "/docs/inis-takimi.pdf" }
    ]
  },
  {
    slug: "firlatma-kulesi",
    title: "Fırlatma Kulesi",
    summary: "Hafif, modüler ve taşınabilir roket fırlatma kulesi.",
    cover: "/galeri/kule.jpg",
    features: [
      "Yüksekliği ayarlanabilir kızak",
      "Hızlı kurulum, aletsiz montaj",
      "Açık alanda sabitleme ankrajları"
    ],
    gallery: ["/galeri/kule.jpg", "/galeri/roket1.jpg"]
  }
];

export const findProduct = (slug: string) => products.find(p => p.slug === slug);

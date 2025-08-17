import { socialLinks } from "./../lib/config";

export const metadata = {
  title: "PDFs",
  description: "Mathematical documents and research materials",
};

interface Document {
  title: string;
  description: string;
  mainUrl: string;
  supplementUrl?: string;
  lastUpdated: string;
}

const documents: Document[] = [
  {
    title: "基本群と被覆空間の Galois 理論",
    description: "「基本群と被覆空間の Galois 理論」というタイトルで発表したときのレジュメです。本原稿の作成および発表にあたって Capila (@_Capila) さんにアドバイスをいただきました。",
    mainUrl: "/pdfs/pi1.pdf",
    supplementUrl: "/pdfs/pi1-pic.pdf",
    lastUpdated: "2025/08/18",
  },
];

const atiyahMacdonaldChapters = [
  {
    chapter: 1,
    title: "Rings and Ideals",
    url: "/pdfs/atiyah-macdonald/rings-and-ideals.pdf",
    lastUpdated: "2021/05/15",
  },
  {
    chapter: 2,
    title: "Modules",
    url: "/pdfs/atiyah-macdonald/modules.pdf",
    lastUpdated: "2023/01/15",
  },
  {
    chapter: 6,
    title: "Chain Conditions",
    url: "/pdfs/atiyah-macdonald/chain-conditions.pdf",
    lastUpdated: "2021/05/15",
  },
];

export default function DocumentsPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">PDFs</h1>
      
      <div className="mb-12">
        <h2 className="mb-6 text-xl font-medium">Mathematical Documents</h2>
        <div className="space-y-6">
          {documents.map((document) => (
            <div key={document.mainUrl} className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-6">
              <h3 className="text-lg font-medium mb-2">{document.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                {document.description}
              </p>
              <div className="flex gap-4">
                <a
                  href={document.mainUrl}
                  className="text-neutral-900 dark:text-neutral-100 font-medium hover:text-neutral-600 dark:hover:text-neutral-300 hover:underline"
                >
                  本文 (PDF)
                </a>
                {document.supplementUrl && (
                  <a
                    href={document.supplementUrl}
                    className="text-neutral-900 dark:text-neutral-100 font-medium hover:text-neutral-600 dark:hover:text-neutral-300 hover:underline"
                  >
                    具体例や絵など (PDF)
                  </a>
                )}
              </div>
              <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-2">
                最終更新: {document.lastUpdated}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="mb-6 text-xl font-medium">Atiyah-MacDonald 可換代数入門 演習問題解答</h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-6">
          Ryo (@ryo_Iridium) さん、sb (@sb_syzygy) さんと Atiyah-MacDonald 可換代数入門の演習問題を解くゼミをしていました。
        </p>
        <div className="space-y-4">
          {atiyahMacdonaldChapters.map((chapter) => (
            <div key={chapter.url} className="border border-neutral-200 dark:border-neutral-800 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">
                    第 {chapter.chapter} 章: {chapter.title}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">
                    最終更新: {chapter.lastUpdated}
                  </p>
                </div>
                <a
                  href={chapter.url}
                  className="text-neutral-900 dark:text-neutral-100 font-medium hover:text-neutral-600 dark:hover:text-neutral-300 hover:underline"
                >
                  PDF を開く
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-6 prose">
          誤植、数学的誤り、不明点などがありましたら{" "}
          <a href={socialLinks.twitter} target="_blank">
            X (Twitter)
          </a>
          などでお願いします。
        </p>
      </div>
    </section>
  );
}

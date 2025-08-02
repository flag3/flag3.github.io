import { redirect } from 'next/navigation';

export function generateStaticParams() {
  return [
    { pdf: ['pi1.pdf'] },
    { pdf: ['pi1_pic.pdf'] },
    { pdf: ['atiyah-macdonald', 'Chain_Conditions.pdf'] },
    { pdf: ['atiyah-macdonald', 'Modules.pdf'] },
    { pdf: ['atiyah-macdonald', 'Rings_and_Ideals.pdf'] },
  ];
}

interface PdfRedirectProps {
  params: Promise<{ pdf: string[] }>;
}

export default async function PdfRedirect({ params }: PdfRedirectProps) {
  const { pdf } = await params;
  const transformedPdf = pdf.map(segment => 
    segment
      .replace(/_/g, '-')
      .toLowerCase()
  );
  const fullPath = transformedPdf.join('/');

  if (fullPath.endsWith('.pdf')) {
    let redirectPath = '';

    if (transformedPdf.length === 1) {
      redirectPath = `/pdfs/${fullPath}`;
    } else if (transformedPdf[0] === 'atiyah-macdonald' && transformedPdf.length === 2) {
      redirectPath = `/pdfs/${fullPath}`;
    } else {
      redirectPath = `/pdfs/${fullPath}`;
    }

    redirect(redirectPath);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Redirecting...</h1>
      <p className="mb-4">This file has moved to a new location.</p>
      <p>
        If you are not redirected automatically, please go back and try again.
      </p>
    </div>
  );
}

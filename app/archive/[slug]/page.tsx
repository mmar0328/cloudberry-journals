import { notFound } from 'next/navigation'
import CloudberryArchiveDetail, { archiveSlugs } from '@/components/cloudberry-archive-detail'

export function generateStaticParams() {
  return archiveSlugs.map((slug) => ({ slug }))
}

export default async function ArchiveDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!archiveSlugs.includes(slug)) notFound()
  return <CloudberryArchiveDetail slug={slug} />
}

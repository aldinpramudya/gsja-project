import TitlePageHero from "@/ui/TitlePageHero";
import Image from "next/image";

interface Article {
    id: number;
    article_title: string;
    article_slug: string;
    article_excerpt: string;
    article_content: string;
    article_image: string;
    tags: Array<{
        id: number;
        tags_name: string;
    }>;
    created_at: string;
    updated_at: string;
}

interface ApiResponse {
    message: string;
    data: Article;
}

async function getArticle(slug: string): Promise<Article | null> {
    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL
        const response = await fetch(
            `${apiUrl}/articles/${slug}`,
            {
                cache: 'no-store'
            }
        );

        if (!response.ok) {
            return null;
        }

        const result: ApiResponse = await response.json();
        return result.data;
    } catch (error) {
        console.error('Error fetching article:', error);
        return null;
    }
}

export default async function ArtikelPage({
    params
}: {
    params: Promise<{ artikel: string }>;
}) {
    const artikelSlug = (await params).artikel;
    const article = await getArticle(artikelSlug);

    if (!article) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl font-bold text-red-600 mb-4">
                    Artikel Tidak Ditemukan
                </h1>
                <p className="text-gray-600">
                    Artikel yang Anda cari tidak tersedia.
                </p>
            </div>
        );
    }

    return (
        <>
            <TitlePageHero title={article.article_title} images={article.article_image} />
            <div className="px-90 py-20">
                {/* Header Article */}
                <article className="max-w-4xl mx-auto">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-gray-600 mb-6">
                        <span className="font-bold">
                            {new Date(article.created_at).toLocaleDateString('id-ID', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })}
                        </span>
                        {article.tags.length > 0 && (
                            <div className="flex gap-2 flex-wrap">
                                {article.tags.map((tag) => (
                                    <span
                                        key={tag.id}
                                        className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                                    >
                                        {tag.tags_name}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                    {/* Title */}
                    <h1 className="text-4xl font-bold mb-4">
                        {article.article_title}
                    </h1>

                    {/* Featured Image */}
                    {article.article_image && (
                        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
                            <Image
                                src={article.article_image}
                                alt={article.article_title}
                                fill
                                className="object-cover"
                                priority
                                unoptimized={process.env.NODE_ENV === 'development'}
                            />
                        </div>
                    )}

                    {/* Excerpt */}
                    <p className="text-xl text-gray-700 mb-6 italic">
                        {article.article_excerpt}
                    </p>

                    {/* Content */}
                    <div
                        className="prose prose-lg max-w-none"
                        dangerouslySetInnerHTML={{ __html: article.article_content }}
                    />
                </article>
            </div>

        </>
    );
}
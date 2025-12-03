"use client"

import BaseCard from "@/ui/BaseCard"
import { useEffect, useState } from "react";
interface Article {
    id: number;
    article_title: string;
    article_slug: string;
    article_excerpt: string;
    article_image: string | null;
    is_visible: number;
}

interface ApiResponse {
    message: string;
    data: {
        data: Article[]
    }
}

export default function ListArtikel() {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchArticles()
    }, [])

    const fetchArticles = async () => {
        try {
            setLoading(true);
            const apiUrl = process.env.NEXT_PUBLIC_API_URL
            const response = await fetch(`${apiUrl}/articles`)

            if (!response.ok) {
                throw new Error('Failed to Fetch Articles')
            }

            const result: ApiResponse = await response.json()
            setArticles(result.data.data);

        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error Occured')
        } finally {
            setLoading(false)
        }
    }

    // Component Loading
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="text-xl font-semibold">Loading articles...</div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="text-xl font-semibold text-red-600">Error: {error}</div>
            </div>
        )
    }

    if (articles.length === 0) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="text-xl font-semibold text-gray-600">No articles found</div>
            </div>
        )
    }

    return (
        <>
            {/* Fetching data */}
            {articles.map((article) => (
                <BaseCard
                    key={article.id}
                    image={article.article_image || '/images/article-photo.png'}
                    title={article.article_title}
                    excerpt={article.article_excerpt}
                    slug={article.article_slug}
                />
            ))}
        </>
    )
}
"use client"

import BaseCard from "@/ui/BaseCard"
import BaseRedline from "@/ui/BaseRedline"
import Button from "@/ui/Button"
import RedirectCard from "@/ui/RedirectCard"
import Image from "next/image"
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

export default function MenuArticleComponents() {
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

    return (
        <>
            {/* Menu */}
            <div className="flex items-center space-x-10">
                <Image
                    src="/images/menu-photo.png"
                    alt="Menu Photo"
                    width={565}
                    height={545}
                />
                <div>
                    <div>
                        <BaseRedline width="50" height="2" />
                        <p className="text-(--main-color) uppercase font-bold text-[40px]">
                            menu
                        </p>
                    </div>
                    <div className="flex flex-row space-x-5 pt-5">
                        <div className="flex space-x-5 ">
                            <RedirectCard image="/images/card-photo.png" title="Gereja Kami" excerpt="Temukan gereja kami di tempat terdekatmu !" link="/gereja-kami" />
                            <RedirectCard image="/images/church-event.jpg" title="Event Kami" excerpt="Bergabunglah dengan event kami !" link="/gereja-kami" />
                            <RedirectCard image="/images/organization.jpg" title="Susunan Pengurus" excerpt="Kenali kami lebih dalam !" link="/susunan-pengurus"/>
                        </div>
                    </div>
                </div>
            </div>
            {/* Article */}
            <div className="flex items-center justify-end space-x-10 mt-15">
                <div>
                    <div className="flex flex-col items-end">
                        <BaseRedline width="50" height="2" />
                        <p className="text-(--main-color) uppercase font-bold text-[40px]">
                            artikel
                        </p>
                    </div>
                    <div className="flex flex-row space-x-5 pt-5">
                        <div className="flex space-x-5">
                            {articles.map((article) => (
                                <BaseCard
                                    key={article.id}
                                    baseUrl="/artikel"
                                    image={article.article_image || '/images/article-photo.png'}
                                    title={article.article_title}
                                    excerpt={article.article_excerpt}
                                    slug={article.article_slug}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex pt-10 justify-end">
                        {/* Button Direct Artikel */}
                        <Button href="/artikel">Lihat Artikel</Button>
                        {/* Button Direct Artikel End */}
                    </div>
                </div>
                <Image
                    src="/images/article-photo.png"
                    alt="Menu Photo"
                    width={565}
                    height={545}
                />
            </div>
        </>
    )
}
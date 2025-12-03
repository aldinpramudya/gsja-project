"use client"

import BaseCard from "@/ui/BaseCard";
import { useEffect, useState } from "react";

interface Gereja {
    id: number;
    name_gereja: string;
    slugs_gereja: string;
    image_gereja: string | null;
    address_gereja: string;
}

interface ApiResponse {
    message: string;
    data: {
        data: Gereja[]
    }
}


export default function ListGereja() {
    const [gereja, setGereja] = useState<Gereja[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchGereja()
    }, [])

    const fetchGereja = async () => {
        try {
            setLoading(true)
            const apiUrl = process.env.NEXT_PUBLIC_API_URL
            const response = await fetch(`${apiUrl}/gereja`)

            if (!response.ok) {
                throw new Error('Failed to Fetch Data Gereja')
            }

            const result: ApiResponse = await response.json()
            setGereja(result.data.data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Error Occured');
        } finally {
            setLoading(false)
        }
    }

    // Component Loading
    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="text-xl font-semibold">Loading data Gereja...</div>
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

    if (gereja.length === 0) {
        return (
            <div className="flex justify-center items-center min-h-[400px]">
                <div className="text-xl font-semibold text-gray-600">No Data Gereja found</div>
            </div>
        )
    }

    return (
        <>
            {gereja.map((data) => (
                <BaseCard
                    key={data.id}
                    baseUrl="/gereja-kami"
                    image={data.image_gereja || 'images/article-photo.png'}
                    title={data.name_gereja}
                    excerpt={data.address_gereja}
                    slug={data.slugs_gereja}
                />
            ))}
        </>
    )
}
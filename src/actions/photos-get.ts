"use server";

import { BASE_URL } from "@/api/api";
import { FeedList } from "@/types/feed";

export default async function photosGet() {
	const response = await fetch(
		`${BASE_URL}/json/api/photo/?__page=1&_total=6&_user=0`
	);
	const data: FeedList[] = await response.json();
    
	return data;
}

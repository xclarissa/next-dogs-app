"use server";

import { FeedList } from "@/types/feed";

export default async function photosGet() {
	const response = await fetch(
		"https://dogsapi.origamid.dev/json/api/photo/?__page=1&_total=6&_user=0"
	);
	const data: FeedList[] = await response.json();
    
	return data;
}

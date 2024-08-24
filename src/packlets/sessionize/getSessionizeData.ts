import type {SessionizeData} from "$sessionize/types.ts";

export const getSessionizeData = async (): Promise<SessionizeData> => {
    const response = await fetch('https://sessionize.com/api/v2/i9esy36q/view/All?preview=True');
    const data = await response.json();
    return data;
}

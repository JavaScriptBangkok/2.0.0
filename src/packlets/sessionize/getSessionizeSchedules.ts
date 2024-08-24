import type { SessionizeSchedule } from "$sessionize/types.ts";

export const getSessionizeSchedules = async (): Promise<SessionizeSchedule> => {
    const response = await fetch('https://sessionize.com/api/v2/i9esy36q/view/GridSmart');
    const data = await response.json();
    return data;
}

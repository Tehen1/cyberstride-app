"use server";

import { getPersonalTrainerTips, type PersonalTrainerTipsInput, type PersonalTrainerTipsOutput } from "@/ai/flows/personal-trainer-tips";

export async function getAITips(input: PersonalTrainerTipsInput): Promise<{ recommendation: string; motivation: string; } | { error: string; }> {
    try {
        const result: PersonalTrainerTipsOutput = await getPersonalTrainerTips(input);
        return result;
    } catch (e: any) {
        console.error(e);
        return { error: e.message || "An unexpected error occurred." };
    }
}

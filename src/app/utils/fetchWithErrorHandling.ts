/* eslint-disable @typescript-eslint/no-explicit-any */
export const fetchWithErrorHandling = async <T>(url: string): Promise<T> => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("failes fetching data");
        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error.message || "unknown error");
    }
};

// lib/api.ts
export interface Lawyer {
  id: number;
  name: string;
  specialization: string;
  experience_years: number;
  bar_id?: string;
  availability: boolean;
  rating?: number;
  fees: number;
}

// Submit client case
export async function submitCase(caseData: Record<string, any>) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cases`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(caseData),
    });

    if (!res.ok) {
      throw new Error(`Failed to submit case: ${res.statusText}`);
    }

    const data = await res.json();
    return data; // should contain { id: case_id, ... }
  } catch (err) {
    console.error(err);
    throw err;
  }
}

// Fetch all lawyers
export async function fetchLawyers(): Promise<Lawyer[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/lawyers`);
    if (!res.ok) {
      throw new Error(`Failed to fetch lawyers: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
}


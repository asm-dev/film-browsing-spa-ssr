import { cookies } from "next/headers";

export async function isMockEnabledServer(): Promise<boolean> {
  const cookieStore = await cookies();
  return cookieStore.get("useMock")?.value === "true";
}

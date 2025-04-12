export function isMockEnabledClient(): boolean {
  if (typeof window === "undefined") return false;
  return document.cookie.includes("useMock=true");
}

export function enableMockClient() {
  document.cookie = "useMock=true; path=/";
}

export function disableMockClient() {
  document.cookie = "useMock=false; path=/";
}

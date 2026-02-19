const STORAGE_KEY = "scrapers-app-state";

export interface ScraperState {
  name: string;
  step: number;
  websiteUrl: string;
  instructions: string;
  outputFormat: string;
  schedule: string;
  deliveryMethod: string;
  deliveryValue: string;
  verifySchedule: string;
  onFailureFix: boolean;
  onFailureEmail: boolean;
  onFailureEmailAddress: string;
  onFailureRerun: boolean;
}

export const defaultState: ScraperState = {
  name: "",
  step: 0,
  websiteUrl: "",
  instructions: "",
  outputFormat: "",
  schedule: "daily",
  deliveryMethod: "email",
  deliveryValue: "",
  verifySchedule: "always",
  onFailureFix: true,
  onFailureEmail: false,
  onFailureEmailAddress: "",
  onFailureRerun: true,
};

export function loadState(): ScraperState {
  if (typeof window === "undefined") return defaultState;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    return { ...defaultState, ...JSON.parse(raw) };
  } catch {
    return defaultState;
  }
}

export function saveState(state: ScraperState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export interface TitleRule {
  searchString: string;
  color: GoogleAppsScript.Calendar.EventColor;
  removeExistingGuests: boolean;
  guests?: string[];
}

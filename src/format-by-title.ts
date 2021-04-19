import { TitleRule } from './title-rule.interface';

function familyCalendarColor() {
  let today = new Date();

  let nextWeek = new Date();
  nextWeek.setDate(today.getDate() + 7);

  let calendars = CalendarApp.getAllOwnedCalendars();

  let updatedEvents = 0;
  calendars.forEach((calendar) => {
    let events = calendar.getEvents(today, nextWeek);
    const titleRules = FamilyCalendar.environment.titleRules;
    Logger.log(titleRules);
    // TODO: is there a more efficent way to do this?
    events.forEach((e) => {
      let title = e.getTitle();
      titleRules.forEach((rule: TitleRule) => {
        if (title.includes(rule.searchString)) {
          rule.removeExistingGuests ? removeAllGuests(e) : undefined;
          e.setColor(rule.color.toString());
          rule.guests?.forEach((g) => e.addGuest(g));
          updatedEvents++;
        }
      });
    });
  });
  Logger.log(updatedEvents + ' events updated');
}

function removeAllGuests(event: GoogleAppsScript.Calendar.CalendarEvent) {
  event.getGuestList().forEach((g) => {
    event.removeGuest(g.getEmail());
  });
}

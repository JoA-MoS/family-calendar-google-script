namespace FamilyCalendar {
  export const environment = {
    titleRules: JSON.parse(
      PropertiesService.getScriptProperties().getProperty('titleRules'),
    ),
  };
}

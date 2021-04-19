/**
 * Example script properties file copy this and remove -example to configure your own settings
 */
import { TitleRule } from './src/title-rule.interface';

const scriptProperties = PropertiesService.getScriptProperties();

const titleRules: TitleRule[] = [
  {
    searchString: 'MyName:',
    color: CalendarApp.EventColor.GREEN,
    removeExistingGuests: true,
    guests: ['fake@email.com'],
  },
  {
    searchString: 'MyName2:',
    color: CalendarApp.EventColor.MAUVE,
    removeExistingGuests: true,
  },
];

scriptProperties.setProperties({
  // store rules as json string in the future maybe we can create a service for this
  titleRules: JSON.stringify(titleRules),
});

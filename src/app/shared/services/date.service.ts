import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable()

export class DateService {

  constructor(private translate: TranslateService) {}

  // This function should use stream function instead of instant but at the moment it can't be done due to the primeng datepicker not updating as it should
  getLocale(): any {

    return {
      firstDayOfWeek: 1,
      dayNames: [
        this.translate.instant('WEEKDAYS.SUNDAY.FULL'),
        this.translate.instant('WEEKDAYS.MONDAY.FULL'),
        this.translate.instant('WEEKDAYS.TUESDAY.FULL'),
        this.translate.instant('WEEKDAYS.WEDNESDAY.FULL'),
        this.translate.instant('WEEKDAYS.THURSDAY.FULL'),
        this.translate.instant('WEEKDAYS.FRIDAY.FULL'),
        this.translate.instant('WEEKDAYS.SATURDAY.FULL')
      ],
      dayNamesShort: [
        this.translate.instant('WEEKDAYS.SUNDAY.SHORT'),
        this.translate.instant('WEEKDAYS.MONDAY.SHORT'),
        this.translate.instant('WEEKDAYS.TUESDAY.SHORT'),
        this.translate.instant('WEEKDAYS.WEDNESDAY.SHORT'),
        this.translate.instant('WEEKDAYS.THURSDAY.SHORT'),
        this.translate.instant('WEEKDAYS.FRIDAY.SHORT'),
        this.translate.instant('WEEKDAYS.SATURDAY.SHORT')
      ],
      dayNamesMin: [
        this.translate.instant('WEEKDAYS.SUNDAY.MIN'),
        this.translate.instant('WEEKDAYS.MONDAY.MIN'),
        this.translate.instant('WEEKDAYS.TUESDAY.MIN'),
        this.translate.instant('WEEKDAYS.WEDNESDAY.MIN'),
        this.translate.instant('WEEKDAYS.THURSDAY.MIN'),
        this.translate.instant('WEEKDAYS.FRIDAY.MIN'),
        this.translate.instant('WEEKDAYS.SATURDAY.MIN')
      ],
      monthNames: [
        this.translate.instant('MONTHS.JANUARY.FULL'),
        this.translate.instant('MONTHS.FEBRUARY.FULL'),
        this.translate.instant('MONTHS.MARS.FULL'),
        this.translate.instant('MONTHS.APRIL.FULL'),
        this.translate.instant('MONTHS.MAY.FULL'),
        this.translate.instant('MONTHS.JUNE.FULL'),
        this.translate.instant('MONTHS.JULY.FULL'),
        this.translate.instant('MONTHS.AUGUST.FULL'),
        this.translate.instant('MONTHS.SEPTEMBER.FULL'),
        this.translate.instant('MONTHS.OCTOBER.FULL'),
        this.translate.instant('MONTHS.NOVEMBER.FULL'),
        this.translate.instant('MONTHS.DECEMBER.FULL')
      ],
      monthNamesShort: [
        this.translate.instant('MONTHS.JANUARY.SHORT'),
        this.translate.instant('MONTHS.FEBRUARY.SHORT'),
        this.translate.instant('MONTHS.MARS.SHORT'),
        this.translate.instant('MONTHS.APRIL.SHORT'),
        this.translate.instant('MONTHS.MAY.SHORT'),
        this.translate.instant('MONTHS.JUNE.SHORT'),
        this.translate.instant('MONTHS.JULY.SHORT'),
        this.translate.instant('MONTHS.AUGUST.SHORT'),
        this.translate.instant('MONTHS.SEPTEMBER.SHORT'),
        this.translate.instant('MONTHS.OCTOBER.SHORT'),
        this.translate.instant('MONTHS.NOVEMBER.SHORT'),
        this.translate.instant('MONTHS.DECEMBER.SHORT')
      ]
    };
  }
}
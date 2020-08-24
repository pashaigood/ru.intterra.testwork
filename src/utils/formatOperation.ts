import dayjs from 'dayjs';
import FieldOperation from '@/types/FieldOperation';
import Operation, { Assessment, OperationType } from '@/models/Operation';
import TDate from '@/models/TDate';
import i18n from '@/i18n';

function formatTDateToTimestamp(date: TDate): number {
  return dayjs()
    .year(date.year)
    .month(date.month)
    .day(date.day)
    .unix() * 1000;
}

export function formatOperationType(type: OperationType): string {
  return OperationType[type];
}

export function formatOperationAssessment(assessment: Assessment): string {
  return Assessment[assessment];
}

export function formatOperationDate(date: TDate): string {
  return dayjs(formatTDateToTimestamp(date))
    .format('D MMM YYYY')
    .replace('.', '');
}

export function formatOperation(operation: Operation): FieldOperation {
  return {
    ...operation,
    timestamp: formatTDateToTimestamp(operation.date),
    localeName: i18n.t(formatOperationType(operation.type)) as string,
  };
}

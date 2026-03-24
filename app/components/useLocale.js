'use client';
import { getLocaleConfig } from '../../lib/locale/config';

export default function useLocale() {
  return { locale: 'id', config: getLocaleConfig('id') };
}

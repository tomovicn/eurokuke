import { sr } from './translations/sr';

type TranslationKey = keyof typeof sr;

export function useTranslation() {
  const t = (key: string, params?: Record<string, string>): string => {
    const keys = key.split('.');
    let value: any = sr;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    if (typeof value === 'string' && params) {
      return value.replace(/\{(\w+)\}/g, (_, param) => params[param] || '');
    }

    return value;
  };

  return { t };
}

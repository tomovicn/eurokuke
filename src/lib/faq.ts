import { sr } from '@/utils/translations/sr';

export type FaqEntry = { question: string; answer: string };

/**
 * The installation FAQ, in display order. Both the visible list and the
 * FAQPage JSON-LD read from here — structured data that does not match the
 * copy on the page is a structured-data violation, so they share one source.
 */
export function getInstallationFaq(): FaqEntry[] {
  return Object.values(sr.installation.faq.questions);
}

export function faqPageSchema(entries: FaqEntry[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entries.map((entry) => ({
      '@type': 'Question',
      name: entry.question,
      acceptedAnswer: { '@type': 'Answer', text: entry.answer },
    })),
  };
}

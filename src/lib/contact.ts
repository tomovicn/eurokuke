/**
 * Every call-to-action on the site resolves through here.
 *
 * Viber's `viber://chat` deep link does not carry a message body reliably
 * across platforms, so only WhatsApp gets prefilled text. Sending a broken
 * link is worse than sending an empty conversation.
 */
export const PHONE_DISPLAY = '+381 63 806 6462';
export const PHONE_DIAL = '+381638066462';

const PREFILL = 'Zdravo, zanima me cena ugradnje euro kuke.';

export const TEL_HREF = `tel:${PHONE_DIAL}`;
export const VIBER_HREF = `viber://chat?number=${encodeURIComponent(PHONE_DIAL)}`;
export const WHATSAPP_HREF = `https://wa.me/${PHONE_DIAL.replace('+', '')}?text=${encodeURIComponent(PREFILL)}`;

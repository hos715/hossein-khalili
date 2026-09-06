import type { AbstractIntlMessages } from "next-intl";

/**
 * Namespaces required by Client Components (header chrome + contact form).
 * Marketing copy stays on the server so it is not serialized into the RSC payload.
 */
const CLIENT_NAMESPACES = [
  "nav",
  "theme",
  "mood",
  "locale",
  "a11y",
  "contact",
] as const;

export function pickClientMessages(
  messages: AbstractIntlMessages,
): AbstractIntlMessages {
  const picked: AbstractIntlMessages = {};
  for (const key of CLIENT_NAMESPACES) {
    const value = messages[key];
    if (value !== undefined) {
      picked[key] = value;
    }
  }
  return picked;
}

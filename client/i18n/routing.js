import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['fa', 'tr', 'ar' , 'en'],
    defaultLocale: 'fa',
    localePrefix: 'as-needed',
    localeDetection: false
});



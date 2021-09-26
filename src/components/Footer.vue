<script setup>
import { useI18n } from 'vue-i18n'
import { defineComponent, h } from 'vue'
// import { useQuery } from '@vue/apollo-composable'
import { MoonIcon, SunIcon } from '@heroicons/vue/outline'
// import { FooterQuery } from '~/graphql/queries/footer'
import { isDark, toggleDark } from '~/logic'

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}

const footerNavigation = {
  products: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' },
  ],
  customerService: [
    { name: 'Contact', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'Secure Payments', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Find a store', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  legal: [
    { name: 'Terms of Service', href: '#' },
    { name: 'Return Policy', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Shipping Policy', href: '#' },
  ],
  bottomLinks: [
    { name: 'Accessibility', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
}

const footer = {
  social: [
    {
      name: 'Facebook',
      href: '#',
      // eslint-disable-next-line vue/one-component-per-file
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              'd':
                'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'Linkedin',
      href: '#',
      // eslint-disable-next-line vue/one-component-per-file
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              d:
                'M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z',
            }),
          ]),
      }),
    },
    {
      name: 'GitHub',
      href: '#',
      // eslint-disable-next-line vue/one-component-per-file
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              'd':
                'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'Behance',
      href: '#',
      // eslint-disable-next-line vue/one-component-per-file
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              'd':
                'M18 8.101h-4v-.875h4v.875zm.84 6.125c-.77 2.258-5.949 2.966-5.949-1.56 0-4.583 5.508-4.377 6.053-.872.045.295.062.693.055 1.249h-4.41c-.104 1.715 1.76 1.932 2.404 1.184h1.847zm-4.211-2.333h2.624c-.115-1.687-2.36-1.81-2.624 0zm-5.858 4.076h-3.771v-8.73h4.056c3.194.047 3.255 3.176 1.587 4.028 2.019.735 2.086 4.702-1.872 4.702zm-1.896-5.134h1.965c1.464 0 1.696-1.859-.182-1.859h-1.783v1.859zm1.854 1.454h-1.854v1.947h1.824c1.782-.001 1.673-1.947.03-1.947zm3.271-10.289c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
  ],
}
</script>

<template>
  <footer aria-labelledby="footer-heading" class="bg-white">
    <h2 id="footer-heading" class="sr-only">
      Footer
    </h2>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="border-t border-gray-200">
        <div class="pt-16 pb-20">
          <div class="md:flex md:justify-center">
            <img src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="" class="h-8 w-auto" />
          </div>
          <div class="mt-16 max-w-5xl mx-auto xl:grid xl:grid-cols-2 xl:gap-8">
            <div class="grid grid-cols-2 gap-8 xl:col-span-2">
              <div class="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 class="text-sm font-medium text-gray-900">
                    Products
                  </h3>
                  <ul role="list" class="mt-6 space-y-6">
                    <li v-for="item in footerNavigation.products" :key="item.name" class="text-sm">
                      <a :href="item.href" class="text-gray-500 hover:text-gray-600">
                        {{ item.name }}
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-sm font-medium text-gray-900">
                    Customer Service
                  </h3>
                  <ul role="list" class="mt-6 space-y-6">
                    <li v-for="item in footerNavigation.customerService" :key="item.name" class="text-sm">
                      <a :href="item.href" class="text-gray-500 hover:text-gray-600">
                        {{ item.name }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 class="text-sm font-medium text-gray-900">
                    Company
                  </h3>
                  <ul role="list" class="mt-6 space-y-6">
                    <li v-for="item in footerNavigation.company" :key="item.name" class="text-sm">
                      <a :href="item.href" class="text-gray-500 hover:text-gray-600">
                        {{ item.name }}
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-sm font-medium text-gray-900">
                    Legal
                  </h3>
                  <ul role="list" class="mt-6 space-y-6">
                    <li v-for="item in footerNavigation.legal" :key="item.name" class="text-sm">
                      <a :href="item.href" class="text-gray-500 hover:text-gray-600">
                        {{ item.name }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:grid lg:grid-cols-2 lg:gap-x-6 xl:gap-x-8">
          <div class="bg-gray-100 rounded-lg p-6 flex items-center sm:p-10">
            <div class="max-w-sm mx-auto">
              <h3 class="font-semibold text-gray-900">
                {{ t('footer-newsletter.headline') }}
              </h3>
              <p class="mt-2 text-sm text-gray-500">
                {{ t('footer-newsletter.content') }}
              </p>
              <form class="mt-4 sm:mt-6 sm:flex">
                <label for="email-address" class="sr-only">Email address</label>
                <input id="email-address" type="text" autocomplete="email" class="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                <div class="mt-3 sm:flex-shrink-0 sm:mt-0 sm:ml-4">
                  <button type="submit" class="w-full bg-blue-600 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-indigo-500">
                    {{ t('footer-newsletter.button') }}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div class="mt-6 relative py-12 px-6 flex items-center sm:py-16 sm:px-10 lg:mt-0">
            <div class="absolute inset-0 rounded-lg overflow-hidden">
              <img src="https://tailwindui.com/img/ecommerce-images/footer-02-exclusive-sale.jpg" alt="" class="w-full h-full filter saturate-0 object-center object-cover" />
              <div class="absolute inset-0 bg-indigo-600 bg-opacity-90" />
            </div>
            <div class="relative max-w-sm mx-auto text-center">
              <h3 class="text-2xl font-extrabold tracking-tight text-white">
                {{ t('footer-banner.headline') }}
              </h3>
              <p class="mt-2 text-gray-200">
                {{ t('footer-banner.content') }} <a href="#" class="font-bold text-white whitespace-nowrap hover:text-gray-200">{{ t('footer-banner.button') }}<span aria-hidden="true"> &rarr;</span></a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="py-10 md:flex md:items-center md:justify-between">
        <div class="text-center md:text-left">
          <p class="text-sm text-gray-500">
            &copy; {{ t('footer.copyright') }}
          </p>
        </div>

        <div class="mt-4 flex items-center justify-center md:mt-0">
          <div class="flex space-x-8">
            <a
              v-for="item in footer.social"
              :key="item.name"
              :href="item.href"
              rel="noreferrer"
              target="_blank"
              class="text-gray-900 hover:text-blue-600"
            >
              <span class="sr-only">{{ item.name }}</span>
              <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
            </a>
          </div>

          <div class="ml-6 border-l border-gray-200 pl-6">
            <a href="#" class="-m-2 p-2 text-gray-900 hover:text-gray-500" @click="toggleDark()">
              <MoonIcon v-if="isDark" class="w-6 h-6" aria-hidden="true" />
              <SunIcon v-else class="w-6 h-6" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

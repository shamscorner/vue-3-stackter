<template>
  <header class="bg-white">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="fixed inset-0 flex z-40 lg:hidden" @close="open = false">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <div class="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
            <div class="px-4 pt-5 pb-2 flex">
              <button type="button" class="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400" @click="open = false">
                <span class="sr-only">Close menu</span>
                <XIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <!-- Links -->
            <TabGroup as="div" class="mt-2">
              <div class="border-b border-gray-200">
                <TabList class="-mb-px flex px-4 space-x-8">
                  <Tab v-for="category in navigation.categories" :key="category.name" v-slot="{ selected }" as="template">
                    <button :class="[selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent', 'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium']">
                      {{ category.name }}
                    </button>
                  </Tab>
                </TabList>
              </div>
              <TabPanels as="template">
                <TabPanel v-for="category in navigation.categories" :key="category.name" class="pt-10 pb-8 px-4 space-y-10">
                  <div class="grid grid-cols-2 gap-x-4">
                    <div v-for="item in category.featured" :key="item.name" class="group relative text-sm">
                      <div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                        <img :src="item.imageSrc" :alt="item.imageAlt" class="object-center object-cover" />
                      </div>
                      <a :href="item.href" class="mt-6 block font-medium text-gray-900">
                        <span class="absolute z-10 inset-0" aria-hidden="true" />
                        {{ item.name }}
                      </a>
                      <p aria-hidden="true" class="mt-1">
                        Shop now
                      </p>
                    </div>
                  </div>
                  <div v-for="section in category.sections" :key="section.name">
                    <p :id="`${category.id}-${section.id}-heading-mobile`" class="font-medium text-gray-900">
                      {{ section.name }}
                    </p>
                    <ul role="list" :aria-labelledby="`${category.id}-${section.id}-heading-mobile`" class="mt-6 flex flex-col space-y-6">
                      <li v-for="item in section.items" :key="item.name" class="flow-root">
                        <a :href="item.href" class="-m-2 p-2 block text-gray-500">
                          {{ item.name }}
                        </a>
                      </li>
                    </ul>
                  </div>
                </TabPanel>
              </TabPanels>
            </TabGroup>

            <div class="border-t border-gray-200 py-6 px-4 space-y-6">
              <div v-for="page in navigation.pages" :key="page.name" class="flow-root">
                <a :href="page.href" class="-m-2 p-2 block font-medium text-gray-900">{{ page.name }}</a>
              </div>
            </div>

            <div class="border-t border-gray-200 py-6 px-4 space-y-6">
              <div class="flow-root">
                <a href="#" class="-m-2 p-2 block font-medium text-gray-900">Create an account</a>
              </div>
              <div class="flow-root">
                <a href="#" class="-m-2 p-2 block font-medium text-gray-900">Sign in</a>
              </div>
            </div>

            <div class="border-t border-gray-200 py-6 px-4 space-y-6">
              <!-- Currency selector -->
              <form>
                <div class="inline-block">
                  <label for="mobile-currency" class="sr-only">Currency</label>
                  <div class="-ml-2 group relative border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                    <select id="mobile-currency" name="currency" class="bg-none border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-gray-700 group-hover:text-gray-800 focus:outline-none focus:ring-0 focus:border-transparent">
                      <option v-for="currency in currencies" :key="currency">
                        {{ currency }}
                      </option>
                    </select>
                    <div class="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class="w-5 h-5 text-gray-500">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4" />
                      </svg>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>

    <header class="relative">
      <nav aria-label="Top">
        <!-- Top navigation -->
        <div class="bg-gray-900">
          <div class="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between sm:px-6 lg:px-8">
            <!-- Currency selector -->
            <form class="hidden lg:block lg:flex-1">
              <div class="flex">
                <label for="desktop-currency" class="sr-only">Currency</label>
                <div class="-ml-2 group relative bg-gray-900 border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                  <select id="desktop-currency" name="currency" class="bg-none bg-gray-900 border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-white group-hover:text-gray-100 focus:outline-none focus:ring-0 focus:border-transparent">
                    <option v-for="currency in currencies" :key="currency">
                      {{ currency }}
                    </option>
                  </select>
                  <div class="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" class="w-5 h-5 text-gray-300">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8l4 4 4-4" />
                    </svg>
                  </div>
                </div>
              </div>
            </form>

            <p class="flex-1 text-center text-sm font-medium text-white lg:flex-none">
              {{ t('nav.top-info') }}
            </p>

            <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              <a href="#" class="text-sm font-medium text-white hover:text-gray-100">{{ t('nav.top-create') }}</a>
              <span class="h-6 w-px bg-gray-600" aria-hidden="true" />
              <a href="#" class="text-sm font-medium text-white hover:text-gray-100">{{ t('nav.top-sign') }}</a>
            </div>
          </div>
        </div>

        <!-- Secondary navigation -->
        <div class="bg-white dark:bg-gray-800">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="border-b border-gray-200 dark:border-gray-800">
              <div class="h-16 flex items-center justify-between">
                <!-- Logo (lg+) -->
                <div class="hidden lg:flex lg:flex-1 lg:items-center">
                  <router-link to="/">
                    <span class="sr-only">Home</span>
                    <img class="h-8 w-auto" to="/" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="logo" />
                  </router-link>
                </div>

                <div class="hidden h-full lg:flex">
                  <!-- Flyout menus -->
                  <PopoverGroup class="hidden lg:ml-8 lg:block lg:self-stretch">
                    <div class="h-full flex space-x-8">
                      <Popover v-for="category in navigation.categories" :key="category.name" v-slot="{ open }" class="flex">
                        <div class="relative flex">
                          <PopoverButton :class="[open ? 'border-blue-600 text-blue-600 focus:outline-none' : 'border-transparent text-gray-700 dark:text-white hover:text-gray-800', 'focus:outline-none relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px']">
                            {{ category.name }}
                            <ChevronDownIcon :class="[open ? 'text-blue-600' : 'text-gray-900 dark:text-teal-600', 'ml-2 h-5 w-5 group-hover:text-gray-500']" aria-hidden="true" />
                          </PopoverButton>
                        </div>

                        <transition
                          enter-active-class="transition ease-out duration-200"
                          enter-from-class="opacity-0"
                          enter-to-class="opacity-100"
                          leave-active-class="transition ease-in duration-150"
                          leave-from-class="opacity-100"
                          leave-to-class="opacity-0"
                        >
                          <PopoverPanel class="absolute z-10 top-full inset-x-0 text-sm text-gray-500">
                            <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                            <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                            <div class="relative bg-white">
                              <div class="max-w-7xl mx-auto px-8">
                                <div class="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                  <div class="col-start-2 grid grid-cols-2 gap-x-8">
                                    <div v-for="item in category.featured" :key="item.name" class="group relative text-base sm:text-sm">
                                      <div class="aspect-w-1 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden group-hover:opacity-75">
                                        <img :src="item.imageSrc" :alt="item.imageAlt" class="object-center object-cover" />
                                      </div>
                                      <a :href="item.href" class="mt-6 block font-medium text-gray-900">
                                        <span class="absolute z-10 inset-0" aria-hidden="true" />
                                        {{ item.name }}
                                      </a>
                                      <p aria-hidden="true" class="mt-1">
                                        Shop now
                                      </p>
                                    </div>
                                  </div>
                                  <div class="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                    <div v-for="section in category.sections" :key="section.name">
                                      <p :id="`${section.name}-heading`" class="font-medium text-gray-900">
                                        {{ section.name }}
                                      </p>
                                      <ul role="list" :aria-labelledby="`${section.name}-heading`" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                        <li v-for="item in section.items" :key="item.name" class="flex">
                                          <a :href="item.href" class="hover:text-gray-800">
                                            {{ item.name }}
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="relative bg-gray-50">
                              <div class="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                                <div v-for="item in callsToAction" :key="item.name" class="flow-root">
                                  <a :href="item.href" class="-m-3 p-3 flex items-center rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100">
                                    <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-blue-600" aria-hidden="true" />
                                    <span class="ml-3">{{ item.name }}</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </PopoverPanel>
                        </transition>
                      </Popover>

                      <!--<router-link to="/prices" class="flex items-center text-sm font-medium text-gray-900 dark:text-white hover:text-gray-800">
                        {{ t('nav.item1') }}
                      </router-link>-->
                      <router-link to="/projects" class="flex items-center text-sm font-medium text-gray-900 dark:text-white hover:text-gray-800">
                        {{ t('nav.item2') }}
                      </router-link>
                      <router-link to="/studio" class="flex items-center text-sm font-medium text-gray-900 dark:text-white hover:text-gray-800">
                        {{ t('nav.item3') }}
                      </router-link>
                    </div>
                  </PopoverGroup>
                </div>

                <!-- Mobile menu and search (lg-) -->
                <div class="flex-1 flex items-center lg:hidden">
                  <button type="button" class="-ml-2 bg-white dark:bg-gray-800 p-2 rounded-md text-gray-900 dark:text-white" @click="open = true">
                    <span class="sr-only">Open menu</span>
                    <MenuIcon class="h-6 w-6" aria-hidden="true" />
                  </button>

                  <!-- Search -->
                  <a href="#" class="ml-2 p-2 text-gray-900 dark:text-white hover:text-gray-500">
                    <span class="sr-only">Search</span>
                    <SearchIcon class="w-6 h-6" aria-hidden="true" />
                  </a>
                </div>

                <!-- Logo (lg-) -->
                <router-link to="/" class="lg:hidden">
                  <span class="sr-only">Home</span>
                  <img class="h-8 w-auto" to="/" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600" alt="logo" />
                </router-link>

                <div class="flex-1 flex items-center justify-end">
                  <div class="flex items-center lg:ml-8">
                    <div class="flex space-x-8">
                      <div class="flex">
                        <a href="#" class="-m-2 p-2 text-gray-900 dark:text-white hover:text-gray-500" @click="toggleDark()">
                          <MoonIcon v-if="isDark" class="w-6 h-6" aria-hidden="true" />
                          <SunIcon v-else class="w-6 h-6" aria-hidden="true" />
                        </a>
                      </div>
                    </div>

                    <span class="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true" />

                    <div class="flow-root">
                      <a href="#" class="group -m-2 p-2 flex items-center" @click="toggleLocales">
                        <TranslateIcon class="flex-shrink-0 h-6 w-6 text-gray-900 dark:text-white group-hover:text-gray-500" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import {
  Dialog,
  DialogOverlay,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  MenuIcon, TranslateIcon, SunIcon, MoonIcon, SearchIcon, ShoppingCartIcon, UserIcon, XIcon, PhoneIcon,
  PlayIcon, CheckCircleIcon,
} from '@heroicons/vue/outline'
import { ChevronDownIcon } from '@heroicons/vue/solid'
import { isDark, toggleDark } from '~/logic'

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
const open = ref(false)

const currencies = ['En', 'Sk']
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'View All Products', href: '#', icon: CheckCircleIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const navigation = {
  categories: [
    {
      id: 'programovanie',
      name: 'Programovanie',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://cdn.rmlabs.sk/media/6731ff9a06e5d90d6ca07e6e3c324ca0.webp',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://cdn.rmlabs.sk/media/f0246339056afada231843b3a92e2a88.webp',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Dresses', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Denim', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Significant Other', href: '#' },
          ],
        },
      ],
    },
    {
      id: 'infrastruktura',
      name: 'Infraštruktúra',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://cdn.rmlabs.sk/media/f0246339056afada231843b3a92e2a88.webp',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://cdn.rmlabs.sk/media/6731ff9a06e5d90d6ca07e6e3c324ca0.webp',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', href: '#' },
            { name: 'Pants', href: '#' },
            { name: 'Sweaters', href: '#' },
            { name: 'T-Shirts', href: '#' },
            { name: 'Jackets', href: '#' },
            { name: 'Activewear', href: '#' },
            { name: 'Browse All', href: '#' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
            { name: 'Wallets', href: '#' },
            { name: 'Bags', href: '#' },
            { name: 'Sunglasses', href: '#' },
            { name: 'Hats', href: '#' },
            { name: 'Belts', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', href: '#' },
            { name: 'Counterfeit', href: '#' },
            { name: 'Full Nelson', href: '#' },
            { name: 'My Way', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}

</script>

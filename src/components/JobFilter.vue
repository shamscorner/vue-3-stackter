<template>
    <!-- Filters -->
    <section aria-labelledby="filter-heading">
        <h2 id="filter-heading" class="sr-only">Filters</h2>

        <div class="relative z-10 bg-white border-b border-gray-200 pb-4">
        <div class="max-w-7xl mx-auto px-4 flex items-center justify-between sm:px-6 lg:px-8">
            <Menu as="div" class="relative inline-block text-left">
            <div>
                <MenuButton class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                Sort
                <ChevronDownIcon class="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                </MenuButton>
            </div>

            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="origin-top-left absolute left-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div class="py-1">
                    <MenuItem v-for="option in sortOptions" :key="option.name" v-slot="{ active }">
                    <a :href="option.href" :class="[option.current ? 'font-medium text-gray-900' : 'text-gray-500', active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm']">
                        {{ option.name }}
                    </a>
                    </MenuItem>
                </div>
                </MenuItems>
            </transition>
            </Menu>

            <button type="button" class="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden" @click="mobileFiltersOpen = true">
            Filters
            </button>

            <div class="hidden sm:block">
            <div class="flow-root">
                <PopoverGroup class="-mx-4 flex items-center divide-x divide-gray-200">
                <Popover v-for="(section, sectionIdx) in filters" :key="section.name" class="px-4 relative inline-block text-left">
                    <PopoverButton class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    <span>{{ section.name }}</span>
                    <span v-if="(sectionIdx === 0)" class="ml-1.5 rounded py-0.5 px-1.5 bg-gray-200 text-xs font-semibold text-gray-700 tabular-nums">1</span>
                    <ChevronDownIcon class="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                    </PopoverButton>

                    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                    <PopoverPanel class="origin-top-right absolute right-0 mt-2 bg-white rounded-md shadow-2xl p-4 ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <form class="space-y-4">
                        <div v-for="(option, optionIdx) in section.options" :key="option.value" class="flex items-center">
                            <input :id="`filter-${section.id}-${optionIdx}`" :name="`${section.id}[]`" :value="option.value" type="checkbox" :checked="option.checked" class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label :for="`filter-${section.id}-${optionIdx}`" class="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                            {{ option.label }}
                            </label>
                        </div>
                        </form>
                    </PopoverPanel>
                    </transition>
                </Popover>
                </PopoverGroup>
            </div>
            </div>
        </div>
        </div>

        <!-- Active filters -->
        <div class="bg-gray-100">
            <div class="max-w-7xl mx-auto py-3 px-4 sm:flex sm:items-center sm:px-6 lg:px-8">
                <h3 class="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Filters
                <span class="sr-only">, active</span>
                </h3>

                <div aria-hidden="true" class="hidden w-px h-5 bg-gray-300 sm:block sm:ml-4" />

                <div class="mt-2 sm:mt-0 sm:ml-4">
                    <div class="-m-1 flex flex-wrap items-center">
                        <span v-for="option in filters" :key="option" class="m-1 inline-flex rounded-full border border-gray-200 items-center py-1.5 pl-3 pr-2 text-sm font-medium bg-white text-gray-900">
                        <span>{{ option }}</span>
                        <button type="button" class="flex-shrink-0 ml-1 h-4 w-4 p-1 rounded-full inline-flex text-gray-400 hover:bg-gray-200 hover:text-gray-500" @click="removeFilter(option)">
                            <span class="sr-only">Remove filter for {{ option }}</span>
                            <svg class="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
                            <path stroke-linecap="round" stroke-width="1.5" d="M1 1l6 6m0-6L1 7" />
                            </svg>
                        </button>
                        </span>
                    </div>
                </div>
                <button class="" @click="clearFilters">Clear</button>
            </div>
        </div>
    </section>
</template>

<script>
import { watch, computed } from 'vue';
import { useStore } from 'vuex';

import {
  Dialog,
  DialogOverlay,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
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
import { MenuIcon, SearchIcon, ShoppingCartIcon, UserIcon, XIcon } from '@heroicons/vue/outline'
import { ChevronDownIcon } from '@heroicons/vue/solid'

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const filters = [
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'All New Arrivals', checked: false },
      { value: 'tees', label: 'Tees', checked: false },
      { value: 'objects', label: 'Objects', checked: true },
      { value: 'sweatshirts', label: 'Sweatshirts', checked: false },
      { value: 'pants-shorts', label: 'Pants & Shorts', checked: false },
    ],
  },
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: false },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'sizes',
    name: 'Sizes',
    options: [
      { value: 'xs', label: 'XS', checked: false },
      { value: 's', label: 'S', checked: false },
      { value: 'm', label: 'M', checked: false },
      { value: 'l', label: 'L', checked: false },
      { value: 'xl', label: 'XL', checked: false },
      { value: '2xl', label: '2XL', checked: false },
    ],
  },
]
const activeFilters = [{ value: 'objects', label: 'Objects' }]

export default {
    components: {
        Dialog,
        DialogOverlay,
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
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
        ChevronDownIcon,
        MenuIcon,
        SearchIcon,
        ShoppingCartIcon,
        UserIcon,
        XIcon,
    },
    setup() {
        const store = useStore();
        const filters = computed(() => store.state.filters);

        function removeFilter(val) {
            store.commit('toggleFilter', val);
        }

        function clearFilters() {
            store.commit('clearFilter');
        }

        watch(filters, () => {
            store.commit('filtersJobs');
        },{ deep: true })

        return {
            filters,
            removeFilter,
            clearFilters,
            activeFilters,
            sortOptions,
        }
    }
}
</script>
'use client';

import { Popover } from '@headlessui/react';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import {
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

const solutions = [
  {
    name: 'Analytics',
    description: 'Gain valuable insights into your traffic and user behavior.',
    href: '#',
    icon: ChartPieIcon,
  },
  {
    name: 'Engagement',
    description: 'Engage directly with your users through intuitive channels.',
    href: '#',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Security',
    description: "Ensure your users' data stays private and protected.",
    href: '#',
    icon: FingerPrintIcon,
  },
  {
    name: 'Integrations',
    description: 'Seamlessly connect with your existing tools and services.',
    href: '#',
    icon: SquaresPlusIcon,
  },
  {
    name: 'Automations',
    description: 'Streamline your workflow with intelligent automations.',
    href: '#',
    icon: ArrowPathIcon,
  },
];

const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
];

export default function DropdownMenu() {
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex items-center gap-1 text-sm font-medium font-bold hover:text-orange-300 transition">
        <span>Solutions</span>
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </Popover.Button>

      <Popover.Panel className="absolute   z-30 mt-6 left-3/4  w-screen max-w-lg -translate-x-1/2 transform px-4">
        <div className="overflow-hidden px-4 rounded-2xl border border-gray-200 bg-white shadow-xl ring-1 ring-gray-200 dark:bg-gray-900 dark:border-gray-700 dark:ring-gray-700 w-[600px]">
          <div className=" p-8">
            {solutions.map((item) => (
              <div
                key={item.name}
                className="group flex gap-8  rounded-lg p-4 transition hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-md bg-gray-100 group-hover:bg-violet-100 dark:bg-gray-700 dark:group-hover:bg-violet-700">
                  <item.icon className="h-6 w-6 text-gray-600 group-hover:text-violet-600 dark:text-gray-300 dark:group-hover:text-white" />
                </div>
                <div className="flex flex-col m-2/3">
                  <a href={item.href} className="font-semibold text-gray-900 dark:text-white">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                      </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 divide-x border-t border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
            {callsToAction.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                <item.icon className="h-5 w-5 text-gray-400 dark:text-gray-300" />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </Popover.Panel>
    </Popover>
  );
}

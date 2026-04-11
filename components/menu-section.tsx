'use client';

import { useState } from 'react';
import { menuData, tabMap } from '@/lib/menu-data';
import { cn } from '@/lib/utils';

export function MenuSection() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredCategories = activeTab === 'All' || !tabMap[activeTab]
    ? menuData
    : menuData.filter((category) => tabMap[activeTab]?.includes(category.cat));

  return (
    <section className="py-16 md:py-[72px] px-[6%] max-w-[1140px] mx-auto" id="menu">
      <div className="text-[11px] font-medium text-primary tracking-[1.5px] uppercase mb-2">
        Our Offerings
      </div>
      <div className="font-serif text-[34px] text-foreground mb-1.5">
        A Menu Steeped in Tradition
      </div>
      <div className="text-[15px] text-muted-foreground mb-9">
        Explore our wide range of South Indian breakfast, snacks, beverages and more
      </div>

      {/* Tabs */}
      <div className="flex gap-2 flex-wrap mb-8">
        {Object.keys(tabMap).map((label) => (
          <button
            key={label}
            onClick={() => setActiveTab(label)}
            className={cn(
              'px-4.5 py-2 rounded-full text-[13px] font-sans transition-all cursor-pointer',
              activeTab === label
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground'
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {filteredCategories.map((category) => (
          <div key={category.cat} className="contents">
            {/* Category Header */}
            <div className="col-span-full bg-accent py-2.5 px-4 rounded-[10px] text-xs font-medium text-accent-foreground tracking-wider uppercase mt-1.5 first:mt-0">
              {category.cat}
            </div>

            {/* Menu Items */}
            {category.items.map((item) => (
              <div
                key={item.name}
                className="bg-card border border-border rounded-[14px] py-4 px-4.5 flex justify-between items-center transition-shadow hover:shadow-md"
              >
                <div>
                  <div className="text-sm font-medium text-foreground mb-0.5">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-muted-foreground/60">
                    Fresh daily · Pure veg
                  </div>
                </div>
                <div className="font-serif text-[17px] font-semibold text-primary whitespace-nowrap ml-3">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

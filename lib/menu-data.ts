export interface MenuItem {
  name: string;
  price: string;
}

export interface MenuCategory {
  cat: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    cat: 'Idly & Vada',
    items: [
      { name: 'Idly (2 pcs)', price: '₹40' },
      { name: 'Idly (1 pc)', price: '₹20' },
      { name: 'Rava Idly (2 pcs)', price: '₹55' },
      { name: 'Idly 2 Vada 1', price: '₹80' },
      { name: 'Single Idly Vada', price: '₹60' },
      { name: 'Uddina Vada 1', price: '₹40' },
    ],
  },
  {
    cat: 'Dosa',
    items: [
      { name: 'Ghee Masala Dosa', price: '₹70' },
      { name: 'Plain Dosa', price: '₹50' },
      { name: 'Uddin Dosa (2 pcs)', price: '₹60' },
      { name: 'Rava Dosa', price: '₹80' },
      { name: 'Onion Dosa', price: '₹80' },
      { name: 'Raagi Dosa', price: '₹80' },
      { name: 'Open Butter Masala', price: '₹90' },
      { name: "Day's Special Dosa", price: '₹90' },
    ],
  },
  {
    cat: 'Uppittu',
    items: [
      { name: 'Masala Uppittu', price: '₹40' },
      { name: 'Jave Godi Uppittu', price: '₹45' },
      { name: "Day's Special Uppittu", price: '₹50' },
      { name: 'Kesari Bath', price: '₹40' },
      { name: 'Chow Chow Bath', price: '₹80' },
    ],
  },
  {
    cat: 'Meals',
    items: [
      { name: 'Poori Meals', price: '₹99' },
      { name: 'Akki Rotti Meals', price: '₹99' },
      { name: 'Ragi Rotti Meals', price: '₹99' },
    ],
  },
  {
    cat: 'Rotti & Rice',
    items: [
      { name: 'Akki Rotti (2 pc)', price: '₹50' },
      { name: 'Akki Rotti (1 pc)', price: '₹25' },
      { name: 'Ragi Rotti (2 pc)', price: '₹50' },
      { name: 'Ragi Rotti (1 pc)', price: '₹25' },
      { name: 'Bisibele Bath', price: '₹60' },
      { name: 'Pongal', price: '₹60' },
      { name: "Day's Special Rice", price: '₹60' },
    ],
  },
  {
    cat: 'Sweets',
    items: [
      { name: 'Mangalore Buns', price: '₹40' },
      { name: 'Halbayi', price: '₹40' },
      { name: 'Carrot Halwa', price: '₹40' },
      { name: 'Bread Halwa', price: '₹40' },
    ],
  },
  {
    cat: 'Snacks',
    items: [
      { name: 'Goli Bajji', price: '₹50' },
      { name: 'Bonda Soup', price: '₹50' },
      { name: 'Onion Bajji', price: '₹50' },
      { name: 'Onion Pakoda', price: '₹50' },
      { name: 'Chilli Bajji', price: '₹50' },
      { name: 'Capsicum Bajji', price: '₹60' },
    ],
  },
  {
    cat: 'Beverages',
    items: [
      { name: 'Filter Coffee', price: '₹25' },
      { name: 'Tea', price: '₹20' },
      { name: 'Badam Milk', price: '₹25' },
      { name: 'Ginger Coffee', price: '₹25' },
      { name: 'Lemon Tea', price: '₹60' },
      { name: 'Black Coffee', price: '₹25' },
      { name: 'Ginger Tea', price: '₹25' },
    ],
  },
  {
    cat: 'Ice Cream',
    items: [
      { name: 'Vanilla', price: '₹55' },
      { name: 'Butter Scotch', price: '₹60' },
      { name: 'Pista', price: '₹75' },
      { name: 'Kesar Pista', price: '₹70' },
      { name: 'Black Currant', price: '₹70' },
      { name: 'Strawberry', price: '₹70' },
      { name: 'Chocolate', price: '₹70' },
      { name: 'Mango', price: '₹70' },
      { name: 'Frooti', price: '₹75' },
      { name: 'Chocolate Banana Split', price: '₹80' },
    ],
  },
  {
    cat: 'Juice',
    items: [
      { name: 'Moosambi', price: '₹55' },
      { name: 'Apple', price: '₹60' },
      { name: 'Pineapple', price: '₹50' },
      { name: 'Orange', price: '₹50' },
      { name: 'Water Melon', price: '₹45' },
      { name: 'Grape', price: '₹55' },
      { name: 'Fresh Lemon', price: '₹40' },
      { name: 'Fresh Lime Mint Soda', price: '₹45' },
      { name: 'Sweet & Salt Lime Soda', price: '₹45' },
      { name: 'Butter Milk', price: '₹40' },
    ],
  },
  {
    cat: 'Chats',
    items: [
      { name: 'Malasa Puri', price: '₹60' },
      { name: 'Bhel Puri', price: '₹55' },
      { name: 'Pani Puri', price: '₹45' },
      { name: 'Sev Puri', price: '₹55' },
      { name: 'Aloo Puri', price: '₹50' },
      { name: 'Dahi Puri', price: '₹45' },
      { name: 'Papdi Chat', price: '₹55' },
      { name: 'Samosa', price: '₹50' },
      { name: 'Samosa Masala', price: '₹55' },
    ],
  },
];

export const tabMap: Record<string, string[] | null> = {
  'All': null,
  'Idly & Vada': ['Idly & Vada'],
  'Dosa': ['Dosa'],
  'Uppittu': ['Uppittu'],
  'Meals': ['Meals', 'Rotti & Rice'],
  'Snacks': ['Snacks', 'Sweets'],
  'Beverages': ['Beverages'],
  'Chats': ['Chats'],
  'Ice Cream & Juice': ['Ice Cream', 'Juice'],
};

interface Item {
    name: string;
    selected: boolean;
  }
  
  export interface Category {
    category: string;
    items: Item[];
  }
  
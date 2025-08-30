export interface Category {
  name: string;
  slug: string;
  products: Product[];
}

export interface Product {
  name: string;
  description?: string;
  slug: string;
  prices: {
    small: number;
    medium?: number;
    large?: number;
  };
  image: string;
  flavors?: string[];
  sugarFreeAvailable?: boolean;
  extraShotAvailable?: boolean;
}

export const categories = [
  {
    slug: "classics",
    name: "Classics",
    products: [
      {
        slug: "coffee",
        name: "Coffee",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos aspernatur a itaque perferendis nihil, accusamus excepturi maiores ipsam corporis corrupti, quo magnam at ex similique saepe provident magni voluptatibus enim!",
        calories: 100,
        flavors: ["Vanilla", "Chocolate", "Strawberry"],
        sugarFreeAvailable: true,
        extraShotAvailable: true,
        prices: {
          small: 3.0,
          medium: 3.5,
          large: 4.0,
        },
        image:
          "https://images.pexels.com/photos/4264049/pexels-photo-4264049.jpeg",
      },
      {
        slug: "americano",
        name: "Americano",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos aspernatur a itaque perferendis nihil, accusamus excepturi maiores ipsam corporis corrupti, quo magnam at ex similique saepe provident magni voluptatibus enim!",
        prices: {
          small: 3.75,
          medium: 4.25,
          large: 4.75,
        },
        image:
          "https://images.pexels.com/photos/3704460/pexels-photo-3704460.jpeg",
      },
      {
        slug: "latte",
        name: "Latte",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos aspernatur a itaque perferendis nihil, accusamus excepturi maiores ipsam corporis corrupti, quo magnam at ex similique saepe provident magni voluptatibus enim!",
        prices: {
          small: 4.5,
          medium: 5.0,
          large: 5.25,
        },
        image:
          "https://images.pexels.com/photos/302904/pexels-photo-302904.jpeg",
      },
      {
        slug: "macchiato",
        name: "Macchiato",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos aspernatur a itaque perferendis nihil, accusamus excepturi maiores ipsam corporis corrupti, quo magnam at ex similique saepe provident magni voluptatibus enim!",
        prices: {
          small: 5.0,
          medium: 5.5,
          large: 6.0,
        },
        image:
          "https://images.pexels.com/photos/18424335/pexels-photo-18424335.jpeg",
      },
    ],
  },
  {
    slug: "specialties",
    name: "Specialties",
    products: [
      {
        slug: "cafe-con-leche",
        name: "Cafe con Leche",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos aspernatur a itaque perferendis nihil, accusamus excepturi maiores ipsam corporis corrupti, quo magnam at ex similique saepe provident magni voluptatibus enim!",
        prices: {
          small: 4.5,
          medium: 5.25,
          large: 6.0,
        },
        image:
          "https://images.pexels.com/photos/15268786/pexels-photo-15268786.jpeg",
      },
      {
        slug: "cortado",
        name: "Cortado",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos aspernatur a itaque perferendis nihil, accusamus excepturi maiores ipsam corporis corrupti, quo magnam at ex similique saepe provident magni voluptatibus enim!",
        prices: {
          small: 4.25,
          medium: 5.0,
          large: 5.75,
        },
        image:
          "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg",
      },
      {
        slug: "espresso-shot",
        name: "Espresso Shot",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos aspernatur a itaque perferendis nihil, accusamus excepturi maiores ipsam corporis corrupti, quo magnam at ex similique saepe provident magni voluptatibus enim!",
        prices: {
          small: 1.5,
        },
        image:
          "https://images.unsplash.com/photo-1705952285570-113e76f63fb0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
      },
      {
        slug: "cappuccino",
        name: "Cappuccino",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos aspernatur a itaque perferendis nihil, accusamus excepturi maiores ipsam corporis corrupti, quo magnam at ex similique saepe provident magni voluptatibus enim!",
        prices: {
          small: 4.25,
        },
        image:
          "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=635&auto=format&fit=crop&ixlib=rb-4.1.0",
      },
      {
        slug: "colada",
        name: "Colada (cuban coffee)",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos aspernatur a itaque perferendis nihil, accusamus excepturi maiores ipsam corporis corrupti, quo magnam at ex similique saepe provident magni voluptatibus enim!",
        prices: {
          small: 3.0,
        },
        image:
          "https://images.unsplash.com/photo-1614227373539-d763a95a31a3?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0",
      },
    ],
  },
  {
    slug: "non-coffee",
    name: "Non-Coffee",
    products: [
      {
        slug: "hot-tea",
        name: "Hot Tea",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos aspernatur a itaque perferendis nihil, accusamus excepturi maiores ipsam corporis corrupti, quo magnam at ex similique saepe provident magni voluptatibus enim!",
        prices: {
          small: 3.5,
        },
        image:
          "https://images.pexels.com/photos/1629185/pexels-photo-1629185.jpeg",
      },
      {
        slug: "hot-chocolate",
        name: "Hot Chocolate",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos aspernatur a itaque perferendis nihil, accusamus excepturi maiores ipsam corporis corrupti, quo magnam at ex similique saepe provident magni voluptatibus enim!",
        prices: {
          small: 4.5,
        },
        image:
          "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
      },
      {
        slug: "smoothie",
        name: "Smoothie",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos aspernatur a itaque perferendis nihil, accusamus excepturi maiores ipsam corporis corrupti, quo magnam at ex similique saepe provident magni voluptatibus enim!",
        prices: {
          small: 6.0,
        },
        image:
          "https://images.pexels.com/photos/990439/pexels-photo-990439.jpeg",
      },
      {
        slug: "frappe",
        name: "Frappe",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos aspernatur a itaque perferendis nihil, accusamus excepturi maiores ipsam corporis corrupti, quo magnam at ex similique saepe provident magni voluptatibus enim!",
        prices: {
          small: 6.0,
        },
        image:
          "https://images.pexels.com/photos/214333/pexels-photo-214333.jpeg",
      },
    ],
  },
  {
    slug: "baked-goods",
    name: "Baked Goods",
    products: [
      {
        slug: "cinammon-roll",
        name: "Cinammon Roll",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos aspernatur a itaque perferendis nihil, accusamus excepturi maiores ipsam corporis corrupti, quo magnam at ex similique saepe provident magni voluptatibus enim!",
        prices: {
          small: 4.0,
        },
        image:
          "https://images.unsplash.com/photo-1593872571314-4a735d4b27b0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
      },
      {
        slug: "muffin",
        name: "Muffin",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos aspernatur a itaque perferendis nihil, accusamus excepturi maiores ipsam corporis corrupti, quo magnam at ex similique saepe provident magni voluptatibus enim!",
        prices: {
          small: 4.0,
        },
        image:
          "https://images.pexels.com/photos/1657343/pexels-photo-1657343.jpeg",
      },
      {
        slug: "bagel",
        name: "Bagel",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos aspernatur a itaque perferendis nihil, accusamus excepturi maiores ipsam corporis corrupti, quo magnam at ex similique saepe provident magni voluptatibus enim!",
        prices: {
          small: 3.0,
        },
        image:
          "https://images.unsplash.com/photo-1585841393012-e4ded4a6e2d0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
      },
      {
        slug: "pastelito",
        name: "Pastelito",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos aspernatur a itaque perferendis nihil, accusamus excepturi maiores ipsam corporis corrupti, quo magnam at ex similique saepe provident magni voluptatibus enim!",
        prices: {
          small: 3.0,
        },
        image:
          "https://images.unsplash.com/photo-1622941367239-8acd68fa946d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
      },
      {
        slug: "empanada",
        name: "Empanada",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos aspernatur a itaque perferendis nihil, accusamus excepturi maiores ipsam corporis corrupti, quo magnam at ex similique saepe provident magni voluptatibus enim!",
        prices: {
          small: 4.0,
        },
        image:
          "https://images.unsplash.com/photo-1608039783021-6116a558f0c5?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0",
      },
      {
        slug: "croqueta",
        name: "Croqueta",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos aspernatur a itaque perferendis nihil, accusamus excepturi maiores ipsam corporis corrupti, quo magnam at ex similique saepe provident magni voluptatibus enim!",
        prices: {
          small: 2.0,
        },
        image:
          "https://images.unsplash.com/photo-1683694062041-cc62c5390b13?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0",
      },
    ],
  },
] as Category[];

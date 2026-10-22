const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1300,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/071/778/445/small/wireless-headphones-on-orange-background-overhead-view-photo.jpg?w=500&h=500&fit=crop",
    description:
      "Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 1400,
    image:
      "https://pisces.bbystatic.com/image2/BestBuy_US/dam/2667303_flex_all2-641b23ff-0391-4b05-9054-a8bb3eb696d4.jpg?w=500&h=500&fit=crop",
    description:
      "Feature-rich smartwatch with fitness tracking, heart rate monitor, and smartphone notifications. Water-resistant design.",
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 1500,
    image:
      "https://rukminim3.flixcart.com/image/546/564/xif0q/laptop-stand/h/p/m/450-7-angle-aluminum-adjustable-foldable-with-universal-original-imahs6geaq2f7rnw.jpeg?w=500&h=500&fit=crop",
    description:
      "Ergonomic aluminum laptop stand that improves posture and workspace organization. Adjustable height and angle.",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 1450,
    image:
      "https://img.magnific.com/premium-photo/mechanical-keyboard-computer-white-background-key-cap-grey-black-yellow-colours_379201-8454.jpg?w=500&h=500&fit=crop",
    description:
      "RGB backlit mechanical keyboard with Cherry MX switches. Perfect for gaming and typing enthusiasts.",
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: 800,
    image:
      "https://rukminim2.flixcart.com/image/xif0q/usb-gadget/i/n/k/w-clh21-we-original-imahnjd85wd7uzxq.jpeg?w=500&h=500&fit=crop",
    description:
      "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader. Expand your laptop connectivity.",
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 750,
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/072/428/917/small/a-sleek-black-wireless-computer-mouse-on-a-glossy-surface-showcasing-modern-design-and-advanced-functionality-photo.jpeg?w=500&h=500&fit=crop",
    description:
      "Ergonomic wireless mouse with precision tracking and long battery life. Comfortable for extended use.",
  },
  {
    id: 7,
    name: "Monitor Stand",
    price: 900,
    image:
      "https://m.media-amazon.com/images/I/51A6HDha3yL.jpg?w=500&h=500&fit=crop",
    description:
      "Dual monitor stand with adjustable height and tilt. Frees up desk space and improves ergonomics.",
  },
  {
    id: 8,
    name: "Webcam HD",
    price: 1600,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71pe95F664L.jpg?w=500&h=500&fit=crop",
    description:
      "1080p HD webcam with auto-focus and built-in microphone. Ideal for video calls and streaming.",
  },
];

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}
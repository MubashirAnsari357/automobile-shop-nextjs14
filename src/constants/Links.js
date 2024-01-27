import { AboutIcon, CategoryIcon, ContactIcon, DashboardIcon, ProductIcon } from "@/components/icons";

export const UserLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Products",
    path: "/products",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export const AdminLinks = [
  {
    title: "Dashboard",
    path: "/admin/dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "Categories",
    path: "/admin/categories",
    icon: <CategoryIcon />,
  },
  {
    title: "SubCategories",
    path: "/admin/subcategories",
    icon: <CategoryIcon />,
  },
  {
    title: "Products",
    path: "/admin/products",
    icon: <ProductIcon />,
  },
  {
    title: "About",
    path: "/admin/about",
    icon: <AboutIcon />,
  },
  {
    title: "Contact",
    path: "/admin/contact",
    icon: <ContactIcon />,
  },
];

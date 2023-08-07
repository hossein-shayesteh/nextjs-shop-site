interface ModalFormValues {
  name: string;
  price: number;
  description: string;
  category: string;
}
interface ModalFormProps {
  router: AppRouterInstance;
}
interface ProductList {
  body: string;
  category: string;
  created_at: number;
  id: number;
  price: number;
  title: string;
  user_id: number;
}

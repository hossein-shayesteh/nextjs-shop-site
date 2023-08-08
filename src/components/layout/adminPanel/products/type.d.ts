interface CreateProductModalFormValues {
  name: string;
  price: number;
  description: string;
  category: string;
}
interface EditProductModalFormValues {
  name: string;
  price: number;
  description: string;
  category: string;
}
interface EditProductModalFormProps extends EditProductModalFormValues {
  router: AppRouterInstance;
  mutateProducts: KeyedMutator<AxiosResponse<any, any>>;
  id: number;
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

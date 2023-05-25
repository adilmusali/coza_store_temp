import * as yup from 'yup';

export const schema = yup
  .object()
  .shape({
    image: yup.string().required("* Fill Image!"),
    name: yup.string().required("* Fill Name!"),
    price: yup.string().required("* Fill Price!")
  })
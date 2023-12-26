import { useForm, SubmitHandler } from "react-hook-form"

import styles from "./SigninForm.module.css"

type Inputs = {
  email: string
  password: string
}

export function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data) // dispatch??;

  return (
    <form className={styles.signin__form} onSubmit={handleSubmit(onSubmit)}>
      <input className={styles.signin__input} placeholder="example@gmail.com" {...register("email", { required: true })} />
      {errors.email && <span>Вы не заполнили почту!</span>}

      <input className={styles.signin__input} placeholder="password" {...register("password", { required: true })} />
      {errors.password && <span>Вы не написали пароль!</span>}

      <button className={styles.signin__btn} type="submit">Войти</button>
    </form>
  )
}
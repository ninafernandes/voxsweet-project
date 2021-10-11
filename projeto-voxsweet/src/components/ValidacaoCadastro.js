import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

const ValidacaoCadastro = () => (


    <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                console.log("Entrando", values)
            }, 500);
        }}
        // Início da validação do formulário
        validationSchema={Yup.object().shape({
            email: Yup.string()
                .email("O e-mail deverá ser válido.")
                .required("O E-mail é obrigatório.")
                .max(100, "Ultrapassou a quantidade de caracteres permitidos."),

            password: Yup.string()
                .required("A senha é obrigatória.")
                .min(6, "A senha deverá ter no mínimo 6 caracteres.")
                .max(50, "Ultrapassou a quantidade de caracteres permitidos.")
        })}
    >

        {props => {
            const {
                values,
                touched, // Documentação
                errors, // Errors
                isSubmitting, // Se está sendo submit ou não
                handleChange,
                handleBlur,
                handleSubmit // Submited.
            } = props

            return (

                <form className="form-control-style" autoComplete="off" onSubmit={handleSubmit}>
                    <div className="form-box">
                        <h1 className="login-text"> Faça o login na sua conta! </h1>
                        <input
                            name="email"
                            value={values.email}
                            type="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="E-mail"
                            className={errors.email  && "error input-box"} />

                        {errors.email && (
                            <div className="input-feedback">{errors.email}</div>
                        )}

                        <input
                            name="password"
                            value={values.password}
                            type="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Senha"
                            className={errors.password && touched.password && "error input-box"}
                        />

                        {errors.password && touched.password && (
                            <div className="input-feedback">{errors.password}</div>
                        )}

                        <button className="login-button" type="submit" disabled={isSubmitting}>Entrar</button>

                        <div className="linha-button"></div>

                        <p className="text-cadastro">Não tem uma conta? <a href="#cadastro" className="cadastro-link">Cadastre-se</a></p>
                    </div>

                </form>

            )
        }}
    </Formik>
)

export default ValidacaoCadastro
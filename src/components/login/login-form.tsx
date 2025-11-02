"use client";

import login from "@/actions/login";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import Button from "../button";

function FormButton() {
  const { pending, data } = useFormStatus();
  console.log(pending, data);

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Carregando...</Button>
      ) : (
        <Button disabled={pending}>Entrar</Button>
      )}
    </>
  );
}

export default function LoginForm() {
  const [state, action] = useFormState(login, {
    ok: false,
    error: '',
    data: null
  })

  return (
    <form action={action}>
      <input type="text" name="username" placeholder="usuário" />
      <input type="password" name="password" placeholder="senha" />
      <FormButton />
      <span>{state.error}</span>
    </form>
  );
}

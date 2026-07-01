"use client"

import { type TLoginSchema, loginSchema } from "../model/loginSchema"
import { useAuth } from "@/shared"
import { authStore } from "@/shared/lib/stores/auth.store"
import { Button } from "@/shared/ui/button"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/shared/ui/field"
import { Input } from "@/shared/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { observer } from "mobx-react-lite"
import { useTransitionRouter } from "next-view-transitions"
import { useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"

export const Login = observer(() => {
	const { login } = useAuth()

	const router = useTransitionRouter()
	const methods = useForm<TLoginSchema>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			login: "",
			password: ""
		}
	})

	const {
		handleSubmit,
		control,
		formState: { errors }
	} = methods

	const onSubmit = (data: TLoginSchema) => {
		login()

		if (authStore.isLoggedIn) {
			toast.success("login succesfuly")
			router.replace("/dashboard")
		}
	}

	useEffect(() => {
		if (!!errors.login || errors.login) {
			toast.error("Something went wrong, please try again")
		}
	}, [errors.login, errors.password])

	return (
		<div className="mx-4 max-h-[90vh] w-full max-w-sm overflow-y-auto rounded-lg bg-white p-6 dark:bg-neutral-800">
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1 className="text-center text-2xl">Login</h1>
				<FieldGroup>
					<Controller
						control={control}
						name="login"
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={"login-field"}>Email</FieldLabel>
								<Input
									id={"login-field"}
									aria-invalid={fieldState.invalid}
									placeholder={"Email"}
									{...field}
								/>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>
					<Controller
						control={control}
						name="password"
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={"password-field"}>Password</FieldLabel>
								<Input
									type="password"
									id={"password-field"}
									aria-invalid={fieldState.invalid}
									placeholder={"******"}
									{...field}
								/>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>
				</FieldGroup>
				<Button
					className={"mt-6 w-full"}
					type="submit"
				>
					Login
				</Button>
			</form>
		</div>
	)
})

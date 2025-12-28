import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import loginSchema from "@/schemas/loginSchema"
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import * as z from 'zod';
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const Login = () => {

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    })

    const onSubmit = (data: z.infer<typeof loginSchema>) => {
        console.log(data);
    }


    return (
        <div className="w-full flex flex-col items-center gap-2 py-5">
            <header className="my-4">
                <h1 className="text-2xl font-semibold italic">Instagram</h1>
            </header>

            <section className="w-full">
                <Card className="w-full px-10">
                    <CardContent>
                        <form method="post" onSubmit={form.handleSubmit(onSubmit)}>
                            <FieldGroup className="gap-1">
                                <Controller
                                    name="username"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <Input
                                                {...field}
                                                aria-invalid={fieldState.invalid}
                                                placeholder="Username, Phone or Email"
                                                autoComplete="on"
                                            />
                                            {fieldState.invalid && (
                                                <FieldError errors={[fieldState.error]} />
                                            )}
                                        </Field>
                                    )}
                                />
                                <Controller
                                    name="password"
                                    control={form.control}
                                    render={({ field, fieldState }) => (
                                        <Field data-invalid={fieldState.invalid}>
                                            <Input
                                                {...field}
                                                aria-invalid={fieldState.invalid}
                                                placeholder="Password"
                                                autoComplete="on"
                                            />
                                            {fieldState.invalid && (
                                                <FieldError errors={[fieldState.error]} />
                                            )}
                                        </Field>
                                    )}
                                />
                                <Button className="w-full bg-blue-700 my-5" type="submit" form="form-rhf-demo">
                                    Login
                                </Button>
                            </FieldGroup>
                        </form>
                    </CardContent>
                    <CardFooter>
                                     
                    </CardFooter>
                </Card>
            </section>

            <footer>

            </footer>
        </div>
    )
}

export default Login
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Controller, useForm } from "react-hook-form"
import { Facebook } from "lucide-react";
import { Link } from "react-router-dom";
import loginSchema from "@/schemas/loginSchema"
import * as z from 'zod';


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
        <div className="w-full flex flex-col items-center gap-2 py-5 overflow-hidden">
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
                        <div className="relative w-full h-0.5 bg-gray-800 flex justify-center my-5">
                            <span className="absolute inline-block -bottom-2.5 w-10 h-5 bg-black text-center text-xs">OR</span>
                        </div>
                    </CardContent>
                    <CardFooter className="w-full flex-col text-sm font-semibold">
                        <div className="w-full flex flex-col items-center gap-3">
                            <h5>
                                <Link to={'/facebook'} className="flex gap-2 font-semibold text-blue-700 items-center">
                                    <Facebook size={20} />
                                    <span>Log in with Facebook</span>
                                </Link>
                            </h5>
                            <h5 className="text-center hover:border-b transition-all">
                                <Link to={'/forgot-password'}>Forgot Password?</Link>
                            </h5>
                        </div>
                        <div className="mt-10">
                            <h5 className="flex gap-1">
                                Don't have an account?
                                <Link to={'/sign-up'} className="text-blue-700">Sign up</Link>
                            </h5>
                        </div>
                    </CardFooter>
                </Card>
            </section>

            <footer className="mt-16">
                <div className="px-10 text-center my-4 text-gray-400">
                    {
                        ['Meta', 'About', 'Blogs', 'Jobs', 'Help', 'API', 'Privacy', 'Terms', 'Locations', 'Gram+ Lite', 'Meta AI', 'Threads'].map((keys, index) => (
                            <span className="text-xs font-semibold px-3 inline-block" key={keys + index}>{keys}</span>
                        ))
                    }
                </div>
                <p className="text-center text-xs">
                    &copy; 2025 gram+ from me
                </p>
            </footer>
        </div>
    )
}

export default Login
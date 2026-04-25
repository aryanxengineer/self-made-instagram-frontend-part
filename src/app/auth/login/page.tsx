import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldError, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { signinUser } from "@/features/auth/authActions";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";

// ----------------------
// Validation Schema
// ----------------------

const identifierSchema = z
  .string()
  .min(3, "Identifier must be at least 3 characters")
  .refine((val) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;
    const usernameRegex = /^[a-zA-Z0-9_]{3,30}$/;

    return (
      emailRegex.test(val) || phoneRegex.test(val) || usernameRegex.test(val)
    );
  }, "Enter a valid email, phone number, or username");

const formSchema = z.object({
  identifier: identifierSchema,
  password: z.string().min(6, "Password must be at least 8 characters"),
});

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isLoading } = useAppSelector((state) => state.auth);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      await dispatch(signinUser(data)).unwrap();
      toast.success("Login successfull");
      navigate("/");
    } catch (err: any) {
      toast.error(err || "Signup failed");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl border backdrop-blur">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-semibold tracking-tight">
            Edvora
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Your Learning Platform
          </p>
        </CardHeader>

        <CardContent>
          <form
            id="login-form"
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5"
          >
            <FieldGroup>
              {/* Identifier */}
              <Controller
                name="identifier"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={fieldState.invalid}
                    className="space-y-1"
                  >
                    <Input
                      {...field}
                      placeholder="email / phone / username"
                      autoComplete="off"
                      className="h-11 rounded-lg"
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* Password */}
              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    data-invalid={fieldState.invalid}
                    className="space-y-1"
                  >
                    <Input
                      {...field}
                      type="password"
                      placeholder="Enter your password"
                      className="h-11 rounded-lg"
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col gap-3">
          <Button
            type="submit"
            form="login-form"
            className="w-full h-11 rounded-lg text-base"
            disabled={isLoading}
          >
            {isLoading ? (
              <span>
                <Spinner />
                {"Loggining in..."}
              </span>
            ) : (
              <span>Login</span>
            )}
          </Button>
          <p className="text-sm text-muted-foreground">
            If you don't have an account?{" "}
            <Link className="hover:underline" to={"/register"}>
              Register
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;

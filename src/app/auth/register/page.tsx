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

import { signupInputSchema } from "@/schemas/auth";
import { signupUser } from "@/features/auth/authActions";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);

  const form = useForm<
    z.input<typeof signupInputSchema>,
    any,
    z.infer<typeof signupInputSchema>
  >({
    resolver: zodResolver(signupInputSchema),
    defaultValues: {
      fullname: "",
      username: "",
      email: "",
      phoneNumber: "",
      password: "",
      dateOfBirth: "",
      gender: 2,
    },
  });

  async function onSubmit(data: z.infer<typeof signupInputSchema>) {
    try {
      await dispatch(signupUser(data)).unwrap();
      toast.success("User registered successfully");
      form.reset();
      navigate("/");
    } catch (err: any) {
      toast.error(err || "Registration failed");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-3 sm:p-4 overflow-hidden">
      <Card className="w-full h-full max-w-6xl grid grid-cols-1 md:grid-cols-2 shadow-xl sm:shadow-2xl rounded-2xl sm:rounded-3xl overflow-hidden border backdrop-blur">
        {/* LEFT SIDE (HIDDEN ON MOBILE) */}
        <div className="hidden md:flex flex-col justify-center items-center p-10">
          <h2 className="text-3xl font-semibold mb-4">Welcome</h2>
          <p className="text-sm text-gray-300 text-center max-w-xs">
            Create your account and start your journey with a modern experience.
          </p>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div className="flex flex-col justify-center w-full h-full px-4 py-6 sm:px-6 md:px-8 md:py-8">
          {/* Header */}
          <CardHeader className="space-y-1 text-center md:text-left p-0 mb-4 sm:mb-6">
            <CardTitle className="text-xl sm:text-2xl font-semibold tracking-tight">
              Create Account
            </CardTitle>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Join and start your journey
            </p>
          </CardHeader>

          {/* Form */}
          <CardContent className="p-0">
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col gap-3 sm:gap-4 md:grid md:grid-cols-2"
            >
              <FieldGroup className="contents">
                {/* Fullname */}
                <Controller
                  name="fullname"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <Input {...field} placeholder="Full Name" />
                      <FieldError errors={[fieldState.error]} />
                    </Field>
                  )}
                />

                {/* Username */}
                <Controller
                  name="username"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <Input {...field} placeholder="Username" />
                      <FieldError errors={[fieldState.error]} />
                    </Field>
                  )}
                />

                {/* Email */}
                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <Input
                        {...field}
                        value={field.value || ""}
                        placeholder="Email (optional)"
                      />
                      <FieldError errors={[fieldState.error]} />
                    </Field>
                  )}
                />

                {/* Phone */}
                <Controller
                  name="phoneNumber"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <Input
                        {...field}
                        value={field.value || ""}
                        placeholder="Phone (optional)"
                      />
                      <FieldError errors={[fieldState.error]} />
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
                      className="md:col-span-2"
                    >
                      <Input
                        {...field}
                        type="password"
                        placeholder="Password"
                      />
                      <FieldError errors={[fieldState.error]} />
                    </Field>
                  )}
                />

                {/* DOB */}
                <Controller
                  name="dateOfBirth"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <Input
                        type="date"
                        value={field.value || ""}
                        onChange={field.onChange}
                      />
                      <FieldError errors={[fieldState.error]} />
                    </Field>
                  )}
                />

                {/* Gender */}
                <Controller
                  name="gender"
                  control={form.control}
                  render={({ field }) => (
                    <select
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                      value={field.value ?? ""}
                      className="h-11 rounded-lg border px-2"
                    >
                      <option value={0}>Male</option>
                      <option value={1}>Female</option>
                      <option value={2}>Other</option>
                    </select>
                  )}
                />
              </FieldGroup>

              {/* Submit Button */}
              <div className="md:col-span-2 mt-2">
                <Button
                  type="submit"
                  className="w-full h-11 rounded-lg text-sm sm:text-base"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <Spinner />
                      <span>Registering...</span>
                    </div>
                  ) : (
                    "Register"
                  )}
                </Button>
              </div>
            </form>
          </CardContent>

          {/* Footer */}
          <CardFooter className="flex flex-col gap-2 sm:gap-3 mt-4 sm:mt-6 p-0 text-center md:text-left">
            <p className="text-xs sm:text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link className="hover:underline" to="/login">
                Login
              </Link>
            </p>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};

export default Register;

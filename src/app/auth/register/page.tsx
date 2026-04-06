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
import { Link } from "react-router-dom";

import { signupInputSchema } from "@/schemas/auth";
import { signupUser } from "@/features/auth/authActions";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";

const Register = () => {
  const dispatch = useAppDispatch();
  const { signupLoading } = useAppSelector((state) => state.auth);

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
      gender: "2",
    },
  });

  async function onSubmit(data: z.infer<typeof signupInputSchema>) {
    try {
      await dispatch(signupUser(data)).unwrap();
      toast.success("User registered successfully");
      form.reset();
    } catch (err: any) {
      toast.error(err || "Registration failed");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-200 p-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl border bg-white/80 backdrop-blur">
        {/* Header */}
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-semibold tracking-tight">
            Create Account
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Join and start your journey
          </p>
        </CardHeader>

        {/* Form */}
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FieldGroup>
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
                  <Field data-invalid={fieldState.invalid}>
                    <Input {...field} type="password" placeholder="Password" />
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
                    onChange={(e) => field.onChange(Number(e.target.value))} // 🔥 convert to number
                    value={field.value ?? ""}
                    className="h-11 rounded-lg border px-2"
                  >
                    <option value="">Select Gender</option>
                    <option value={0}>Male</option>
                    <option value={1}>Female</option>
                    <option value={2}>Other</option>
                  </select>
                )}
              />
            </FieldGroup>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-11 rounded-lg text-base"
              disabled={signupLoading}
            >
              {signupLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <Spinner />
                  <span>Registering...</span>
                </div>
              ) : (
                "Register"
              )}
            </Button>
          </form>
        </CardContent>

        {/* Footer */}
        <CardFooter className="flex flex-col gap-3">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link className="hover:underline" to="/login">
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
